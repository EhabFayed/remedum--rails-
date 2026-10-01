// Writes ONLY the three pages from tools/site-src/pages-c.mjs (HA Filler,
// Hairont, GynWell) as Rails templates, and merges their strings into
// config/locales/content.{en,ar}.yml under their own key prefixes.
// Unlike build-views.mjs it never renumbers or rewrites any other key or
// template, so hand edits elsewhere are safe.   Run: node tools/build-views-c.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import pagesC from './site-src/pages-c.mjs';
import { WA } from './site-src/lib.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PREFIX = { 'brands/ha-filler': 'hfil', 'brands/hairont': 'hair', 'brands/gynwell': 'gynw' };
const TOKEN = /⟦([a-z0-9_]+)⟧/g;
const dict = {}; const seen = new Map(); const counter = {};
let section = 'hfil';
const resolve = (s, loc) => String(s).replace(TOKEN, (_, k) => dict[k][loc]);
const record = (ar, en) => {
  const a = resolve(ar, 'ar'), e = resolve(en, 'en'); const sig = a + '\u0000' + e;
  if (seen.has(sig)) return seen.get(sig);
  counter[section] = (counter[section] || 0) + 1;
  const key = `${section}_${counter[section]}${/<[a-z]/i.test(a + e) ? '_html' : ''}`;
  dict[key] = { ar: a, en: e }; seen.set(sig, key); return key;
};
const ctx = {
  L: 'en', WA,
  T: (ar, en) => `⟦${record(ar, en)}⟧`,
  u: (p) => `<%= locale_path("${p}") %>`,
  alt: () => '<%= alt_locale_path %>',
};
// pages-c builds every page in one call; give each page its own key prefix by
// re-running the builder once per page and keeping only that page's output
const out = [];
for (const [path, pre] of Object.entries(PREFIX)) {
  section = pre;
  const page = pagesC(ctx).find((p) => p.path === path);
  out.push(page);
}
const toErb = (s) => String(s).replace(TOKEN, (_, k) => `<%= t('content.${k}') %>`);
for (const p of out) {
  const slug = p.path.replace(/[^a-z0-9]+/g, '_');
  dict[`${slug}_title`] = { ar: resolve(p.title, 'ar'), en: resolve(p.title, 'en') };
  dict[`${slug}_description`] = { ar: resolve(p.desc, 'ar'), en: resolve(p.desc, 'en') };
  writeFileSync(join(ROOT, 'app/views/pages', `${p.path}.html.erb`),
    `<% content_for :title, t('content.${slug}_title') %>\n<% content_for :description, t('content.${slug}_description') %>\n<% content_for :nav_active, '${p.active}' %>\n${toErb(p.body)}\n`);
}
// merge: replace keys that exist, append new ones; every other line untouched
for (const loc of ['en', 'ar']) {
  const file = join(ROOT, 'config/locales', `content.${loc}.yml`);
  const lines = readFileSync(file, 'utf8').replace(/\n$/, '').split('\n');
  const idx = new Map();
  lines.forEach((l, i) => { const m = l.match(/^    ([a-z0-9_]+): /); if (m) idx.set(m[1], i); });
  let added = 0, updated = 0;
  for (const [k, v] of Object.entries(dict)) {
    const line = `    ${k}: ${JSON.stringify(v[loc])}`;
    if (idx.has(k)) { if (lines[idx.get(k)] !== line) { lines[idx.get(k)] = line; updated++; } }
    else { lines.push(line); added++; }
  }
  writeFileSync(file, lines.join('\n') + '\n');
  console.log(`${loc}: ${added} keys added, ${updated} updated`);
}
console.log('wrote', out.length, 'templates:', out.map((p) => p.path).join(', '));
