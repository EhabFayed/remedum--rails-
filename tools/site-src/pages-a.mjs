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
  ${secHead(T('محفظتنا الطبية', 'Our medical portfolio'), T('منتجات وعلامات تخدم احتياجات المجال الطبي', 'Products and brands serving the needs of the medical field'),
    T('محفظة مختارة تجمع بين تخصصات ومنتجات متنوعة للمنشآت الطبية في المملكة.', 'A curated portfolio combining diverse specialties and products for medical facilities across the Kingdom.'))}
  <div class="dark-panel" style="padding:44px 46px;display:grid;grid-template-columns:1.25fr .75fr;gap:40px;align-items:center;box-shadow:var(--shadow-card)">
    <div style="display:flex;flex-direction:column;gap:16px;align-items:flex-start">
      ${chip(T('الوكيل الحصري والموزّع المعتمد في المملكة', 'Exclusive Agent & Authorized Distributor in Saudi Arabia'), 'green')}
      <h2 class="lat" dir="ltr" style="font-size:44px;font-weight:800;letter-spacing:-.02em">ReMedium&reg;</h2>
      <p style="font-size:14px;line-height:2;color:rgba(255,255,255,.78)">${T(
      'فيلر ReMedium® للهيالورونيك أسيد — فيلر كوري عالي النقاء من إنتاج شركة <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> في سيول، مصنَّع بتقنية <span class="lat" dir="ltr">MDM</span> المبتكرة ومطابق لمعايير التصنيع الجيد GMP. التشكيلة: ReMedium Sub-Q، وReMedium Mid، وReMedium Fine.',
      'ReMedium® HA Dermal Fillers — high-purity hyaluronic acid fillers manufactured in Seoul by <span class="lat" dir="ltr">Forever 18 INTERNATIONAL</span> under strict GMP standards and patented <span class="lat" dir="ltr">MDM</span> technology. Product range: ReMedium Sub-Q, ReMedium Mid, ReMedium Fine.')}</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px">${ACCRED(T).map(([b]) => chip(`<span class="lat" dir="ltr">${b}</span>`, 'dark')).join('')}</div>
      <div style="margin-top:6px">${btn(T('استكشف تشكيلة ReMedium', 'Explore ReMedium Range'), u('brands/remedium'), 'white')}</div>
    </div>
    <div style="position:relative;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.13)">
      <img src="/assets/img/brand-remedium.jpg" alt="${T('تشكيلة ReMedium', 'The ReMedium range')}" style="width:100%;height:330px;object-fit:cover">
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-3" style="gap:18px">
    ${Object.values(P).map((p) => productCard(ctx, p)).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px">
    ${[
      ['01', I.star(22), 'HA Filler', T('فيلر حمض الهيالورونيك', 'Hyaluronic Acid Dermal Fillers'),
        T('مجموعة من فيلر حمض الهيالورونيك المتشابك، تضم خيارات متعددة لتلبية احتياجات مختلفة في التجميل الطبي، من الخطوط الدقيقة إلى استعادة الحجم وتحديد ملامح الوجه.',
          'A range of cross-linked hyaluronic acid fillers offering multiple options for different needs in medical aesthetics — from fine lines to volume restoration and facial contouring.'),
        T('استكشف منتجات HA Filler', 'Explore HA Filler products'), u('brands/ha-filler')],
      ['02', I.shield(22), 'Hairont', T('جل طبي مضاد للالتصاقات', 'Anti-Adhesion Medical Gel'),
        T('جل طبي من هيالورونات الصوديوم، مخصص للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية.',
          'A sodium hyaluronate medical gel intended to help prevent or reduce the formation of adhesions after surgical procedures.'),
        T('تعرّف على Hairont', 'Discover Hairont'), u('brands/hairont')],
      ['03', I.leaf(22), 'GynWell', T('جل هيالورونات الصوديوم داخل الرحم', 'Intrauterine Sodium Hyaluronate Gel'),
        T('جل طبي يعتمد على هيالورونات الصوديوم، ومخصص للاستخدام داخل تجويف الرحم للمساعدة في الحد من تكوّن الالتصاقات بعد بعض الإجراءات الطبية والجراحية.',
          'A sodium hyaluronate–based medical gel intended for intrauterine use to help reduce the formation of adhesions after certain medical and surgical procedures.'),
        T('تعرّف على GynWell', 'Discover GynWell'), u('brands/gynwell')],
      ['04', I.eye(22), 'OVDs', T('مستحضرات لزجة لجراحات العيون', 'Ophthalmic Viscosurgical Devices'),
        T('مستحضرات طبية تعتمد على هيالورونات الصوديوم، ومخصصة للاستخدام أثناء جراحات العيون للمساعدة في الحفاظ على الحجرة الأمامية ودعم حماية الأنسجة داخل العين.',
          'Sodium hyaluronate–based medical preparations intended for use during eye surgeries to help maintain the anterior chamber and support the protection of intraocular tissues.'),
        T('استكشف منتجات OVDs', 'Explore OVDs products'), u('brands/ovds')],
    ].map(([n, ic, name, sub, d, cta, href]) => `
    <div class="card" style="display:flex;flex-direction:column;gap:12px">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span class="icon-tile" style="width:52px;height:52px;border-radius:15px">${ic}</span>
        <span class="lat" dir="ltr" style="font-family:var(--ff-d);font-size:13px;font-weight:800;color:var(--green-600);opacity:.55">${n}</span>
      </div>
      <div>
        <b class="lat" dir="ltr" style="display:block;font-family:var(--ff-d);font-size:19px;font-weight:800">${name}</b>
        <span style="font-size:12.5px;font-weight:700;color:var(--green-600)">${sub}</span>
      </div>
      <p style="font-size:13px;line-height:2;flex:1">${d}</p>
      <a href="${href}" style="display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--green-600)">${cta} ${I.arrow(13)}</a>
    </div>`).join('')}
  </div>
</div></section>

<section class="section--mint" id="skincare-external"><div class="container">
  ${secHead(T('العناية المخصصة بالبشرة', 'Dermatological Care'), T('مستحضرات العناية الكورية المتقدمة', 'Korean Skincare Innovations'),
    T('توفر «جذور الجمال» تشكيلات مختارة من أبرز علامات العناية الكورية المعروفة بنقاء مكوناتها وفاعليتها في تهدئة البشرة وترميمها. نستورد هذه المنتجات مباشرة من المعامل الكورية المعتمدة لتكون مكملًا مثاليًا بعد الإجراءات الطبية ولروتين العناية اليومي.',
      'Beauty Roots distributes curated Korean skincare lines recognized for their gentle formulations, clinically tested botanicals, and high efficacy. Sourced directly from certified Korean laboratories, these formulations complement professional clinical treatments and daily skin restoration routines.'))}
  <div class="grid" style="grid-template-columns:.85fr repeat(4,minmax(0,1fr))">
    <div class="arch-media arch-media--card" style="min-height:180px"><img src="/assets/img/brand-skincare.jpg" alt="${T('تشكيلة عناية بالبشرة', 'Skincare range')}"></div>
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
  ${darkStrip(T('الجودة والتتبع', 'Quality & traceability'),
    T('تُدار المنتجات ضمن منظومة واضحة للتخزين والتوزيع والتتبع، مع الالتزام بالمتطلبات المعتمدة لدى الهيئة العامة للغذاء والدواء (SFDA).',
      'Products are managed within a clear system for storage, distribution and traceability, in line with the requirements approved by the Saudi Food and Drug Authority (SFDA).'))}
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
    <img src="/assets/img/brand-remedium.jpg" alt="${T('تشكيلة فيلر ReMedium', 'The ReMedium filler range')}" style="height:380px">
    <span class="media-shade"></span>
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
  ${secHead(T('تشكيلة منتجات ReMedium', 'The ReMedium product range'), T('ثلاث كثافات — من البناء الحجمي العميق إلى الخطوط الدقيقة', 'Three densities — from deep structural contouring to delicate superficial lines'),
    T('ReMedium Sub-Q لبناء الحجم العميق وتحديد الفك ونحت الخدود · ReMedium Mid للطبقات المتوسطة وتعبئة الشفاه والخطوط التعبيرية المعتدلة · ReMedium Fine للخطوط السطحية الدقيقة وحول العين وتحسين نضارة البشرة. اضغط على أي بطاقة لتفاصيل المواصفات السريرية.',
      'ReMedium Sub-Q for deep subcutaneous contouring, malar augmentation and jawline definition · ReMedium Mid for mid-dermal placement, lip enhancement and moderate facial folds · ReMedium Fine for delicate superficial wrinkles, periorbital lines and skin revitalization. Select a product to view its clinical details.'))}
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
    <img src="/assets/img/brand-${p.slug === 'sub-q' ? 'subq' : p.slug}.jpg" alt="${p.name}" style="height:420px">
    <span class="media-shade"></span>
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
          <p>${T('الملف التقني الكامل وبروتوكولات الاستخدام والمواد السريرية — في صفحة الأدلة المخبرية وبروتوكولات الحقن ضمن قسم المعلومات الطبية.', 'The full technical file, usage protocols and clinical material are available on the Laboratory Evidence & Protocols page in the Medical Information section.')}</p>
          <div style="margin-top:14px">${btn(T('الأدلة المخبرية وبروتوكولات الحقن', 'Laboratory Evidence & Protocols'), u('medical/evidence'), 'dark', I.lock(13))}</div>
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
     HA FILLER (category) — brands/ha-filler
  ============================================================ */
  add('brands/ha-filler',
    T('HA Filler | فيلر حمض الهيالورونيك', 'HA Filler | Hyaluronic Acid Dermal Fillers'),
    T('مجموعة من فيلر حمض الهيالورونيك المتشابك، تضم خيارات متعددة لتلبية احتياجات مختلفة في التجميل الطبي، من الخطوط الدقيقة إلى استعادة الحجم وتحديد ملامح الوجه.',
      'A range of cross-linked hyaluronic acid fillers offering multiple options for different needs in medical aesthetics — from fine lines to volume restoration and facial contouring.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">HA Filler</span>']],
    T('<span class="lat" dir="ltr">HA Filler</span> | فيلر حمض الهيالورونيك', '<span class="lat" dir="ltr">HA Filler</span> | Hyaluronic Acid Dermal Fillers'),
    T('مجموعة من فيلر حمض الهيالورونيك المتشابك، تضم خيارات متعددة لتلبية احتياجات مختلفة في التجميل الطبي، من الخطوط الدقيقة إلى استعادة الحجم وتحديد ملامح الوجه.',
      'A range of cross-linked hyaluronic acid fillers offering multiple options for different needs in medical aesthetics — from fine lines to volume restoration and facial contouring.'),
    `<div class="page-hero__chips">${chip(T('التجميل الطبي', 'Medical Aesthetics'))}${chip('<span class="lat" dir="ltr">Hyaluronic Acid Dermal Fillers</span>', 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن HA Filler', 'About HA Filler')}</h3>
      <p style="font-size:13px;line-height:2">${T('HA Filler هو مجموعة من فيلر حمض الهيالورونيك المخصص للاستخدام في التجميل الطبي، بخيارات متنوعة تتيح للطبيب اختيار المنتج وفق المنطقة المستهدفة والنتيجة المطلوبة.',
        'HA Filler is a range of hyaluronic acid fillers intended for use in medical aesthetics, with diverse options that allow the physician to select the product according to the target area and the desired outcome.')}</p>
      <p style="font-size:13px;line-height:2;margin-top:10px">${T('تغطي المجموعة احتياجات متعددة، بدءًا من التعامل مع الخطوط الدقيقة، وصولًا إلى استعادة الحجم ودعم تحديد ملامح الوجه.',
        'The range covers multiple needs — from addressing fine lines through to restoring volume and supporting facial contour definition.')}</p>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('الاستخدامات', 'Uses')}</h3>
      <p style="font-size:13px;line-height:2">${T('تختلف الاستخدامات وفق نوع المنتج المختار، وتشمل:', 'Uses vary according to the selected product, and include:')}</p>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('تحسين مظهر الخطوط والتجاعيد.', 'Improving the appearance of lines and wrinkles.')}</li>
        <li>${I.check(13)}${T('استعادة الحجم في مناطق الوجه.', 'Restoring volume in facial areas.')}</li>
        <li>${I.check(13)}${T('تحديد وإبراز بعض ملامح الوجه.', 'Defining and accentuating certain facial features.')}</li>
        <li>${I.check(13)}${T('تحسين التناسق العام للملامح.', 'Improving the overall harmony of the features.')}</li>
        <li>${I.check(13)}${T('تطبيقات تجميلية مختلفة وفق تقييم الطبيب.', 'Various aesthetic applications according to the physician’s assessment.')}</li>
      </ul>
    </div>
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('المجموعة', 'The range'), T('مجموعة HA Filler', 'The HA Filler range'),
    T('تضم المجموعة خيارات مختلفة من فيلر حمض الهيالورونيك، تختلف في خصائصها واستخداماتها لتناسب مناطق واحتياجات متعددة في التجميل الطبي.',
      'The range includes different hyaluronic acid filler options, varying in their properties and uses to suit multiple areas and needs in medical aesthetics.'))}
  <div class="card" style="display:flex;align-items:center;justify-content:center;min-height:140px;text-align:center">
    ${ph(T('تُعرض هنا أنواع HA Filler المتوفرة — مع صورة كل منتج ونبذة مختصرة عن استخدامه — وتُنشر القائمة فور تأكيد بياناتها المعتمدة.',
      'The available HA Filler variants will be listed here — with each product’s image and a short note on its use — once their confirmed data is received.'))}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('أبرز المعلومات الفنية', 'Key technical information'))}
  <div class="grid grid-4" style="gap:18px">
    ${[
      [T('المادة الأساسية', 'Core material'), T('حمض الهيالورونيك (Hyaluronic Acid).', 'Hyaluronic Acid.')],
      [T('نوع المنتج', 'Product type'), T('فيلر مخصص للاستخدام في التجميل الطبي.', 'A filler intended for use in medical aesthetics.')],
      [T('اختيار المنتج', 'Product selection'), T('تتوفر خيارات متعددة بما يسمح باختيار المنتج وفق المنطقة المستهدفة واحتياجات الحالة.', 'Multiple options are available, allowing the product to be chosen according to the target area and the needs of the case.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام من قِبل الممارسين الصحيين المؤهلين وفق تعليمات استخدام كل منتج.', 'Intended for use by qualified healthcare practitioners according to each product’s instructions for use.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="font-size:12.5px;line-height:2">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمنشآت الطبية', 'Supply for medical facilities'),
    T('توفر جذور الجمال مجموعة HA Filler للمنشآت الطبية، مع خدمات التوريد والتخزين والتوزيع والمتابعة. للتعرف على المنتجات المتاحة أو طلب المعلومات الفنية والتجارية، تواصلوا مع فريق جذور الجمال.',
      'Beauty Roots supplies the HA Filler range to medical facilities, with supply, storage, distribution and follow-up services. To learn about the available products or request technical and commercial information, contact the Beauty Roots team.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('اطلب معلومات المنتجات', 'Request product information'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  /* ============================================================
     HAIRONT — brands/hairont
  ============================================================ */
  add('brands/hairont',
    T('Hairont | جل طبي مضاد للالتصاقات', 'Hairont | Anti-Adhesion Medical Gel'),
    T('جل طبي من هيالورونات الصوديوم، مخصص للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية.',
      'A sodium hyaluronate medical gel intended to help prevent or reduce the formation of adhesions after surgical procedures.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">Hairont</span>']],
    T('<span class="lat" dir="ltr">Hairont</span> | جل طبي مضاد للالتصاقات', '<span class="lat" dir="ltr">Hairont</span> | Anti-Adhesion Medical Gel'),
    T('جل طبي من هيالورونات الصوديوم، مخصص للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية.',
      'A sodium hyaluronate medical gel intended to help prevent or reduce the formation of adhesions after surgical procedures.'),
    `<div class="page-hero__chips">${chip(T('المنتجات الطبية المتخصصة', 'Specialized Medical Products'))}${chip('<span class="lat" dir="ltr">Anti-Adhesion Gel</span>', 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن Hairont', 'About Hairont')}</h3>
      <p style="font-size:13px;line-height:2">${T('Hairont هو جل طبي يعتمد على هيالورونات الصوديوم، ويُستخدم للمساعدة في الحد من تكوّن الالتصاقات بين الأنسجة بعد بعض التدخلات الجراحية.',
        'Hairont is a sodium hyaluronate–based medical gel used to help reduce the formation of adhesions between tissues after certain surgical interventions.')}</p>
      <p style="font-size:13px;line-height:2;margin-top:10px">${T('صُمم المنتج ليكوّن حاجزًا مؤقتًا بين الأنسجة خلال مرحلة التعافي، للمساعدة في تقليل احتمالية تكوّن الالتصاقات بعد الجراحة.',
        'The product is designed to form a temporary barrier between tissues during the recovery phase, helping reduce the likelihood of adhesion formation after surgery.')}</p>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('الاستخدام', 'Use')}</h3>
      <p style="font-size:13px;line-height:2">${T('يُستخدم Hairont في الإجراءات الجراحية التي قد يصاحبها خطر تكوّن التصاقات بعد العملية، وفق الاستخدامات المحددة في الملف الطبي وتعليمات المنتج.',
        'Hairont is used in surgical procedures that may carry a risk of post-operative adhesion formation, according to the uses specified in the product’s medical file and instructions.')}</p>
      <div style="margin-top:14px">${ph(T('تُدرج هنا التدخلات الجراحية المحددة كما وردت حرفيًا في الملف الطبي للمنتج — فور توفّره.',
        'The specific surgical interventions will be listed here exactly as stated in the product’s medical file — once it is available.'))}</div>
    </div>
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('آلية العمل', 'How it works'), T('كيف يعمل Hairont؟', 'How does Hairont work?'))}
  <div class="grid grid-2" style="gap:18px">
    ${[
      [T('ما يحدث بعد الجراحة', 'What happens after surgery'), T('بعد الإجراء الجراحي، قد تتكوّن التصاقات بين الأنسجة خلال عملية التعافي.', 'After a surgical procedure, adhesions may form between tissues during the recovery process.')],
      [T('دور المنتج', 'The product’s role'), T('يساعد Hairont على تكوين حاجز مؤقت يفصل بين الأسطح النسيجية خلال هذه المرحلة، للمساعدة في الحد من تكوّن الالتصاقات.', 'Hairont helps form a temporary barrier separating the tissue surfaces during this phase, helping reduce the formation of adhesions.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15.5px">${t}</h4><p style="font-size:13px;line-height:2">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('أبرز المعلومات الفنية', 'Key technical information'))}
  <div class="grid grid-4" style="gap:18px">
    ${[
      [T('نوع المنتج', 'Product type'), T('جل طبي مضاد للالتصاقات.', 'An anti-adhesion medical gel.')],
      [T('المادة الأساسية', 'Core material'), T('هيالورونات الصوديوم (Sodium Hyaluronate).', 'Sodium Hyaluronate.')],
      [T('الاستخدام', 'Use'), T('المساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد الإجراءات الجراحية المحددة.', 'Helping prevent or reduce the formation of adhesions after the specified surgical procedures.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام الطبي وفق تعليمات واستخدامات المنتج المعتمدة.', 'Intended for medical use according to the product’s approved instructions and uses.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="font-size:12.5px;line-height:2">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمنشآت الطبية', 'Supply for medical facilities'),
    T('توفر جذور الجمال Hairont للمنشآت الطبية، ضمن منظومة تشمل التوريد والتخزين والتوزيع والمتابعة. للحصول على الملف الطبي للمنتج أو الاستفسار عن التوريد، يمكن التواصل مع فريق جذور الجمال.',
      'Beauty Roots supplies Hairont to medical facilities within a system covering supply, storage, distribution and follow-up. To obtain the product’s medical file or enquire about supply, contact the Beauty Roots team.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  /* ============================================================
     GYNWELL — brands/gynwell
  ============================================================ */
  add('brands/gynwell',
    T('GynWell | جل هيالورونات الصوديوم داخل الرحم', 'GynWell | Intrauterine Sodium Hyaluronate Gel'),
    T('جل طبي يعتمد على هيالورونات الصوديوم، ومخصص للاستخدام داخل تجويف الرحم للمساعدة في الحد من تكوّن الالتصاقات بعد بعض الإجراءات الطبية والجراحية.',
      'A sodium hyaluronate–based medical gel intended for intrauterine use to help reduce the formation of adhesions after certain medical and surgical procedures.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">GynWell</span>']],
    T('<span class="lat" dir="ltr">GynWell</span> | جل هيالورونات الصوديوم داخل الرحم', '<span class="lat" dir="ltr">GynWell</span> | Intrauterine Sodium Hyaluronate Gel'),
    T('جل طبي يعتمد على هيالورونات الصوديوم، ومخصص للاستخدام داخل تجويف الرحم للمساعدة في الحد من تكوّن الالتصاقات بعد بعض الإجراءات الطبية والجراحية.',
      'A sodium hyaluronate–based medical gel intended for intrauterine use to help reduce the formation of adhesions after certain medical and surgical procedures.'),
    `<div class="page-hero__chips">${chip(T('صحة المرأة', 'Women’s Health'))}${chip('<span class="lat" dir="ltr">Intrauterine Gel</span>', 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن GynWell', 'About GynWell')}</h3>
      <p style="font-size:13px;line-height:2">${T('GynWell هو جل طبي من هيالورونات الصوديوم مخصص للاستخدام داخل تجويف الرحم، للمساعدة في الحد من تكوّن الالتصاقات داخل الرحم بعد بعض الإجراءات الطبية والجراحية.',
        'GynWell is a sodium hyaluronate medical gel intended for use inside the uterine cavity, to help reduce the formation of intrauterine adhesions after certain medical and surgical procedures.')}</p>
      <p style="font-size:13px;line-height:2;margin-top:10px">${T('يوفر المنتج حاجزًا مؤقتًا داخل تجويف الرحم خلال مرحلة التعافي، للمساعدة في تقليل تلامس الأنسجة والحد من تكوّن الالتصاقات.',
        'The product provides a temporary barrier inside the uterine cavity during the recovery phase, helping reduce tissue contact and the formation of adhesions.')}</p>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('الاستخدام', 'Use')}</h3>
      <p style="font-size:13px;line-height:2">${T('يُستخدم GynWell داخل تجويف الرحم بعد الإجراءات المحددة في تعليمات استخدام المنتج، للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات داخل الرحم.',
        'GynWell is used inside the uterine cavity after the procedures specified in the product’s instructions for use, to help prevent or reduce the formation of intrauterine adhesions.')}</p>
    </div>
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('آلية العمل', 'How it works'), T('كيف يعمل GynWell؟', 'How does GynWell work?'))}
  <div class="grid grid-2" style="gap:18px">
    ${[
      [T('ما يحدث بعد الإجراء', 'What happens after the procedure'), T('قد تتكوّن الالتصاقات داخل الرحم خلال مرحلة التعافي بعد بعض الإجراءات.', 'Intrauterine adhesions may form during the recovery phase after certain procedures.')],
      [T('دور المنتج', 'The product’s role'), T('يعمل GynWell كحاجز مؤقت داخل تجويف الرحم، للمساعدة في تقليل تلامس الأسطح النسيجية خلال هذه المرحلة والحد من تكوّن الالتصاقات.', 'GynWell acts as a temporary barrier inside the uterine cavity, helping reduce contact between tissue surfaces during this phase and limit the formation of adhesions.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15.5px">${t}</h4><p style="font-size:13px;line-height:2">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('أبرز المعلومات الفنية', 'Key technical information'))}
  <div class="grid grid-4" style="gap:18px">
    ${[
      [T('نوع المنتج', 'Product type'), T('جل طبي مخصص للاستخدام داخل الرحم.', 'A medical gel intended for intrauterine use.')],
      [T('المادة الأساسية', 'Core material'), T('هيالورونات الصوديوم (Sodium Hyaluronate).', 'Sodium Hyaluronate.')],
      [T('الغرض من الاستخدام', 'Purpose of use'), T('المساعدة في الوقاية أو الحد من تكوّن الالتصاقات داخل الرحم بعد الإجراءات المحددة للمنتج.', 'Helping prevent or reduce the formation of intrauterine adhesions after the procedures specified for the product.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام من قِبل المختصين وفق تعليمات الاستخدام الخاصة بالمنتج.', 'Intended for use by specialists according to the product’s instructions for use.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="font-size:12.5px;line-height:2">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمنشآت الطبية', 'Supply for medical facilities'),
    T('توفر جذور الجمال GynWell للمنشآت الطبية، مع خدمات التوريد والتخزين والتوزيع والمتابعة. للحصول على الملف الطبي للمنتج أو الاستفسار عن التوريد، يمكن التواصل مباشرة مع فريق جذور الجمال.',
      'Beauty Roots supplies GynWell to medical facilities, with supply, storage, distribution and follow-up services. To obtain the product’s medical file or enquire about supply, contact the Beauty Roots team directly.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  /* ============================================================
     OVDs — brands/ovds
  ============================================================ */
  add('brands/ovds',
    T('OVDs | مستحضرات لزجة لجراحات العيون', 'OVDs | Ophthalmic Viscosurgical Devices'),
    T('مستحضرات طبية لزجة من هيالورونات الصوديوم، مخصصة للاستخدام أثناء جراحات العيون للمساعدة في الحفاظ على الحجرة الأمامية ودعم حماية الأنسجة داخل العين.',
      'Viscous sodium hyaluronate medical preparations intended for use during eye surgeries, helping maintain the anterior chamber and support the protection of intraocular tissues.'),
    'brands', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('العلامات والمنتجات', 'Brands & Products'), u('brands')], ['<span class="lat" dir="ltr">OVDs</span>']],
    T('<span class="lat" dir="ltr">OVDs</span> | مستحضرات لزجة لجراحات العيون', '<span class="lat" dir="ltr">OVDs</span> | Ophthalmic Viscosurgical Devices'),
    T('مستحضرات طبية لزجة من هيالورونات الصوديوم، مخصصة للاستخدام أثناء جراحات العيون للمساعدة في الحفاظ على الحجرة الأمامية ودعم حماية الأنسجة داخل العين.',
      'Viscous sodium hyaluronate medical preparations intended for use during eye surgeries, helping maintain the anterior chamber and support the protection of intraocular tissues.'),
    `<div class="page-hero__chips">${chip(T('جراحات العيون', 'Eye Surgery'))}${chip('<span class="lat" dir="ltr">Ophthalmic Viscosurgical Devices (OVDs)</span>', 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن OVDs', 'About OVDs')}</h3>
      <p style="font-size:13px;line-height:2">${T('مستحضرات لزجة مخصصة للاستخدام أثناء العمليات الجراحية داخل العين، تساعد في الحفاظ على مساحة وعمق الحجرة الأمامية ودعم حماية الأنسجة الحساسة، بما يهيئ بيئة مناسبة لإجراء المناورات الجراحية داخل العين.',
        'Viscous preparations intended for use during intraocular surgical procedures; they help maintain the space and depth of the anterior chamber and support the protection of sensitive tissues, creating a suitable environment for intraocular surgical maneuvers.')}</p>
      <h4 class="card__title" style="font-size:15px;margin-top:18px">${T('دواعي الاستخدام والتدخلات الجراحية', 'Indications & surgical interventions')}</h4>
      <p style="font-size:13px;line-height:2">${T('تُستخدم OVDs في عدد من إجراءات وجراحات العيون، ومنها:', 'OVDs are used in a number of ophthalmic procedures and surgeries, including:')}</p>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('عمليات إزالة الساد (المياه البيضاء) وزراعة العدسات داخل العين (IOL).', 'Cataract extraction and intraocular lens (IOL) implantation.')}</li>
        <li>${I.check(13)}${T('عمليات زراعة ورأب القرنية (Keratoplasty).', 'Corneal transplantation procedures (keratoplasty).')}</li>
        <li>${I.check(13)}${T('جراحات معالجة المياه الزرقاء (الجلوكوما).', 'Glaucoma surgeries.')}</li>
        <li>${I.check(13)}${T('بعض الإجراءات الجراحية المتعلقة بالجزء الأمامي من العين.', 'Certain surgical procedures involving the anterior segment of the eye.')}</li>
      </ul>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('المواصفات الفنية', 'Technical specifications')}</h3>
      <ul class="check-list" style="margin-top:8px">
        <li>${I.check(13)}${T('تصنيف المنتج: مستحضر لزج مخصص لجراحات العيون <span class="lat" dir="ltr">Ophthalmic Viscosurgical Device (OVD)</span>.', 'Product classification: <span class="lat" dir="ltr">Ophthalmic Viscosurgical Device (OVD)</span> — a viscous preparation intended for eye surgery.')}</li>
        <li>${I.check(13)}${T('المادة: هيالورونات الصوديوم عالية النقاء وذات وزن جزيئي مرتفع.', 'Material: high-purity, high-molecular-weight sodium hyaluronate.')}</li>
        <li>${I.check(13)}${T('دعم حماية الأنسجة: تساعد الخصائص اللزجة للمستحضر في دعم حماية الأنسجة الحساسة داخل العين أثناء الإجراء الجراحي.', 'Tissue protection support: the preparation’s viscous properties help support the protection of sensitive intraocular tissues during the surgical procedure.')}</li>
        <li>${I.check(13)}${T('الحفاظ على الحجرة الأمامية: يساعد المستحضر في الحفاظ على مساحة وعمق الحجرة الأمامية أثناء الجراحة، بما يتيح مساحة مناسبة للعمل الجراحي.', 'Anterior chamber maintenance: the preparation helps maintain the space and depth of the anterior chamber during surgery, allowing adequate room for surgical work.')}</li>
        <li>${I.check(13)}${T('الوضوح البصري: تركيبة شفافة تساعد على الحفاظ على وضوح مجال الرؤية أثناء الإجراء.', 'Optical clarity: a transparent formulation that helps maintain a clear field of view during the procedure.')}</li>
        <li>${I.check(13)}${T('الإزالة بعد الاستخدام: مصممة بما يسمح بإزالة المستحضر في نهاية الإجراء وفق البروتوكول الجراحي المتبع.', 'Removal after use: designed to allow removal of the preparation at the end of the procedure according to the surgical protocol followed.')}</li>
      </ul>
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمنشآت الطبية', 'Supply for medical facilities'),
    T('توفر جذور الجمال منتجات OVDs للمنشآت الطبية، ضمن منظومة تشمل التوريد والتخزين والتوزيع والمتابعة. لطلب الملف الطبي للمنتج أو الاستفسار عن التوريد، يمكن التواصل مباشرة مع فريق جذور الجمال.',
      'Beauty Roots supplies OVDs products to medical facilities within a system covering supply, storage, distribution and follow-up. To request the product’s medical file or enquire about supply, contact the Beauty Roots team directly.'))}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'), u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>
`);

  return pages;
}
