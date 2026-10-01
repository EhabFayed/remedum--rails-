// Product pages rebuilt from the client's "website-edits 3 pages" brief
// (HA Filler, Hairont, GynWell). Arabic copy is the client's text verbatim;
// English is a faithful translation. Shared by the static build (build-site)
// and the Rails views (build-views-c, which writes only these three pages).
import { I, chip, secHead, btn, darkStrip, crumbs, WA } from './lib.mjs';

export default function pagesC(ctx) {
  const { T, u } = ctx;
  const pages = [];
  const add = (path, title, desc, active, body) => pages.push({ path, title, desc, active, body });
  const lat = (s) => `<span class="lat" dir="ltr">${s}</span>`;
  const home = [T('الرئيسية', 'Home'), u('')];
  const brands = [T('العلامات والمنتجات', 'Brands & Products'), u('brands')];
  const factCard = (t, d) => `<div class="card"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="font-size:12.5px;line-height:2">${d}</p></div>`;

  /* split hero: copy beside the product photograph, like the ReMedium pages */
  const hero = (name, titleTail, lead, chips, img, alt, primary, wide = false) => `
<section class="page-hero"><div class="container"><div class="page-hero__inner hero-split pdp-hero${wide ? ' pdp-hero--wide' : ''}">
  <div>
    ${crumbs(ctx, [home, brands, [lat(name)]])}
    <h1 class="page-title">${lat(name)} | ${titleTail}</h1>
    <p class="page-hero__lead">${lead}</p>
    <div class="page-hero__chips">${chips}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">
      ${btn(primary, u('medical/quote'), 'dark')}
      ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
    </div>
  </div>
  <div class="arch-media pdp-hero__media">
    <img src="/assets/img/${img}" alt="${alt}" width="1200" height="1143">
  </div>
</div></div></section>`;

  const supply = (txt, primary) => `
<section class="section section--last"><div class="container">
  ${darkStrip(T('التوريد للمنشآت الطبية', 'Supply for medical facilities'), txt)}
  <div style="display:flex;gap:14px;justify-content:center;margin-top:24px;flex-wrap:wrap">
    ${btn(primary, u('medical/quote'), 'dark')}
    ${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'ghost')}
  </div>
</div></section>`;

  /* ============================================================
     01 — HA FILLER
  ============================================================ */
  const HA = [
    ['fine-lines', 'Fine Lines', T('للخطوط الدقيقة', 'For fine lines'),
      T('مخصص لتصحيح الخطوط الرفيعة، بما في ذلك الخطوط حول العينين ومحيط الفم.', 'Intended to correct fine lines, including lines around the eyes and the mouth.'),
      '0.10–0.15', T(`${lat('6–9')} أشهر`, '6–9 months')],
    ['derm', 'Derm', T('للتجاعيد المتوسطة', 'For moderate wrinkles'),
      T('مخصص للتجاعيد المتوسطة وطيات الجلد، مع تطبيقات تشمل خطوط العبوس وتعزيز مظهر الشفاه.', 'Intended for moderate wrinkles and skin folds, with applications including frown lines and enhancing the appearance of the lips.'),
      '0.15–0.28', T(`${lat('6–12')} شهرًا`, '6–12 months')],
    ['derm-deep', 'Derm Deep', T('للتجاعيد المتوسطة والعميقة', 'For moderate to deep wrinkles'),
      T('مخصص للتجاعيد المتوسطة والعميقة، مع تطبيقات لاستعادة الحجم في الشفاه والخدين ودعم ملامح الوجه.', 'Intended for moderate to deep wrinkles, with applications for restoring volume in the lips and cheeks and supporting facial contours.'),
      '0.28–0.50', T(`${lat('6–12')} شهرًا`, '6–12 months')],
    ['derm-plus', 'Derm Plus', T('للتجاعيد العميقة واستعادة الحجم', 'For deep wrinkles and volume restoration'),
      T('مخصص لتصحيح التجاعيد العميقة ودعم استعادة الحجم في مناطق مثل الخدين وعظام الوجنتين والذقن.', 'Intended to correct deep wrinkles and support volume restoration in areas such as the cheeks, cheekbones and chin.'),
      '0.50–1.25', T(`${lat('9–18')} شهرًا`, '9–18 months')],
    ['sub-skin', 'Sub Skin', T('لاستعادة الحجم وتحديد الملامح', 'For volume restoration and contouring'),
      T('مخصص لاستعادة الحجم ودعم تحديد ملامح الوجه، بما يشمل الخدين والذقن ومحيط الأنف.', 'Intended to restore volume and support facial contour definition, including the cheeks, chin and the area around the nose.'),
      '1.25–2.00', T(`${lat('9–18')} شهرًا`, '9–18 months')],
  ];
  add('brands/ha-filler',
    T('HA Filler | فيلر حمض الهيالورونيك', 'HA Filler | Hyaluronic Acid Dermal Fillers'),
    T('مجموعة من فيلر حمض الهيالورونيك المتشابك، تضم خيارات متعددة لتلبية احتياجات مختلفة في التجميل الطبي، من الخطوط الدقيقة إلى استعادة الحجم وتحديد ملامح الوجه.',
      'A range of cross-linked hyaluronic acid fillers offering multiple options for different needs in medical aesthetics — from fine lines to volume restoration and facial contouring.'),
    'brands', `
${hero('HA Filler', T('فيلر حمض الهيالورونيك', 'Hyaluronic Acid Dermal Fillers'),
  T('مجموعة من فيلر حمض الهيالورونيك المتشابك، تضم خيارات متعددة لتلبية احتياجات مختلفة في التجميل الطبي، من الخطوط الدقيقة إلى استعادة الحجم وتحديد ملامح الوجه.',
    'A range of cross-linked hyaluronic acid fillers offering multiple options for different needs in medical aesthetics — from fine lines to volume restoration and facial contouring.'),
  `${chip(T('التجميل الطبي', 'Medical Aesthetics'))}${chip(lat('Hyaluronic Acid Dermal Fillers'), 'green')}`,
  'hafiller-hero-wide.webp', T('عبوات منتجات HA Filler الخمسة معًا', 'The five HA Filler products together'),
  T('اطلب معلومات المنتجات', 'Request product information'), true)}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن HA Filler', 'About HA Filler')}</h3>
      <p style="font-size:13px;line-height:2">${T('HA Filler هو مجموعة من فيلر حمض الهيالورونيك المخصص للاستخدام في التجميل الطبي، بخيارات متنوعة تتيح للطبيب اختيار المنتج وفق المنطقة المستهدفة والنتيجة المطلوبة.',
        'HA Filler is a range of hyaluronic acid fillers intended for use in medical aesthetics, with diverse options that allow the physician to select the product according to the target area and the desired result.')}</p>
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

<section class="section--mint"><div class="container" data-tabs>
  ${secHead(T('المجموعة', 'The range'), T('مجموعة HA Filler', 'The HA Filler range'),
    T('خمس تركيبات من فيلر هيالورونات الصوديوم المتشابك، تختلف في حجم الجزيئات والاستخدامات لتناسب تطبيقات تجميلية متعددة.',
      'Five formulations of cross-linked sodium hyaluronate filler, differing in particle size and uses to suit a range of aesthetic applications.'))}
  <div class="tabs hf-tabs" role="tablist">
    ${HA.map(([id, name], i) => `<button type="button" class="tab${i === 0 ? ' is-active' : ''}" data-tab="${id}" role="tab"><span class="lat" dir="ltr">${name}</span></button>`).join('')}
  </div>
  ${HA.map(([id, name, sub, desc, size, dur], i) => `
  <div class="tab-panel hf-slide" data-panel="${id}"${i === 0 ? '' : ' hidden'} role="tabpanel">
    <div class="hf-slide__body">
      <span class="eyebrow"><i></i>${sub}</span>
      <h3 class="hf-slide__name lat" dir="ltr">${name}</h3>
      <p class="hf-slide__desc">${desc}</p>
      <dl class="hf-specs">
        <div><dt>${T('التركيز', 'Concentration')}</dt><dd class="lat" dir="ltr">20 mg/ml</dd></div>
        <div><dt>${T('حجم الجزيئات', 'Particle size')}</dt><dd class="lat" dir="ltr">${size} mm</dd></div>
        <div><dt>${T('مدة ثبات المنتج', 'Product longevity')}</dt><dd>${dur}</dd></div>
      </dl>
    </div>
    <div class="hf-slide__media">
      <img src="/assets/img/hafiller-${id}.webp" alt="${T('عبوة', 'Pack of')} HA Filler ${name}" loading="lazy">
    </div>
  </div>`).join('')}
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('المعلومات الفنية', 'Technical information'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [T('المادة الأساسية', 'Core material'), T('هيالورونات الصوديوم المتشابك', 'Cross-linked sodium hyaluronate') + `<br>${lat('Cross-linked Sodium Hyaluronate')}`],
      [T('التركيز', 'Concentration'), T(`${lat('20 mg/ml')} لجميع منتجات المجموعة.`, `${lat('20 mg/ml')} for every product in the range.`)],
      [T('مجموعة المنتجات', 'Product range'), T('5 تركيبات تختلف في حجم الجزيئات والاستخدامات المخصصة لكل منها.', '5 formulations, differing in particle size and in the uses each is intended for.')],
      [T('حجم الجزيئات', 'Particle size'), T(`يتدرج من ${lat('0.10')} إلى ${lat('2.00 mm')} حسب المنتج.`, `Ranges from ${lat('0.10')} to ${lat('2.00 mm')} depending on the product.`)],
      [T('اختيار المنتج', 'Product selection'), T('يتم اختيار التركيبة المناسبة وفق المنطقة المستهدفة وطبيعة التصحيح المطلوب.', 'The appropriate formulation is selected according to the target area and the nature of the correction required.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام من قِبل الممارسين الصحيين المؤهلين وفق تعليمات استخدام كل منتج.', 'Intended for use by qualified healthcare practitioners in accordance with each product’s instructions for use.')],
    ].map(([t, d]) => factCard(t, d)).join('')}
  </div>
</div></section>
${supply(T('توفر جذور الجمال مجموعة HA Filler للمنشآت الطبية، مع خدمات التوريد والتخزين والتوزيع والمتابعة. للتعرف على المنتجات المتاحة أو طلب المعلومات الفنية والتجارية، تواصلوا مع فريق جذور الجمال.',
  'Beauty Roots supplies the HA Filler range to medical facilities, with supply, storage, distribution and follow-up services. To learn about the available products or request technical and commercial information, contact the Beauty Roots team.'),
  T('اطلب معلومات المنتجات', 'Request product information'))}
`);

  /* ============================================================
     02 — HAIRONT
  ============================================================ */
  /* simple medical illustration (brief: gel layer as a barrier between two
     tissue surfaces, no surgical scenes) */
  const barrierArt = (topLbl, gelLbl, botLbl) => `
<svg class="barrier-art" viewBox="0 0 520 300" role="img" aria-label="${gelLbl}">
  <defs>
    <linearGradient id="bTissue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F3D6CF"/><stop offset="1" stop-color="#E7B7AC"/></linearGradient>
    <linearGradient id="bTissue2" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#F3D6CF"/><stop offset="1" stop-color="#E7B7AC"/></linearGradient>
    <linearGradient id="bGel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9FE3CB" stop-opacity=".75"/><stop offset=".5" stop-color="#5FD0A9" stop-opacity=".85"/><stop offset="1" stop-color="#9FE3CB" stop-opacity=".75"/></linearGradient>
  </defs>
  <rect width="520" height="300" rx="26" fill="#F4FAF7"/>
  <path d="M40 40H480V104C430 116 390 98 340 108S250 122 200 110 110 100 40 112Z" fill="url(#bTissue)"/>
  <path d="M40 104C110 92 150 118 200 104S300 96 340 102 430 110 480 98" fill="none" stroke="#D49A8C" stroke-width="2"/>
  <path d="M40 116C110 104 150 128 200 116S300 108 340 114 430 122 480 110V186C430 198 390 178 340 188S250 202 200 190 110 178 40 192Z" fill="url(#bGel)"/>
  <g fill="#fff" opacity=".7"><circle cx="120" cy="150" r="5"/><circle cx="210" cy="160" r="3.5"/><circle cx="300" cy="146" r="4.5"/><circle cx="390" cy="158" r="3"/><circle cx="440" cy="148" r="4"/></g>
  <path d="M40 200C110 186 150 212 200 198S300 190 340 196 430 204 480 192V260H40Z" fill="url(#bTissue2)"/>
  <path d="M40 200C110 186 150 212 200 198S300 190 340 196 430 204 480 192" fill="none" stroke="#D49A8C" stroke-width="2"/>
  <g font-family="inherit" font-size="15" font-weight="700" fill="#0C1A14" text-anchor="middle">
    <text x="260" y="76">${topLbl}</text>
    <text x="260" y="157" fill="#0B4432">${gelLbl}</text>
    <text x="260" y="236">${botLbl}</text>
  </g>
</svg>`;
  add('brands/hairont',
    T('Hairont | جل طبي مضاد للالتصاقات', 'Hairont | Anti-Adhesion Medical Gel'),
    T('جل طبي من هيالورونات الصوديوم، مخصص للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية.',
      'A sodium hyaluronate medical gel intended to help prevent or reduce the formation of adhesions after surgical procedures.'),
    'brands', `
${hero('Hairont', T('جل طبي مضاد للالتصاقات', 'Anti-Adhesion Medical Gel'),
  T('جل طبي من هيالورونات الصوديوم، مخصص للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية.',
    'A sodium hyaluronate medical gel intended to help prevent or reduce the formation of adhesions after surgical procedures.'),
  `${chip(T('المنتجات الطبية المتخصصة', 'Specialised medical products'))}${chip(lat('Anti-Adhesion Gel'), 'green')}`,
  'hairont-hero.webp', T('عبوة Hairont مع السرنجة', 'Hairont pack with its syringe'),
  T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'))}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن Hairont', 'About Hairont')}</h3>
      <p style="font-size:13px;line-height:2">${T('Hairont هو جل طبي يعتمد على هيالورونات الصوديوم، ويُستخدم للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية في تجويف البطن والحوض.',
        'Hairont is a sodium hyaluronate–based medical gel used to help prevent or reduce the formation of adhesions after surgical procedures in the abdominal and pelvic cavity.')}</p>
      <p style="font-size:13px;line-height:2;margin-top:10px">${T('يعمل كحاجز مادي مؤقت بين الأسطح النسيجية المعرضة للالتصاق خلال مرحلة التعافي بعد الجراحة.',
        'It acts as a temporary physical barrier between tissue surfaces prone to adhesion during the post-operative recovery phase.')}</p>
    </div>
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('الاستخدام', 'Use')}</h3>
      <p style="font-family:var(--ff-d);font-size:14.5px;font-weight:700;color:var(--green-900);margin-bottom:8px">${T('المساعدة في الحد من الالتصاقات بعد الجراحة', 'Helping to reduce adhesions after surgery')}</p>
      <p style="font-size:13px;line-height:2">${T('يُستخدم Hairont للمساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد العمليات الجراحية في تجويف البطن والحوض.',
        'Hairont is used to help prevent or reduce the formation of adhesions after surgical procedures in the abdominal and pelvic cavity.')}</p>
    </div>
  </div>
</div></section>

<section class="section--mint"><div class="container">
  <div class="hero-split" style="align-items:center">
    <div>
      ${secHead(T('آلية العمل', 'How it works'), T('كيف يعمل Hairont؟', 'How does Hairont work?'))}
      <p style="font-family:var(--ff-d);font-size:16px;font-weight:700;color:var(--green-900);margin:-14px 0 10px">${T('حاجز مؤقت بين الأسطح النسيجية', 'A temporary barrier between tissue surfaces')}</p>
      <p style="font-size:13.5px;line-height:2">${T('يساعد Hairont على تكوين حاجز مادي بين الأسطح النسيجية، بما يساهم في تقليل الاحتكاك والتلامس بينها خلال مرحلة التعافي والحد من تكوّن الالتصاقات بعد الجراحة.',
        'Hairont helps form a physical barrier between tissue surfaces, reducing friction and contact between them during the recovery phase and limiting the formation of adhesions after surgery.')}</p>
    </div>
    <figure class="barrier-figure">
      ${barrierArt(T('سطح نسيجي', 'Tissue surface'), T('طبقة جل Hairont', 'Hairont gel layer'), T('سطح نسيجي', 'Tissue surface'))}
      <figcaption>${T('توضيح مبسّط: طبقة الجل حاجزًا مؤقتًا بين سطحين نسيجيين خلال التعافي.', 'Simplified illustration: the gel layer as a temporary barrier between two tissue surfaces during recovery.')}</figcaption>
    </figure>
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('أبرز المعلومات الفنية', 'Key technical information'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [T('نوع المنتج', 'Product type'), T('جل طبي مضاد للالتصاقات.', 'Anti-adhesion medical gel.')],
      [T('المادة الأساسية', 'Core material'), T('هيالورونات الصوديوم', 'Sodium hyaluronate') + `<br>${lat('Sodium Hyaluronate')}`],
      [T('الاستخدام', 'Use'), T('المساعدة في الوقاية أو الحد من تكوّن الالتصاقات بعد الإجراءات الجراحية المحددة.', 'Helping to prevent or reduce the formation of adhesions after the specified surgical procedures.')],
      [T('التركيز', 'Concentration'), lat('10 mg/mL')],
      [T('الأحجام المتاحة', 'Available volumes'), lat('1.0 / 2.0 / 2.5 / 3.0 / 4.0 / 5.0 / 6.0 / 8.0 / 10 / 15 / 18 / 20 mL')],
      [T('التعقيم', 'Sterilisation'), T('معقم بالبخار', 'Steam sterilised') + `<br>${lat('Steam Sterilized')}`],
      [T('مدة الصلاحية', 'Shelf life'), T('سنتان', 'Two years')],
      [T('التخزين', 'Storage'), T('يُحفظ في درجة حرارة الغرفة وبعيدًا عن الضوء.', 'Store at room temperature, away from light.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام الطبي وفق تعليمات واستخدامات المنتج المعتمدة.', 'For medical use in accordance with the product’s approved instructions and indications.')],
    ].map(([t, d]) => factCard(t, d)).join('')}
  </div>
</div></section>
${supply(T('توفر جذور الجمال Hairont للمنشآت الطبية، ضمن منظومة تشمل التوريد والتخزين والتوزيع والمتابعة. للحصول على الملف الطبي للمنتج أو الاستفسار عن التوريد، يمكن التواصل مع فريق جذور الجمال.',
  'Beauty Roots supplies Hairont to medical facilities within a system covering supply, storage, distribution and follow-up. To obtain the product’s medical file or enquire about supply, contact the Beauty Roots team.'),
  T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'))}
`);

  /* ============================================================
     03 — GYNWELL
  ============================================================ */
  add('brands/gynwell',
    T('GynWell | جل هيالورونات الصوديوم داخل الرحم', 'GynWell | Intrauterine Sodium Hyaluronate Gel'),
    T('جل طبي يعتمد على هيالورونات الصوديوم، ومخصص للاستخدام داخل تجويف الرحم للمساعدة في الحد من تكوّن الالتصاقات بعد بعض الإجراءات الطبية والجراحية.',
      'A sodium hyaluronate–based medical gel intended for use inside the uterine cavity to help reduce the formation of adhesions after certain medical and surgical procedures.'),
    'brands', `
${hero('GynWell', T('جل هيالورونات الصوديوم داخل الرحم', 'Intrauterine Sodium Hyaluronate Gel'),
  T('جل طبي يعتمد على هيالورونات الصوديوم، ومخصص للاستخدام داخل تجويف الرحم للمساعدة في الحد من تكوّن الالتصاقات بعد بعض الإجراءات الطبية والجراحية.',
    'A sodium hyaluronate–based medical gel intended for use inside the uterine cavity to help reduce the formation of adhesions after certain medical and surgical procedures.'),
  `${chip(T('صحة المرأة', 'Women’s health'))}${chip(lat('Intrauterine Gel'), 'green')}`,
  'gynwell-hero.webp', T('عبوة GynWell مع السرنجة', 'GynWell pack with its syringe'),
  T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'))}

<section class="section"><div class="container">
  <div class="grid grid-2" style="gap:18px;align-items:start">
    <div class="card">
      <h3 class="card__title" style="font-size:17px">${T('نبذة عن GynWell', 'About GynWell')}</h3>
      <p style="font-size:13px;line-height:2">${T('GynWell هو جل طبي من هيالورونات الصوديوم مخصص للاستخدام داخل تجويف الرحم، للمساعدة في الحد من تكوّن الالتصاقات داخل الرحم بعد بعض الإجراءات الطبية والجراحية.',
        'GynWell is a sodium hyaluronate medical gel intended for use inside the uterine cavity, to help reduce the formation of intrauterine adhesions after certain medical and surgical procedures.')}</p>
      <p style="font-size:13px;line-height:2;margin-top:10px">${T('يوفر المنتج حاجزًا مؤقتًا داخل تجويف الرحم خلال مرحلة التعافي، للمساعدة في تقليل تلامس الأنسجة والحد من تكوّن الالتصاقات.',
        'The product provides a temporary barrier inside the uterine cavity during the recovery phase, helping to reduce tissue contact and limit the formation of adhesions.')}</p>
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
    <div class="card"><p style="font-size:13.5px;line-height:2">${T('قد تتكوّن الالتصاقات داخل الرحم خلال مرحلة التعافي بعد بعض الإجراءات.', 'Intrauterine adhesions may form during the recovery phase after certain procedures.')}</p></div>
    <div class="card"><p style="font-size:13.5px;line-height:2">${T('يعمل GynWell كحاجز مؤقت داخل تجويف الرحم، للمساعدة في تقليل تلامس الأسطح النسيجية خلال هذه المرحلة والحد من تكوّن الالتصاقات.',
      'GynWell acts as a temporary barrier inside the uterine cavity, helping to reduce contact between tissue surfaces during this phase and limit the formation of adhesions.')}</p></div>
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المعلومات الفنية', 'Technical information'), T('المعلومات الفنية', 'Technical information'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [T('نوع المنتج', 'Product type'), T('جل طبي مضاد للالتصاقات مخصص للاستخدام داخل تجويف الرحم.', 'Anti-adhesion medical gel intended for use inside the uterine cavity.')],
      [T('المادة الأساسية', 'Core material'), T('هيالورونات الصوديوم المتشابك', 'Cross-linked sodium hyaluronate') + `<br>${lat('Cross-linked Sodium Hyaluronate')}`],
      [T('التركيز', 'Concentration'), lat('10 mg/mL')],
      [T('تقنية التصنيع', 'Manufacturing technology'), lat('BDDE Cross-linking Technology')],
      [T('خصائص التركيبة', 'Formulation properties'), T('تركيبة جل عالية اللزوجة والتماسك، مصممة للمساعدة على الاستقرار داخل تجويف الرحم خلال الفترة المستهدفة من الاستخدام.', 'A highly viscous, cohesive gel formulation designed to help it remain in place inside the uterine cavity for the intended period of use.')],
      [T('التعقيم', 'Sterilisation'), T('معقم بالبخار عند درجة حرارة مرتفعة.', 'Steam sterilised at high temperature.')],
      [T('التخزين', 'Storage'), T('يُحفظ في درجة حرارة الغرفة، بعيدًا عن الضوء، وفي رطوبة أقل من 80%.', 'Store at room temperature, away from light, at humidity below 80%.')],
      [T('الغرض من الاستخدام', 'Intended purpose'), T('المساعدة في الوقاية أو الحد من تكوّن الالتصاقات داخل الرحم بعد الإجراءات المحددة للمنتج.', 'Helping to prevent or reduce intrauterine adhesions after the procedures specified for the product.')],
      [T('الاستخدام المهني', 'Professional use'), T('مخصص للاستخدام من قِبل المختصين وفق تعليمات الاستخدام الخاصة بالمنتج.', 'Intended for use by specialists in accordance with the product’s instructions for use.')],
    ].map(([t, d]) => factCard(t, d)).join('')}
  </div>
</div></section>
${supply(T('توفر جذور الجمال GynWell للمنشآت الطبية، مع خدمات التوريد والتخزين والتوزيع والمتابعة. للحصول على الملف الطبي للمنتج أو الاستفسار عن التوريد، يمكن التواصل مباشرة مع فريق جذور الجمال.',
  'Beauty Roots supplies GynWell to medical facilities, with supply, storage, distribution and follow-up services. To obtain the product’s medical file or enquire about supply, contact the Beauty Roots team directly.'),
  T('طلب الملف الطبي وعروض التوريد', 'Request the medical file & supply offers'))}
`);

  return pages;
}
