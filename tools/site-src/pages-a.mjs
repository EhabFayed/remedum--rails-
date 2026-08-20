// Home (Arabic only — the English home is the existing landing at /)
// + Brands section: hub, ReMedium, product pages, HA Filler.
import {
  I, ph, chip, eyebrow, secHead, btn, noteStrip, darkStrip, durBar,
  products, miniProduct, productCard, ACCRED, accredStrip, compareTable,
  crumbs, pageHero, WA,
} from './lib.mjs';

export default function pagesA(ctx) {
  const { T, u, L } = ctx;
  const P = products(ctx);
  const pages = [];
  const add = (path, title, desc, active, body) => pages.push({ path, title, desc, active, body });

  // NOTE: the homes are standalone hand-built files — the English landing at
  // /index.html and its Arabic twin at /ar/index.html (same markup + main.js,
  // with assets/css/rtl.css). This generator must NOT emit a home page.

  /* ============================================================
     BRANDS HUB — brands
  ============================================================ */
  add('brands',
    T('العلامات والمنتجات', 'Brands & Products'),
    T('محفظة جذور الجمال: ReMedium بوكالة حصرية، HA Filler، وأربع علامات عناية بالبشرة — كلها مسجّلة لدى الهيئة.', 'The Beauty Roots portfolio: ReMedium under exclusive agency, HA Filler, and four skincare brands — all SFDA-registered.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products')]],
    T('العلامات والمنتجات', 'Brands & Products'),
    T('بوابة متخصصة لنقل التشكيلات العالمية إلى السوق السعودي. كل علامة صفحة أم ومنتجاتها تظهر تحتها — ولا يُطرح أي منتج قبل اكتمال متطلبات تسجيله لدى الهيئة العامة للغذاء والدواء.',
      'A specialised gateway bringing global portfolios to the Saudi market. Every brand is a parent page with its products beneath it — and no product is listed before its SFDA registration requirements are complete.'))}

<section class="section"><div class="container">
  <div class="dark-panel" style="padding:44px 46px;display:grid;grid-template-columns:1.25fr .75fr;gap:40px;align-items:center;box-shadow:var(--shadow-card)">
    <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
      ${chip(T('وكالة حصرية في المملكة', 'Exclusive agency in Saudi Arabia'), 'green')}
      <h2 class="lat" dir="ltr" style="font-size:44px;font-weight:800;letter-spacing:-.02em">ReMedium</h2>
      <p style="font-size:14px;line-height:2;color:rgba(255,255,255,.78)">${T(
      'فيلر هيالورونيك أسيد كوري من إنتاج <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> في سيول، يُصنَّع في مرافق معتمدة بشهادة ممارسات التصنيع الجيد (GMP). «جذور الجمال» هي الوكيل الحصري المعتمد في المملكة وتتولى التوريد والتوزيع والدعم الفني المباشر للعيادات.',
      'A Korean hyaluronic-acid filler produced by <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> in Seoul, manufactured in GMP-certified facilities. Beauty Roots is the authorised exclusive agent in Saudi Arabia, handling import, distribution and direct technical support to clinics.')}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px">${ACCRED(T).map(([b]) => chip(`<span class="lat" dir="ltr">${b}</span>`, 'dark')).join('')}</div>
      <div style="margin-top:6px">${btn(T('صفحة العلامة', 'Brand page'), u('brands/remedium'), 'white')}</div>
    </div>
    <div style="position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.13)">
      <img src="/assets/img/clinic.jpg" alt="${T('علاج تجميلي داخل عيادة', 'Aesthetic treatment in a clinic')}" style="width:100%;height:330px;object-fit:cover">
      <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصورة المنتج المعتمدة من المصنّع', 'Placeholder — to be replaced by the manufacturer’s approved product image')}</span>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-3" style="gap:18px">
    ${Object.values(P).map((p) => productCard(ctx, p)).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="card">
    <div style="display:flex;align-items:center;gap:22px;flex-wrap:wrap">
      <span class="icon-tile" style="width:56px;height:56px;border-radius:16px">${I.eye(24)}</span>
      <div style="flex:1;min-width:260px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:6px;flex-wrap:wrap">
          <b class="lat" dir="ltr" style="font-size:19px;font-weight:800">HA Filler</b>
          ${chip(T('جهاز طبي — جراحات العيون', 'Medical device — ophthalmic surgery'))}
          ${chip(T('مسجّل لدى <span class="lat" dir="ltr">SFDA</span>', '<span class="lat" dir="ltr">SFDA</span>-registered'), 'green')}
        </div>
        <p style="font-size:13px">${T('هيالورونيك أسيد يُستخدم في جراحات العيون — صفحة مستقلة بلغة طبية بحتة، خارج مسار التجميل.', 'Hyaluronic acid used in ophthalmic surgery — a standalone page in strictly medical language, outside the aesthetics track.')} ${T('يُعرض بالتسمية التجارية الواردة في شهادة تسجيل الهيئة.', 'Listed under the trade name stated on its SFDA registration certificate.')}</p>
      </div>
      <a href="${u('brands/ha-filler')}" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--green-600);white-space:nowrap">${T('الصفحة الطبية', 'Medical page')} ${I.arrow(13)}</a>
    </div>
  </div>
