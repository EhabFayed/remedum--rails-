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
    T('حلول التجميل الطبي والمنتجات المعتمدة', 'Regulated Aesthetic & Medical Solutions'),
    T('محفظة موثوقة من منتجات التجميل الطبي، الأجهزة الطبية المتخصصة، ومستحضرات العناية المتقدمة بالبشرة — كلها مسجّلة لدى الهيئة.', 'An authorized portfolio of clinically proven medical aesthetic lines, specialized healthcare devices, and advanced skincare — all SFDA-registered.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products')]],
    T('حلول التجميل الطبي والمنتجات المعتمدة', 'Regulated Aesthetic & Medical Solutions'),
    T('محفظة موثوقة من منتجات التجميل الطبي، الأجهزة الطبية المتخصصة، ومستحضرات العناية المتقدمة بالبشرة.',
      'An authorized portfolio of clinically proven medical aesthetic lines, specialized healthcare devices, and advanced skincare.'),
    `<div class="page-hero__chips">${chip(T('محفظتنا الطبية', 'Our Portfolio'))}</div>`)}

<section class="section"><div class="container">
  <div class="dark-panel" style="padding:44px 46px;display:grid;grid-template-columns:1.25fr .75fr;gap:40px;align-items:center;box-shadow:var(--shadow-card)">
    <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
      ${chip(T('الوكيل الحصري والموزّع المعتمد في المملكة', 'Exclusive Agent & Authorized Distributor in Saudi Arabia'), 'green')}
      <h2 class="lat" dir="ltr" style="font-size:44px;font-weight:800;letter-spacing:-.02em">ReMedium&reg;</h2>
      <p style="font-size:14px;line-height:2;color:rgba(255,255,255,.78)">${T(
      'فيلر ReMedium® للهيالورونيك أسيد — فيلر كوري عالي النقاء من إنتاج شركة <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> في سيول، مصنَّع بتقنية <span class="lat" dir="ltr">MDM</span> المبتكرة ومطابق لمعايير التصنيع الجيد GMP. التشكيلة: ReMedium Fine، وReMedium Mid، وReMedium Sub-Q.',
      'ReMedium® HA Dermal Fillers — high-purity hyaluronic acid fillers manufactured in Seoul by <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> under strict GMP standards and patented <span class="lat" dir="ltr">MDM</span> technology. Product range: ReMedium Fine, ReMedium Mid, ReMedium Sub-Q.')}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px">${ACCRED(T).map(([b]) => chip(`<span class="lat" dir="ltr">${b}</span>`, 'dark')).join('')}</div>
      <div style="margin-top:6px">${btn(T('استكشف تشكيلة ReMedium', 'Explore ReMedium Range'), u('brands/remedium'), 'white')}</div>
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
          <b style="font-family:var(--ff-d);font-size:19px;font-weight:800">${T('هيالورونيك أسيد لجراحات العيون', 'Ophthalmic Hyaluronic Acid Solutions')}</b>
          ${chip(T('توزيع مرخّص للأجهزة الطبية', 'Licensed Medical Device Distribution'))}
          ${chip(T('مسجّل لدى <span class="lat" dir="ltr">SFDA</span>', '<span class="lat" dir="ltr">SFDA</span>-registered'), 'green')}
        </div>
        <p style="font-size:13px">${T('محاليل هيالورونيك أسيد بمواصفات طبية دقيقة ومخصصة للعمليات والتدخلات الجراحية للعيون — صفحة مستقلة بلغة طبية بحتة، خارج مسار التجميل.', 'Medical-grade ophthalmic hyaluronic acid formulations engineered specifically for clinical eye surgeries and specialized ophthalmic procedures — a standalone page in strictly medical language, outside the aesthetics track.')}</p>
      </div>
      <a href="${u('brands/ha-filler')}" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--green-600);white-space:nowrap">${T('المواصفات الطبية للمنتج', 'Clinical Specifications')} ${I.arrow(13)}</a>
    </div>
  </div>
</div></section>

