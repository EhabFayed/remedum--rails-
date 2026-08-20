// Emits the bilingual site as Rails ERB views + layouts.
// Run from the Rails app root:  node tools/build-views.mjs
// - app/views/pages/{ar,en}/**.html.erb   (page bodies + content_for metadata)
// - app/views/layouts/site_{ar,en}.html.erb (head + header + footer chrome)
// The two home pages (app/views/pages/{en,ar}/home.html.erb) are standalone
// full documents maintained by hand — this script never touches them.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { footer, NAV, I, WA, btn } from './site-src/lib.mjs';
import pagesA from './site-src/pages-a.mjs';
import pagesB from './site-src/pages-b.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const makeCtx = (L) => {
  const u = (p) => (p === '' ? (L === 'ar' ? '/ar/' : '/') : `/${L}/${p}/`);
  const other = L === 'ar' ? 'en' : 'ar';
  const alt = (p) => (p === '' ? (L === 'ar' ? '/' : '/ar/') : `/${other}/${p}/`);
  return { L, T: (ar, en) => (L === 'ar' ? ar : en), u, alt, WA };
};

const rq = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

const FONTS = {
  ar: 'https://fonts.googleapis.com/css2?family=Cairo:wght@700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Archivo:wght@600;700;800&display=swap',
  en: 'https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
};

/* header with ERB-driven active state + language pill */
const headerERB = (ctx) => `
<header class="site-header">
  <div class="site-header__inner">
    <a class="logo" href="${ctx.u('')}">
      <span class="logo__mark">${I.leaf(16)}</span>
      <span class="logo__text"><b>${ctx.T('جذور الجمال', 'Beauty Roots')}</b><i class="lat">${ctx.T('BEAUTY ROOTS', 'جذور الجمال')}</i></span>
    </a>
    <nav class="nav" aria-label="${ctx.T('التنقل الرئيسي', 'Main navigation')}">
      <ul class="nav__list">
        ${NAV(ctx).map((item) => `
        <li class="nav__item">
          <a class="nav__link<%= ' is-active' if content_for(:nav_active).to_s == '${item.key}' %>" href="${item.href ?? item.items[0][1]}">${item.label}${item.items ? I.chev() : ''}</a>
          ${item.items ? `<div class="dropdown">${item.items.map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}</div>` : ''}
        </li>`).join('')}
      </ul>
    </nav>
    <div class="header__actions">
      ${btn(ctx.T('طلب عرض سعر', 'Request a Quote'), ctx.u('medical/quote'), 'dark', I.arrow(14))}
      <a class="wa-btn" href="${WA}" target="_blank" rel="noopener">${I.wa(17)}${ctx.T('واتساب', 'WhatsApp')}</a>
      <a class="lang-pill" href="<%= alt_path %>" lang="${ctx.L === 'ar' ? 'en' : 'ar'}" dir="${ctx.L === 'ar' ? 'ltr' : 'rtl'}">${ctx.T('EN', 'عربي')}</a>
      <button class="burger" aria-label="${ctx.T('القائمة', 'Menu')}"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;

const layout = (ctx) => {
  const isAr = ctx.L === 'ar';
  return `<%
  self_path = request.path.end_with?('/') ? request.path : "#{request.path}/"
  alt_path  = ${isAr
    ? `self_path == '/ar/' ? '/' : self_path.sub(%r{\\A/ar/}, '/en/')`
    : `self_path.sub(%r{\\A/en/}, '/ar/')`}
%><!DOCTYPE html>
<html lang="${ctx.L}" dir="${isAr ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= content_for(:title) %> — ${ctx.T('جذور الجمال | Beauty Roots', 'Beauty Roots | جذور الجمال')}</title>
  <meta name="description" content="<%= content_for(:description) %>">
  <link rel="alternate" hreflang="${ctx.L}" href="<%= self_path %>">
  <link rel="alternate" hreflang="${isAr ? 'en' : 'ar'}" href="<%= alt_path %>">
  <link rel="alternate" hreflang="x-default" href="<%= ${isAr ? 'alt_path' : 'self_path'} %>">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${FONTS[ctx.L]}">
  <link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
${headerERB(ctx)}
<main>
<%= yield %>
</main>
${footer(ctx)}
<script src="/assets/js/site.js"></script>
</body>
</html>
`;
};

let total = 0;
for (const L of ['ar', 'en']) {
  const ctx = makeCtx(L);
  writeFileSync(join(ROOT, 'app/views/layouts', `site_${L}.html.erb`), layout(ctx));
  for (const p of [...pagesA(ctx), ...pagesB(ctx)]) {
    if (p.path === '') continue; // homes are hand-maintained
    const dir = join(ROOT, 'app/views/pages', L, dirname(p.path) === '.' ? '' : dirname(p.path));
    mkdirSync(dir, { recursive: true });
    const view = `<% content_for :title, '${rq(p.title)}' %>
<% content_for :description, '${rq(p.desc)}' %>
<% content_for :nav_active, '${p.active}' %>
${p.body}
`;
    writeFileSync(join(ROOT, 'app/views/pages', L, p.path + '.html.erb'), view);
    total++;
  }
}
console.log('wrote', total, 'views + 2 layouts');