</div></section>

<section class="section--mint" id="skincare-external"><div class="container">
  ${secHead(T('الإحالة الخارجية', 'External referral'), T('العناية بالبشرة', 'Skincare'),
    T('أربع علامات عناية مسجّلة لدى الهيئة تبقى ظاهرة هنا كمحفظة — ومحتواها الكامل يعيش في موقعها القائم. لا صفحات منتجات ولا أسعار ولا نص منقول هنا؛ ويُسمح بصورة واحدة معتمدة.',
      'Four SFDA-registered skincare brands stay visible here as portfolio — their full content lives on their existing site. No product pages, no prices, no copied text here; one approved image is allowed.'))}
  <div class="grid" style="grid-template-columns:.85fr repeat(4,minmax(0,1fr))">
    <div class="arch-media arch-media--card" style="min-height:180px"><img src="/assets/img/skincare.jpg" alt="${T('تشكيلة عناية بالبشرة', 'Skincare range')}"></div>
    ${[
      ['SKIN1004', T('خط Madagascar Centella', 'Madagascar Centella line')],
      ['Purito', T('خط Wonder Releaf Centella', 'Wonder Releaf Centella line')],
      ['Orjena', T('منتجات التنظيف والعناية', 'Cleansing & care products')],
      ['Herb Earth', T('العناية بالبشرة والشعر', 'Skin & hair care')],
    ].map(([n, d]) => `
    <div class="card" style="display:flex;flex-direction:column;gap:10px;padding:24px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <b class="lat" dir="ltr" style="font-size:16.5px;font-weight:800">${n}</b>
        <span style="color:var(--green)">${I.ext(15)}</span>
      </div>
      <p>${d}</p>
      <span style="font-size:11.5px;font-weight:700;color:var(--green-600)">${T('مسجّلة لدى الهيئة', 'SFDA-registered')}</span>
    </div>`).join('')}
  </div>
  <div style="margin-top:22px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap">
    ${btn(T('زيارة موقع العناية بالبشرة', 'Visit the skincare site'), 'https://beautyrooots.com', 'green', I.ext(14), ' target="_blank" rel="noopener"')}
    <p style="font-size:12px;color:var(--muted);max-width:560px">${T('الرابط يفتح في تبويب جديد — وتُقاس النقرات لمعرفة كم زائرًا ينتقل بين الموقعين.', 'The link opens in a new tab — clicks are measured to see how many visitors cross between the two sites.')}</p>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('قاعدة المحفظة', 'The portfolio rule'),
    T('جميع المنتجات المدرجة في المحفظة مسجّلة لدى الهيئة العامة للغذاء والدواء، ولا يُطرح أي منتج قبل اكتمال متطلبات تسجيله وتداوله. أي علامة تُضاف لاحقًا تأخذ القالب نفسه: صفحة أم ومنتجاتها تحتها، وتظهر تلقائيًا في القائمة وفي هذه الصفحة دون تعديل في البنية.',
      'Every product in the portfolio is registered with the Saudi Food & Drug Authority, and nothing is listed before its registration and circulation requirements are complete. Any brand added later takes the same template — a parent page with its products beneath it — and appears automatically in the menu and on this page with no structural change.'))}