<section class="section--mint" id="skincare-external"><div class="container">
  ${secHead(T('العناية المخصصة بالبشرة', 'Dermatological Care'), T('مستحضرات العناية الكورية المتقدمة', 'Korean Skincare Innovations'),
    T('توفر «جذور الجمال» تشكيلات مختارة من أبرز علامات العناية الكورية المعروفة بنقاء مكوناتها وفاعليتها في تهدئة البشرة وترميمها. نستورد هذه المنتجات مباشرة من المعامل الكورية المعتمدة لتكون مكملًا مثاليًا بعد الإجراءات الطبية ولروتين العناية اليومي.',
      'Beauty Roots distributes curated Korean skincare lines recognized for their gentle formulations, clinically tested botanicals, and high efficacy. Sourced directly from certified Korean laboratories, these formulations complement professional clinical treatments and daily skin restoration routines.'))}
  <div class="grid" style="grid-template-columns:.85fr repeat(4,minmax(0,1fr))">
    <div class="arch-media arch-media--card" style="min-height:180px"><img src="/assets/img/skincare.jpg" alt="${T('تشكيلة عناية بالبشرة', 'Skincare range')}"></div>
    ${[
      ['SKIN1004', T('تركيبات السنتيلا الآسيوية (Centella Asiatica) لتهدئة البشرة الحساسة وترميم الحاجز الجلدي.', 'Centella Asiatica soothing formulations for sensitive and compromised skin barriers.')],
      ['Purito', T('حلول عناية آمنة بمكونات نقية وواضحة تركز على صحة وتوازن طبقات الجلد.', 'Minimalist, safe, and transparent derm-care essentials powered by clean active ingredients.')],
      ['Orjena', T('مستخلصات نباتية فعالة لترطيب عميق، وتعزيز النضارة، وحيوية البشرة اليومية.', 'Functional botanical extracts delivering deep hydration, radiance, and daily skin vitality.')],
      ['Herb Earth', T('توليفات عشبية طبيعية تمنح البشرة تغذية لطيفة وتوازنًا مستدامًا.', 'Natural herbal complexes formulated for gentle nourishment and restorative skin wellness.')],
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
    ${btn(T('تصفح التشكيلة الكاملة', 'View Complete Collection'), 'https://reemncream.com/ar/collections/all', 'green', I.ext(14), ' target="_blank" rel="noopener"')}
    <p style="font-size:12px;color:var(--muted);max-width:560px">${T('للاطلاع على كافة المنتجات والتشكيلات المتوفرة من علامات العناية المعتمدة — الرابط يفتح في تبويب جديد.', 'Explore the complete range of authorized formulations and product lines — the link opens in a new tab.')}</p>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('إشعار ضمان الجودة', 'Quality assurance'),
    T('كافة العلامات المندرجة في محفظتنا مسجّلة نظاميًا لدى الهيئة العامة للغذاء والدواء (SFDA) وتُدار عبر سلسلة إمداد وتخزين مبرّدة ومراقبة بدقة.',
      'Every product line represented by Beauty Roots is fully registered with the Saudi Food and Drug Authority (SFDA) and managed through our temperature-monitored supply chain.'))}
</div></section>
`);

  /* ============================================================
     REMEDIUM BRAND — brands/remedium
  ============================================================ */
  add('brands/remedium',
    T('فيلر ReMedium® للهيالورونيك أسيد', 'ReMedium® Dermal Fillers'),
    T('الجيل المتقدم من الفيلر الكوري المصنّع بتقنية MDM الحاصلة على براءة اختراع — جذور الجمال الوكيل الحصري والموزّع المعتمد في المملكة.', 'Next-generation Korean hyaluronic acid fillers engineered with patented MDM technology — Beauty Roots is the exclusive agent and authorized distributor in Saudi Arabia.'),
    'brands', `
