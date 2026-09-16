# Beauty Roots — جذور الجمال

Bilingual marketing site (Arabic at `/ar/`, English at `/`) for Beauty Roots
Trading Co., the licensed Saudi distributor and exclusive agent for ReMedium,
plus the dashboard the team uses to run it.

Rails 8.0 · Ruby 3.2 · PostgreSQL · no JavaScript build step.

---

## Getting it running

```bash
bundle install
bin/rails db:create db:migrate db:seed
bin/rails server
```

The seed is idempotent and mirrors what the static site already publishes, so a
first run changes nothing visible — it only moves that content to where the
dashboard can edit it.

It also creates the first administrator. Set the password yourself:

```bash
SEED_ADMIN_PASSWORD='something-long-and-unique' bin/rails db:seed
```

Without the variable the account falls back to a placeholder password that must
be changed before the site is deployed anywhere public.

---

## The two halves of the site

### 1. Marketing pages — files on disk

Twenty-three inner pages are **generated**, not hand-written:

```bash
node tools/build-views.mjs
```

reads `tools/site-src/*.mjs` and writes `app/views/pages/**.html.erb` together
with `config/locales/content.{ar,en}.yml`. One template serves both languages;
`I18n.locale` picks the strings.

> **Edit the generator, never the generated file.** The next person to run the
> build will overwrite anything typed directly into `app/views/pages/`.

The two home pages (`app/views/pages/home.{ar,en}.html.erb`) are the exception:
they are full hand-maintained documents and the generator leaves them alone.

Static CSS, JS, images and video live under `public/assets/`. There is no asset
pipeline; the files are served as they are.

### 2. Content the client owns — the database

Anything the client changes without a deploy comes out of Postgres and is edited
at **`/admin`**:

| Section | Controls |
|---|---|
| المقالات | Knowledge-centre articles: sections, images, FAQs, SEO |
| التصنيفات | Article categories |
| الأسئلة الشائعة | General FAQ entries |
| العلامات · المنتجات | Brand and product records |
| الاعتمادات | The SFDA/GMP/ISO accreditation strip and the certifications page |
| الطلبات | Quote requests and contact messages, with CSV export |
| مكتبة الصور | Uploaded media |
| المستخدمون | Dashboard accounts and roles (admins only) |
| إعدادات الموقع | Phone, email, address, CR/VAT, social links |

Every site setting falls back to the literal the page shipped with, so an empty
field can never blank out the footer.

---

## The article editor

Modelled on the MilaKnight Tech dashboard. An article is a list of **sections**;
each section carries an optional heading, formatted text per language, and an
image per language — because an image with Arabic text on it does not belong on
the English page. The English image and the English cover both fall back to the
Arabic one when they are left empty.

- The rich text editor is a small `contenteditable` widget in
  `public/assets/admin/admin.js`. Pasting from Word or Google Docs keeps the
  structure and drops the styling.
- **The editor is not a security boundary.** Every body is re-sanitised on the
  server by `lib/rich_text.rb` against a strict tag allowlist before it is
  stored.
- Uploads become WebP at 1600px max width with a descriptive filename, written
  to `public/uploads/` (git-ignored) and recorded in the media library.
- Reading time is computed from the longer of the two languages, not their sum.
- The publication date is stamped on first publish and never moves after that.

---

## Deleting

Everything destructive in the dashboard is a **hold-to-confirm** button: 1.4s to
arm, instant to cancel. Deletion here is permanent, and a dialog people click
past is not a guard.

---

## Checks

```bash
bin/rubocop        # style
bin/brakeman       # static security scan
node tools/build-views.mjs && git diff --stat   # generator must be idempotent
```

---

## Known open questions

- **ReMedium durations.** The site shows Fine 9–12, Mid 12–18, Sub-Q 18–24
  months. The 2026 company profile states 6–9, 9–12 and 12–18. The seed follows
  the site; the client has to settle which is right.
- **Product colours.** Real packaging is cyan / yellow / purple; the site draws
  all three in shades of green.
- **Logo files.** Only a low-resolution raster of the wordmark exists. The header
  currently uses a leaf glyph plus text.