</div></section>
`);

  /* ============================================================
     REMEDIUM BRAND — brands/remedium
  ============================================================ */
  add('brands/remedium',
    T('ReMedium — الوكالة الحصرية', 'ReMedium — Exclusive Agency'),
    T('فيلر هيالورونيك أسيد كوري من Forever 18 INTERNATIONAL — جذور الجمال الوكيل الحصري المعتمد في السعودية.', 'A Korean hyaluronic-acid filler by Forever 18 INTERNATIONAL — Beauty Roots is the authorised exclusive agent in Saudi Arabia.'),
    'brands', `
<section class="page-hero"><div class="container"><div class="page-hero__inner hero-split">
  <div>
    ${crumbs(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">ReMedium</span>']])}
    <h1 class="page-title"><span class="lat" dir="ltr" style="letter-spacing:-.02em">ReMedium</span> — ${T('الوكالة الحصرية', 'Exclusive Agency')}</h1>
    <p class="page-hero__lead">${T(
      'فيلر هيالورونيك أسيد كوري من إنتاج Forever 18 INTERNATIONAL في سيول، يُصنَّع في مرافق معتمدة بشهادة ممارسات التصنيع الجيد. «جذور الجمال» هي الوكيل الحصري المعتمد في المملكة العربية السعودية.',
      'A Korean hyaluronic-acid filler produced by Forever 18 INTERNATIONAL in Seoul, manufactured in GMP-certified facilities. Beauty Roots is the authorised exclusive agent in the Kingdom of Saudi Arabia.')}</p>
    <div class="page-hero__chips">${chip(T('وكالة حصرية في المملكة', 'Exclusive agency in KSA'), 'green')}${chip(T('مسجّل لدى الهيئة العامة للغذاء والدواء', 'Registered with the SFDA'))}${chip(T('سجل سريري ممتد منذ 2009', 'Clinical record since 2009'))}</div>
  </div>
  <div class="arch-media">
    <img src="/assets/img/inject.jpg" alt="${T('علاج فيلر هيالورونيك أسيد', 'Hyaluronic-acid filler treatment')}" style="height:380px">
    <span class="media-shade"></span>
    <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصور المصنّع المعتمدة', 'Placeholder — to be replaced by approved manufacturer imagery')}</span>
  </div>
</div></div></section>

<section class="section"><div class="container">
  ${secHead(T('المنشأ والمصنّع', 'Origin & manufacturer'), T('من أين يأتي المنتج؟', 'Where does the product come from?'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [I.pin(20), T('بلد المنشأ', 'Country of origin'), T('كوريا الجنوبية — سيول. ترخيص الجهة الرقابية الكورية <span class="lat" dir="ltr">MFDS</span> في بلد المنشأ: المنتج معتمد للتداول في موطن تصنيعه.', 'South Korea — Seoul. Licensed by the Korean regulator <span class="lat" dir="ltr">MFDS</span> in its country of origin: the product is approved for circulation where it is made.')],
      [I.box(20), T('المصنّع', 'Manufacturer'), T('<span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> — مرافق معتمدة بشهادة ممارسات التصنيع الجيد (GMP) وخاضعة لتدقيق <span class="lat" dir="ltr">MDSAP</span> متعدد الجهات.', '<span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> — GMP-certified facilities under multi-authority <span class="lat" dir="ltr">MDSAP</span> audit.')],
      [I.shield(20), T('التقنية', 'Technology'), T('منصة <span class="lat" dir="ltr">MDM</span>: بنية جزيئية دقيقة موحّدة وتنقية متعددة المراحل. سجل سريري ممتد منذ 2009 بعد تجارب أُجريت في مستشفى جامعة سيول الوطنية.', 'The <span class="lat" dir="ltr">MDM</span> platform: a uniform micro-particle structure with multi-stage purification. Clinical record since 2009, following trials at Seoul National University Hospital.')],
    ].map(([ic, t, d]) => `
    <div class="card">
      <span class="icon-tile" style="margin-bottom:14px">${ic}</span>
      <h3 class="card__title" style="font-size:17px">${t}</h3>
      <p style="font-size:13px">${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div style="background:var(--mint);border-radius:28px;padding:30px 34px">
    <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:18px;flex-wrap:wrap">
      <h3 style="font-family:var(--ff-d);font-size:18px;font-weight:800">${T('الاعتمادات — كل اعتماد باسمه الكامل وبمعناه العملي', 'Accreditations — each by its full name and practical meaning')}</h3>
      <a href="${u('quality/certifications')}" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--green-600);white-space:nowrap">${T('صفحة الشهادات', 'Certifications page')} ${I.arrow(13)}</a>
    </div>
    ${accredStrip(ctx)}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('التشكيلة الرئيسية', 'The core range'), T('ثلاث كثافات — من الخطوط الدقيقة إلى التحجيم العميق', 'Three densities — from fine lines to deep volumising'),
    T('ثلاثة منتجات بتركيز 20 mg/mL، جل أحادي الطور (Monophasic)، ومادة ربط DVS. كل بطاقة تفتح صفحة منتج مستقلة بتبويبَي الجمال والعلم.',
      'Three products at 20 mg/mL — a monophasic gel with DVS cross-linking. Each card opens a standalone product page with Beauty and Science tabs.'))}
  <div class="grid grid-3" style="gap:18px">
    ${Object.values(P).map((p) => productCard(ctx, p)).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('الخصائص المميّزة', 'What sets the gel apart'), T('ما الذي يميّز الجل؟', 'Key characteristics'), T('تُعتمد الصياغة النهائية من العميل بما يطابق ملف المنتج المسجَّل.', 'Final wording to be approved against the registered product file.'))}
  <div class="grid grid-4">
    ${[
      [T('جل أحادي الطور', 'Monophasic gel'), T('قوام متجانس يمنح انسيابية في الحقن وتوزيعًا متساويًا تحت الجلد.', 'A homogeneous texture that injects smoothly and distributes evenly under the skin.')],
      [T('تنقية متعددة المراحل', 'Multi-stage purification'), T('تقليل المتبقيات لرفع درجة نقاء المنتج.', 'Reduced residuals for a higher degree of product purity.')],
      [T('ثبات نتيجة متدرّج', 'Graduated longevity'), T('ثلاث كثافات تغطي الخطوط الدقيقة والملامح المتوسطة والتحجيم العميق.', 'Three densities covering fine lines, mid-face features and deep volumising.')],
      [T('سهولة التخزين', 'Simple storage'), T('لا يحتاج سلسلة تبريد، ما يبسّط الحفظ داخل العيادة.', 'No cold chain required — simplifying in-clinic storage.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title">${t}</h4><p>${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="dark-strip">
    <h3>${T('تفاصيل تشغيلية', 'Operational details')}</h3>
    <div class="grid grid-4" style="gap:26px;margin-top:12px">
      ${[
        [T('العبوة', 'Presentation'), T('سيرنج واحد <span class="lat" dir="ltr">1.0 mL</span> لكل عبوة', 'One <span class="lat" dir="ltr">1.0 mL</span> pre-filled syringe per box')],
        [T('ظروف الحفظ', 'Storage'), T('أقل من 25 درجة مئوية — دون سلسلة تبريد', 'Below 25°C — no cold chain required')],
        [T('الصلاحية', 'Shelf life'), T('تصل إلى 36 شهرًا من تاريخ الإنتاج', 'Up to 36 months from date of manufacture')],
        [T('السجل السريري', 'Clinical record'), T('استخدام ممتد منذ 2009 — مستشفى جامعة سيول الوطنية', 'In use since 2009 — Seoul National University Hospital')],
      ].map(([t, d]) => `
      <div style="display:flex;flex-direction:column;gap:6px;border-inline-start:2px solid rgba(127,227,190,.4);padding-inline-start:16px">
        <span style="font-size:11px;font-weight:700;color:rgba(255,255,255,.55)">${t}</span>
        <b style="font-family:var(--ff-d);font-size:14.5px;font-weight:700;line-height:1.7">${d}</b>
      </div>`).join('')}
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap">
    ${btn(T('للمنشآت: طلب عرض سعر', 'Facilities: request a quote'), u('medical/quote'), 'dark')}
    ${btn(T('التدريب والدعم الفني', 'Training & technical support'), u('medical/service-model') + '#training', 'ghost')}
  </div>
</div></section>
`);

  /* ============================================================
     PRODUCT PAGES — brands/remedium/{fine,mid,sub-q}
  ============================================================ */
  for (const p of Object.values(P)) {
    add(`brands/remedium/${p.slug}`,
      `${p.name} — ${p.sub}`,
      T(`${p.name}: فيلر هيالورونيك أسيد ${p.sub} — ثباتية النتيجة ${p.dur}.`, `${p.name}: hyaluronic-acid filler, ${p.sub.toLowerCase()} — result longevity ${p.dur}.`),
      'brands', `
<section class="page-hero"><div class="container"><div class="page-hero__inner hero-split">
  <div>
    ${crumbs(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">ReMedium</span>', u('brands/remedium')], [`<span class="lat" dir="ltr">${p.name.replace('ReMedium ', '')}</span>`]])}
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
      <span class="swatch swatch--${p.swatch}" style="width:14px;height:14px"></span>
      <h1 class="page-title lat" dir="ltr" style="margin-bottom:0;letter-spacing:-.02em;font-size:clamp(28px,3vw,40px)">${p.name}</h1>
    </div>
    <p style="font-family:var(--ff-d);font-size:19px;font-weight:700;color:var(--green-900);margin-bottom:14px">${p.subLong}</p>
    <p class="page-hero__lead" style="margin-bottom:24px">${p.problem}</p>
    <div style="max-width:480px;margin-bottom:26px">${durBar(ctx, p.dur, p.from, p.to, p.color)}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      ${btn(T('للمنشآت: طلب عرض سعر', 'Facilities: request a quote'), u('medical/quote'), 'dark')}
      ${btn(T('للجمهور: اسألي طبيبك', 'Public: ask your doctor'), WA, 'ghost', I.wa(15))}
    </div>
  </div>
  <div class="arch-media">
    <img src="/assets/img/clinic.jpg" alt="${T('جلسة علاج تجميلي', 'Aesthetic treatment session')}" style="height:420px">
    <span class="media-shade"></span>
    <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصورة المنتج المعتمدة من المصنّع', 'Placeholder — to be replaced by the manufacturer’s approved product image')}</span>
  </div>
</div></div></section>

<section class="section"><div class="container" data-tabs>
  <div class="tabs">
    <button class="tab is-active" data-tab="beauty">${T('تبويب الجمال — للمستخدمة', 'Beauty — for the user')}</button>
    <button class="tab" data-tab="science">${T('تبويب العلم — للكادر الطبي', 'Science — for practitioners')}</button>
  </div>
  <div class="tab-panel" data-panel="beauty">
    <div class="grid grid-3">
      ${[
        [T('لماذا هذا المنتج؟', 'Why this product?'), p.why],
        [T('أين يُستخدم؟', 'Where is it used?'), p.where],
        [T('ماذا تتوقعين؟', 'What to expect?'), p.expect],
      ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:16px">${t}</h4><p style="font-size:13px;line-height:2">${d}</p></div>`).join('')}
    </div>
  </div>
  <div class="tab-panel" data-panel="science" hidden>
    <div class="grid grid-2" style="gap:18px;align-items:start">
      <div class="spec-table">
        ${[
          [T('التركيز', 'Concentration'), T('20 mg/mL — جل أحادي الطور (Monophasic)', '20 mg/mL — monophasic gel')],
          [T('مادة الربط', 'Cross-linking agent'), 'DVS (Divinyl Sulfone)'],
          [T('منصة التصنيع', 'Manufacturing platform'), T('MDM — بنية جزيئية دقيقة موحّدة، تنقية متعددة المراحل', 'MDM — uniform micro-particle structure, multi-stage purification')],
          [T('العبوة', 'Presentation'), T('سيرنج مملوء مسبقًا 1.0 mL لكل عبوة', '1 × 1.0 mL pre-filled syringe per box')],
          [T('الحفظ', 'Storage'), T('أقل من 25° مئوية — لا يحتاج سلسلة تبريد', 'Below 25°C — no cold chain required')],
          [T('الصلاحية', 'Shelf life'), T('حتى 36 شهرًا من تاريخ الإنتاج', 'Up to 36 months from date of manufacture')],
        ].map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${noteStrip(T('الصياغة التقنية النهائية تُعتمد بما يطابق الملف التقني المسجَّل (IFU) لدى الهيئة العامة للغذاء والدواء.', 'Final technical wording to be approved against the registered technical file (IFU) with the SFDA.'))}
        <div class="card card--mint">
          <h4 class="card__title">${T('للممارسين المرخّصين', 'For licensed practitioners')}</h4>
          <p>${T('الملف التقني الكامل وبروتوكولات الاستخدام والمواد السريرية — خلف بوابة الإقرار في قسم المعلومات الطبية.', 'The full technical file, usage protocols and clinical material sit behind the attestation gate in the Medical Information section.')}</p>
          <div style="margin-top:14px">${btn(T('قسم المعلومات الطبية', 'Medical Information'), u('medical'), 'dark', I.lock(13))}</div>
        </div>
      </div>
    </div>
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('مناطق العلاج', 'Treatment areas'),
    T(`أين يعمل <span class="lat" dir="ltr">${p.name.replace('ReMedium ', '')}</span>؟ — كما ورد في ملف الشركة`, `Where does <span class="lat" dir="ltr">${p.name.replace('ReMedium ', '')}</span> work? — as stated in the company profile`),
    T('سيكشن مستقل خارج التبويبين، مرئي للجمهورين. كل منطقة يصل إليها رابط ثابت من خريطة الوجه في الرئيسية ومن المقالات.',
      'A standalone section outside the tabs, visible to both audiences. Each area is reachable by a stable link from the homepage face map and from articles.'))}
  <div class="hero-split" style="grid-template-columns:.9fr 1.1fr;gap:36px">
    <div class="face-wrap" style="max-width:440px;margin:0 auto">
      <img src="/assets/img/face.jpg" alt="${T('خريطة الوجه', 'Face map')} — ${p.name}" style="height:480px">
      ${p.dots.map(([x, y], i) => `
      <span class="face-dot face-dot--${p.swatch}" style="inset-inline-start:${x};top:${y}">
        <i></i><b>${p.zones[i][0]}</b>
      </span>`).join('')}
    </div>
    <div style="display:flex;flex-direction:column;gap:12px">
      ${p.zones.map(([t, d]) => `
      <div style="display:flex;align-items:center;gap:16px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px 22px">
        <span class="swatch swatch--${p.swatch}" style="width:12px;height:12px"></span>
        <div style="flex:1">
          <b style="display:block;font-family:var(--ff-d);font-size:15px;font-weight:800">${t}</b>
          <span style="font-size:12.5px;color:var(--muted)">${d}</span>
        </div>
        ${I.arrow(14)}
      </div>`).join('')}
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="dark-strip" style="display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;padding:30px 38px">
    ${[
      T('العبوة: سيرنج واحد 1.0 مل', 'Presentation: one 1.0 mL syringe'),
      T('تركيز 20 mg/mL — جل أحادي الطور', '20 mg/mL — monophasic gel'),
      T('مادة ربط DVS', 'DVS cross-linking'),
      T('صلاحية حتى 36 شهرًا', 'Shelf life up to 36 months'),
      T('سجل سريري منذ 2009', 'Clinical record since 2009'),
    ].map((t) => `<span style="display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600"><i style="width:6px;height:6px;border-radius:50%;background:#7FE3BE"></i>${t}</span>`).join('')}
  </div>
  <p class="foot-note">${T('المنتج يُصرف ويُحقن عن طريق الطبيب فقط، ولا يُباع للأفراد. الملاحظة موحّدة أسفل كل صفحة منتج.', 'The product is dispensed and injected by a physician only, and is never sold to individuals. This note is repeated beneath every product page.')}</p>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('الخاتمة', 'Before you go'), T('اقرئي أكثر — ثم تحدّثي مع من يجيب', 'Read more — then talk to someone who can answer'))}
  <div class="grid" style="grid-template-columns:1fr 1fr 1.1fr">
    ${p.posts.map((t) => `
    <div class="card">
      ${chip(T('مقال ذو صلة', 'Related article'))}
      <h4 style="margin:12px 0 0;font-size:15.5px;line-height:1.8">${t}</h4>
      <a class="go" href="${u('knowledge')}" style="display:flex;align-items:center;gap:8px;margin-top:14px;font-size:12.5px;font-weight:700;color:var(--green-600)">${T('من مركز المعرفة', 'From the Knowledge Center')} ${I.arrow(13)}</a>
    </div>`).join('')}
    <div class="card card--mint" style="display:flex;flex-direction:column;gap:12px;justify-content:center;border:0">
      <b style="font-family:var(--ff-d);font-size:16px;font-weight:800">${T('دعوة مزدوجة', 'Two ways to start')}</b>
      <p>${T('للمنشآت: عرض سعر رسمي خلال يوم عمل. للجمهور: المنتج يصلك عبر طبيبك — اسألي عيادتك عنه.', 'Facilities: an official quote within a business day. Public: the product reaches you through your physician — ask your clinic about it.')}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap">${btn(T('طلب عرض سعر', 'Request a quote'), u('medical/quote'), 'dark')}${btn(T('واتساب', 'WhatsApp'), WA, 'green', I.wa(15))}</div>
    </div>
  </div>
</div></section>
`);
  }

  /* ============================================================
     HA FILLER — brands/ha-filler
  ============================================================ */
  add('brands/ha-filler',
    T('HA Filler — جهاز طبي', 'HA Filler — Medical Device'),
    T('HA Filler: هيالورونيك أسيد يُستخدم في جراحات العيون — جهاز طبي مسجّل لدى الهيئة العامة للغذاء والدواء.', 'HA Filler: hyaluronic acid used in ophthalmic surgery — an SFDA-registered medical device.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">HA Filler</span>']],
    `<span class="lat" dir="ltr">HA Filler</span> — ${T('جهاز طبي', 'Medical Device')}`,
    T('هيالورونيك أسيد يُستخدم في جراحات العيون. صفحة مستقلة بلغة طبية بحتة، خارج مسار التجميل — موجّهة للممارسين والمنشآت الصحية.',
      'Hyaluronic acid used in ophthalmic surgery. A standalone page in strictly medical language, outside the aesthetics track — addressed to practitioners and healthcare facilities.'),
    `<div class="page-hero__chips">${chip(T('مسجّل لدى <span class="lat" dir="ltr">SFDA</span>', '<span class="lat" dir="ltr">SFDA</span>-registered'), 'green')}${chip(T('جهاز طبي', 'Medical device'))}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('الاستخدام', 'Intended use')}</h3>
      <p style="font-size:13px;line-height:2">${T('جهاز طبي من الهيالورونيك أسيد يُستخدم في جراحات العيون من قِبل ممارسين مرخّصين داخل المنشآت الصحية المعتمدة.', 'A hyaluronic-acid medical device used in ophthalmic surgery by licensed practitioners within accredited healthcare facilities.')} ${T('تُعرض التسمية التجارية ودواعي الاستخدام كما وردت في شهادة تسجيل الهيئة والملف التقني.', 'The trade name and indications are shown exactly as stated on the SFDA registration certificate and technical file.')}</p>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('المستندات المتاحة عند الطلب', 'Documents available on request')}</h3>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('شهادة تسجيل المنتج لدى الهيئة العامة للغذاء والدواء', 'SFDA product registration certificate')}</li>
        <li>${I.check(13)}${T('الملف التقني وتعليمات الاستخدام (IFU) من المصنّع', 'Technical file and instructions for use (IFU) from the manufacturer')}</li>
        <li>${I.check(13)}${T('بيانات التشغيلة مع كل شحنة، وفاتورة ضريبية نظامية', 'Lot data with every shipment, plus a compliant tax invoice')}</li>
      </ul>
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('للمنشآت الصحية', 'For healthcare facilities'),
    T('لطلب عرض سعر أو الاطلاع على مستندات التسجيل والملف التقني — تواصلوا معنا مباشرة أو عبر نموذج طلب عرض السعر. المنتج يُورَّد للمنشآت الصحية المرخّصة فقط.',
      'To request a quote or review the registration documents and technical file, contact us directly or use the quote request form. The product is supplied to licensed healthcare facilities only.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('طلب عرض سعر', 'Request a quote'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  return pages;
}