<section class="page-hero"><div class="container"><div class="page-hero__inner hero-split">
  <div>
    ${crumbs(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">ReMedium</span>']])}
    <h1 class="page-title">${T('فيلر <span class="lat" dir="ltr" style="letter-spacing:-.02em">ReMedium&reg;</span> للهيالورونيك أسيد', '<span class="lat" dir="ltr" style="letter-spacing:-.02em">ReMedium&reg;</span> Dermal Fillers')}</h1>
    <p class="page-hero__lead">${T(
      'الجيل المتقدم من الفيلر الكوري المصنّع بتقنية MDM الحاصلة على براءة اختراع، لنتائج طبيعية ومستدامة.',
      'Next-generation Korean hyaluronic acid fillers engineered with patented MDM technology for natural, durable clinical results.')}</p>
    <div class="page-hero__chips">${chip(T('الوكالة الحصرية', 'Exclusive Representation'), 'green')}${chip(T('مسجّل وممتثل بالكامل لاشتراطات الهيئة (SFDA)', 'Registered & fully SFDA-compliant'))}${chip(T('مرافق معتمدة وفق GMP', 'Certified GMP facility'))}</div>
  </div>
  <div class="arch-media">
    <img src="/assets/img/inject.jpg" alt="${T('علاج فيلر هيالورونيك أسيد', 'Hyaluronic-acid filler treatment')}" style="height:380px">
    <span class="media-shade"></span>
    <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصور المصنّع المعتمدة', 'Placeholder — to be replaced by approved manufacturer imagery')}</span>
  </div>
</div></div></section>

<section class="section"><div class="container">
  ${secHead(T('بيانات المنشأ والاعتماد', 'Brand authority & origins'), T('من أين يأتي المنتج؟', 'Where does the product come from?'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [I.box(20), T('الشركة المصنّعة', 'Manufacturer'), T('<span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> (سيول، كوريا الجنوبية) — مصنَّع في منشآت معتمدة وفق أعلى اشتراطات التصنيع الجيد (GMP).', '<span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> (Seoul, South Korea) — manufactured in a certified Good Manufacturing Practice (GMP) facility.')],
      [I.pin(20), T('صفة التوزيع', 'Distributor status'), T('شركة «جذور الجمال» هي الوكيل الحصري والموزّع المعتمد في المملكة العربية السعودية.', 'Beauty Roots is the exclusive agent and authorized distributor across the Kingdom of Saudi Arabia.')],
      [I.shield(20), T('الامتثال الرقابي', 'Regulatory approval'), T('مسجّل وممتثل بالكامل لاشتراطات ومعايير الهيئة العامة للغذاء والدواء (<span class="lat" dir="ltr">SFDA</span>).', 'Registered and fully compliant with Saudi Food and Drug Authority (<span class="lat" dir="ltr">SFDA</span>) requirements.')],
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
  ${secHead(T('تشكيلة منتجات ReMedium', 'The ReMedium product range'), T('ثلاث كثافات — من الخطوط الدقيقة إلى البناء الحجمي العميق', 'Three densities — from delicate superficial lines to deep structural contouring'),
    T('ReMedium Fine للخطوط السطحية الدقيقة وحول العين وتحسين نضارة البشرة · ReMedium Mid للطبقات المتوسطة وتعبئة الشفاه والخطوط التعبيرية المعتدلة · ReMedium Sub-Q لبناء الحجم العميق وتحديد الفك ونحت الخدود. اضغط على أي بطاقة لتفاصيل المواصفات السريرية.',
      'ReMedium Fine for delicate superficial wrinkles, periorbital lines and skin revitalization · ReMedium Mid for mid-dermal placement, lip enhancement and moderate facial folds · ReMedium Sub-Q for deep subcutaneous contouring, malar augmentation and jawline definition. Select a product to view its clinical details.'))}
  <div class="grid grid-3" style="gap:18px">
    ${Object.values(P).map((p) => productCard(ctx, p)).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المزايا التقنية المبتكرة', 'Key clinical technology'), T('تقنية MDM — ما الذي يميّز الجل؟', 'MDM Tech — what sets the gel apart'))}
  <div class="grid grid-3">
    ${[
      [T('ترابط متعدد المراحل', 'Multi-staged cross-linking'), T('يمنح الجل لزوجة ومرونة متوازنة تضمن سلاسة الحقن ودقة التشكيل داخل الأنسجة.', 'Provides optimal viscoelasticity for smooth extrusion and precise structural placement.')],
      [T('نقاء وتوافق حيوي عالٍ', 'High biocompatibility'), T('هيالورونيك أسيد منقّى بأعلى المعايير للحد من التورم وتفاعلات الأنسجة بعد الإجراء.', 'Ultra-purified hyaluronic acid formulation designed to minimize post-procedure swelling and tissue reactivity.')],
      [T('ثبات متوقع', 'Predictable longevity'), T('تحلل تدريجي متجانس يحافظ على الحجم والنتائج الطبيعية لفترات ممتدة.', 'Engineered degradation curve delivering consistent volume retention and patient satisfaction.')],
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
  <div style="display:flex;flex-direction:column;align-items:center;gap:14px">
    <h3 style="font-family:var(--ff-d);font-size:19px;font-weight:800;text-align:center">${T('ترغب في اعتماد فيلر ReMedium® في مجمعك الطبي؟', 'Introduce ReMedium® to your medical facility')}</h3>
    <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap">
      ${btn(T('طلب الملف الفني وقائمة الأسعار', 'Request Product Dossier & Pricing'), u('medical/quote'), 'dark')}
      ${btn(T('التدريب والدعم الفني', 'Training & technical support'), u('medical/service-model') + '#training', 'ghost')}
    </div>
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
      ${btn(T('طلب الملف الفني وعرض السعر', 'Request Product Specifications & Quote'), u('medical/quote'), 'dark')}
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
          [T('المادة الفعالة', 'Composition'), T('حمض الهيالورونيك المترابط (Cross-linked HA) — بتقنية MDM', 'Cross-linked hyaluronic acid — MDM technology')],
          [T('التركيز', 'HA concentration'), T('20 mg/mL', '20 mg/mL')],
          [T('مستوى الحقن المستهدف', 'Target layer'), p.layer],
          [T('مناطق الاستخدام', 'Injection areas'), p.specAreas],
          [T('قياس الإبرة الموصى به', 'Needle size'), p.needle],
          [T('مدة الثبات التقديرية', 'Duration'), T(`${p.dur} — تختلف حسب طبيعة الحالة والتقنية المتبعة`, `${p.dur} — variable based on patient profile and technique`)],
          [T('العبوة', 'Presentation'), T('سيرنج مملوء مسبقًا 1.0 mL لكل عبوة', '1 × 1.0 mL pre-filled syringe per box')],
          [T('الحفظ والصلاحية', 'Storage & shelf life'), T('أقل من 25° مئوية دون سلسلة تبريد — حتى 36 شهرًا من تاريخ الإنتاج', 'Below 25°C, no cold chain — up to 36 months from date of manufacture')],
        ].map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`).join('')}
      </div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="card">
          <h4 class="card__title">${T('أبرز المزايا السريرية', 'Key clinical advantages')}</h4>
          <ul class="check-list" style="margin-top:8px">
            ${p.adv.map(([t, d]) => `<li>${I.check(13)}<span><b style="color:var(--ink)">${t}:</b> ${d}</span></li>`).join('')}
          </ul>
        </div>
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
  <p class="foot-note">${T('مدة ثبات النتيجة تقريبية وتتفاوت بحسب طبيعة المنطقة المحقونة، والكمية المستخدمة، وطبيعة استجابة الجسم من شخص لآخر. اختيار نوع المنتج وعمق الحقن يخضع لقرار الطبيب المعالج حصرًا — والمنتج يُصرف ويُحقن عن طريق الطبيب فقط، ولا يُباع للأفراد.', 'Duration is indicative and varies depending on the treated area, injected volume, and individual biological response. Product selection and injection depth are determined strictly by the treating physician — the product is dispensed and injected by a physician only, and is never sold to individuals.')}</p>
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
    T('هيالورونيك أسيد لجراحات وعمليات العيون', 'Ophthalmic Viscoelastic Hyaluronic Acid'),
    T('محاليل هيالورونيك أسيد لزجة بمواصفات طبية دقيقة — جهاز طبي جراحي للعيون (OVD) مسجّل لدى الهيئة العامة للغذاء والدواء.', 'Medical-grade viscoelastic hyaluronic acid solutions — an SFDA-registered ophthalmic viscosurgical device (OVD).'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], [T('هيالورونيك أسيد لجراحات العيون', 'Ophthalmic HA')]],
    T('هيالورونيك أسيد لجراحات وعمليات العيون', 'Ophthalmic Viscoelastic Hyaluronic Acid'),
    T('محاليل هيالورونيك أسيد لزجة بمواصفات طبية دقيقة، مصممة كجهاز طبي لحماية أنسجة العين وتسهيل الجراحات المتقدمة بالعيون.',
      'Medical-grade hyaluronic acid solutions formulated as an essential viscoelastic device for intraocular surgeries and clinical ophthalmic procedures.'),
    `<div class="page-hero__chips">${chip(T('الأجهزة والحلول الجراحية الطبية', 'Medical Devices & Surgical Solutions'))}${chip(T('مسجّل لدى <span class="lat" dir="ltr">SFDA</span>', '<span class="lat" dir="ltr">SFDA</span>-registered'), 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة سريرية عن المنتج', 'Clinical overview')}</h3>
      <p style="font-size:13px;line-height:2">${T('مادة لزجة مرنة (OVD) مخصصة للعمليات الجراحية داخل العين، تعمل على حماية الخلايا البطانية للقرنية، والحفاظ على استقرار وعمق الغرفة الأمامية للعين أثناء الجراحة، مما يمنح الجراحين رؤية واضحة ومجال عمل آمن ودقيق.',
        'Formulated to meet rigorous surgical standards, this ophthalmic viscoelastic device (OVD) provides mechanical protection for corneal endothelial cells, maintains deep anterior chamber stability, and facilitates precise intraocular surgical maneuvers.')}</p>
      <h4 class="card__title" style="font-size:15px;margin-top:18px">${T('دواعي الاستخدام والتدخلات الجراحية', 'Surgical indications')}</h4>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('عمليات إزالة الساد (المياه البيضاء) وزراعة العدسات داخل العين (IOL).', 'Cataract extraction and intraocular lens (IOL) implantation.')}</li>
        <li>${I.check(13)}${T('عمليات زراعة ورأب القرنية (Keratoplasty).', 'Corneal transplantation procedures (keratoplasty).')}</li>
        <li>${I.check(13)}${T('جراحات معالجة المياه الزرقاء (الجلوكوما).', 'Glaucoma filtration surgery.')}</li>
        <li>${I.check(13)}${T('معالجة إصابات الجزء الأمامي من العين والمناورات الجراحية المجهرية.', 'Anterior segment trauma management and intraocular tissue manipulation.')}</li>
      </ul>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('المواصفات الفنية والمزايا السريرية', 'Key clinical specifications & performance')}</h3>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('تصنيف المنتج: جهاز طبي جراحي للعيون (Ophthalmic Viscosurgical Device).', 'Product category: ophthalmic viscosurgical device (OVD) / medical device.')}</li>
        <li>${I.check(13)}${T('المادة: هيالورونات الصوديوم عالية النقاء وذات وزن جزيئي مرتفع.', 'Composition: high-molecular-weight, ultra-purified sodium hyaluronate.')}</li>
        <li>${I.check(13)}${T('حماية بطانة القرنية: لزوجة متماسكة تحمي الأنسجة الحساسة من أثر الأدوات الجراحية وسوائل الغسيل.', 'Endothelial cell protection: superior cohesive viscosity shielding delicate ocular tissues from mechanical surgical stress.')}</li>
        <li>${I.check(13)}${T('تثبيت حيز الغرفة الأمامية: ثبات هيكلي ممتاز يمنع انكماش الحجرة الأمامية أثناء التدخل الجراحي.', 'Space maintenance: excellent anterior chamber depth retention during high-flow irrigation and aspiration.')}</li>
        <li>${I.check(13)}${T('شفافية بصرية تامة: تركيبة فائقة النقاء تضمن للجراح مجال رؤية مجهري واضح تمامًا دون أي عتامة.', 'Optical clarity: fully transparent formulation ensuring an unobstructed surgical field of view.')}</li>
        <li>${I.check(13)}${T('سهولة الشفط والإزالة: إخلاء سريع وكامل في نهاية العملية لمنع أي ارتفاع مؤقت في ضغط العين بعد الجراحة.', 'Clean washout: easy, complete removal at the conclusion of surgery to minimize post-operative IOP spikes.')}</li>
      </ul>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  ${noteStrip(T('الوضع النظامي وسلسلة التوريد: يُورَّد بترخيص رسمي لتوزيع الأجهزة والمستلزمات الطبية من الهيئة العامة للغذاء والدواء (IDL-2024-MD-0095)، عبر سلسلة إمداد مبرّدة ومراقبة بدقة تضمن وصول الشحنات للمستشفيات ومراكز جراحة العيون بكامل وثائق التتبع.',
    'Regulatory & distribution status: distributed under Beauty Roots’ SFDA-licensed medical device framework (IDL-2024-MD-0095), with verified cold-chain, temperature-monitored traceability directly to hospital surgical units and specialized eye centers.'))}
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمستشفيات والمراكز', 'Institutional supply'),
    T('لطلب الملف الطبي أو ترتيبات التوريد للمستشفيات ومراكز جراحة العيون — تواصلوا معنا مباشرة أو عبر نموذج طلب عرض السعر. المنتج يُورَّد للمنشآت الصحية المرخّصة فقط.',
      'For the clinical dossier or hospital supply arrangements for surgical units and specialized eye centers — contact us directly or use the quote request form. The product is supplied to licensed healthcare facilities only.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('طلب الملف الطبي وعروض التوريد', 'Request Hospital Supply & Clinical Dossier'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  return pages;
}
