// ROOTS OF BEAUTY — shared chrome + helpers for the bilingual generator.
// Every builder receives ctx = { L: 'ar'|'en', T(ar,en), u(path), alt(path), WA }
// u('')   → locale home ('/ar/' or '/' — the English landing)
// u('x')  → '/ar/x/' | '/en/x/'
// alt(p)  → same page in the other locale (for the language switcher / hreflang)

export const WA = 'https://wa.me/966562017170';

const svg = (inner, s = 16) =>
  `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

export const I = {
  arrow: (s = 15) => svg('<path d="M17 17L7 7"></path><path d="M7 14V7h7"></path>', s),
  chev: () => svg('<path d="M6 9l6 6 6-6"></path>', 10),
  leaf: (s = 16) => svg('<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"></path><path d="M5 19c3-6 6-9 10-11"></path>', s),
  check: (s = 13) => svg('<path d="M4 12l5 5L20 7"></path>', s),
  xmark: (s = 12) => svg('<path d="M6 6l12 12M18 6L6 18"></path>', s),
  doc: (s = 18) => svg('<path d="M6 2h8l4 4v16H6z"></path><path d="M14 2v4h4"></path><path d="M9 12h6M9 16h6"></path>', s),
  shield: (s = 18) => svg('<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"></path><path d="M9 12l2 2 4-4"></path>', s),
  pin: (s = 16) => svg('<path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>', s),
  mail: (s = 16) => svg('<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path>', s),
  phone: (s = 16) => svg('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"></path>', s),
  ext: (s = 14) => svg('<path d="M14 5h5v5"></path><path d="M19 5l-8 8"></path><path d="M9 5H5v14h14v-4"></path>', s),
  search: (s = 16) => svg('<circle cx="11" cy="11" r="7"></circle><path d="M20 20l-4-4"></path>', s),
  lock: (s = 15) => svg('<rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V7a4 4 0 0 1 8 0v4"></path>', s),
  box: (s = 18) => svg('<path d="M3 7l9-4 9 4v10l-9 4-9-4z"></path><path d="M3 7l9 4 9-4M12 11v10"></path>', s),
  thermo: (s = 18) => svg('<path d="M10 13.5V5a2 2 0 0 1 4 0v8.5a4.5 4.5 0 1 1-4 0z"></path>', s),
  truck: (s = 18) => svg('<path d="M2 6h12v11H2z"></path><path d="M14 10h4l3 3v4h-7z"></path><circle cx="6.5" cy="18.5" r="1.8"></circle><circle cx="16.5" cy="18.5" r="1.8"></circle>', s),
  user: (s = 22) => svg('<circle cx="12" cy="8" r="4"></circle><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"></path>', s),
  eye: (s = 16) => svg('<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle>', s),
  star: (s = 13) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.4 7L12 17.5 5.8 21l1.4-7L2 9.3l7-.8z"></path></svg>`,
  wa: (s = 16) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.9-1.4A10 10 0 1 0 12 2zm4.8 13.9c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.6-.1 1.2z"></path></svg>`,
};

export const ph = (t) => `<span class="ph">${t}</span>`;
export const chip = (t, mod = '') => `<span class="chip${mod ? ' chip--' + mod : ''}">${t}</span>`;
export const eyebrow = (t, light = false) => `<span class="eyebrow${light ? ' eyebrow--light' : ''}"><i></i>${t}</span>`;
export const secHead = (eb, title, lead = '') => `
<div class="sec-head">
  ${eyebrow(eb)}
  <h2 class="sec-title">${title}</h2>
  ${lead ? `<p class="sec-lead">${lead}</p>` : ''}
</div>`;
export const btn = (label, href, kind = 'dark', icon = null, extAttr = '') =>
  `<a class="btn btn--${kind}" href="${href}"${extAttr}>${label}<span class="btn__circle">${icon ?? I.arrow()}</span></a>`;
export const noteStrip = (txt) => `<div class="note-strip">${I.shield(17)}<p>${txt}</p></div>`;
export const darkStrip = (title, txt) => `<div class="dark-strip"><h3>${title}</h3><p>${txt}</p></div>`;

export const durBar = (ctx, label, from, to, color) => `
<div class="dur">
  <div class="dur__head"><span>${ctx.T('ثباتية النتيجة', 'RESULT LONGEVITY')}</span><b style="color:${color}">${label}</b></div>
  <div class="dur__track"><span class="dur__fill" style="inset-inline-start:${(from / 24) * 100}%;width:${((to - from) / 24) * 100}%;background:${color}"></span></div>
  <div class="dur__scale"><span>0</span><span>6</span><span>12</span><span>18</span><span>${ctx.T('24 شهرًا', '24 mo')}</span></div>
</div>`;

/* ---------- localized product data (copy source: client deck, Aug 2026) ---------- */
export const products = ({ T }) => ({
  fine: {
    slug: 'fine', name: 'ReMedium Fine', color: 'var(--fine)', swatch: 'fine',
    sub: T('للخطوط الدقيقة والسطحية', 'For delicate superficial lines'),
    subLong: T('فيلر هيالورونيك أسيد ناعم وعالي النقاء — لمعالجة الخطوط السطحية واستعادة حيوية الأنسجة الرقيقة.',
      'High-purity, soft-viscoelastic hyaluronic acid filler formulated for delicate, superficial tissue restoration.'),
    areas: T('الخطوط الدقيقة حول العين · خطوط الجبهة · خطوط الرقبة', 'Periorbital lines · Forehead lines · Neck lines'),
    dur: T('٩ – ١٢ شهرًا', '9–12 months'), from: 9, to: 12,
    why: T('جل ناعم بتقنية الترابط MDM: قوة ضغط منخفضة تمنح حقنًا سلسًا بدقة القطرات الدقيقة، واندماجًا نسيجيًا متجانسًا في مناطق الجلد الرقيقة — دون تكتلات ودون أثر السائل تحت الجلد.',
      'A soft MDM cross-linked gel: low extrusion force for smooth, micro-droplet precision and seamless adaptation to thin-skin zones — no lumps and no Tyndall effect.'),
    where: T('الخطوط الدقيقة حول العين (Crow’s Feet)، والتجاعيد التعبيرية الخفيفة حول الفم، وخطوط الجبهة السطحية، وتحسين نضارة الرقبة — والطبيب يحدد المنطقة والعمق والكمية.',
      'Periorbital lines (crow’s feet), light perioral lines, superficial forehead wrinkles and neck revitalization — the physician selects the area, depth and volume.'),
    expect: T('نقاوة عالية تحد من التورم والاحمرار وتمنح فترة تعافٍ سريعة، بثباتية معلنة ٩–١٢ شهرًا كمدى تقريبي يتفاوت بحسب الحالة — لا وعد بنتيجة ولا ضمان.',
      'A purified formulation that minimizes swelling and downtime, with a declared 9–12 month indicative range that varies by case — no promised outcome and no guarantee.'),
    problem: T('صُمم ReMedium® Fine لاستهداف التجاعيد الدقيقة والطبقات السطحية من الأدمة وتحسين مرونة الجلد. وبفضل تقنية الترابط المتقدمة MDM، يمنح الطبيب حقنًا سلسًا وتجانسًا متكاملًا داخل الأنسجة مع تقليل فرص التورم بعد الإجراء.',
      'ReMedium® Fine is designed for fine lines, superficial dermis corrections, and skin revitalization. Utilising MDM cross-linking technology, it delivers a smooth injection force and uniform tissue integration with minimal swelling.'),
    layer: T('الطبقة السطحية من الأدمة (Superficial Dermis)', 'Superficial dermis'),
    needle: T('إبرة 30G فائقة الدقة', '30G ultra-thin needle'),
    specAreas: T('الخطوط الدقيقة حول العين (Crow’s Feet) · التجاعيد التعبيرية الخفيفة حول الفم · خطوط الجبهة السطحية · تحسين نضارة الرقبة',
      'Periorbital lines (crow’s feet) · perioral superficial lines · forehead fine wrinkles · neck revitalization'),
    adv: [
      [T('اندماج نسيجي متجانس', 'Smooth tissue spread'), T('انتشار مثالي في مناطق الجلد الرقيقة دون تكتلات أو ظهور أثر السائل تحت الجلد.', 'Seamless adaptation to thin skin zones without Tyndall effect.')],
      [T('سلاسة فائقة في الحقن', 'Low extrusion force'), T('قوة ضغط منخفضة تتيح دقة التحكم بالجرعات الدقيقة (Micro-droplets).', 'Consistent glide for micro-droplet accuracy.')],
      [T('فترة تعافٍ سريعة', 'Rapid recovery'), T('نقاوة عالية تحد من التورم والاحمرار وتضمن استعادة المظهر الطبيعي سريعًا.', 'Purified formulation minimizes post-procedure downtime.')],
    ],
    zones: [
      [T('الخطوط حول العين', 'Around the eyes'), T('الخطوط الدقيقة عند الزاوية الخارجية للعين (Crow’s Feet) والخطوط الخفيفة حول الفم.', 'Fine lines at the outer corner of the eye (crow’s feet) and light perioral lines.')],
      [T('خطوط الجبهة', 'Forehead lines'), T('خطوط الجبهة السطحية الناتجة عن تعابير الوجه المتكررة.', 'Superficial forehead wrinkles formed by repeated expression.')],
      [T('الرقبة', 'Neck'), T('تحسين نضارة الرقبة وخطوطها الأفقية الدقيقة.', 'Neck revitalization and its fine horizontal lines.')],
    ],
    dots: [['48%', '30%'], ['50%', '13%'], ['50%', '86%']],
    posts: [T('كم يدوم الفيلر حول العين؟ وما الذي يغيّر المدة؟', 'How long does filler around the eyes last — and what changes that?'),
      T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?')],
  },
  mid: {
    slug: 'mid', name: 'ReMedium Mid', color: 'var(--mid)', swatch: 'mid',
    sub: T('للطبقات المتوسطة والشفاه', 'For mid-dermis & lips'),
    subLong: T('فيلر هيالورونيك أسيد بلزوجة ومرونة متوازنة — للطبقات المتوسطة وتحديد الشفاه وتصحيح الثنايا المعتدلة.',
      'Balanced-viscosity hyaluronic acid filler engineered for medium dermis corrections, lip contouring, and moderate dynamic folds.'),
    areas: T('الشفاه · تحديد الذقن · خطوط الابتسامة', 'Lips · Chin · Nasolabial folds'),
    dur: T('١٢ – ١٨ شهرًا', '12–18 months'), from: 12, to: 18,
    why: T('توازن مثالي بين الرفع والمرونة بتقنية MDM: حجم متناسق مع الحفاظ على التعبير الطبيعي للوجه وحركة الشفاه، وتحكم دقيق في امتصاص الماء يحد من التورم المفرط بعد الإجراء.',
      'An optimal viscoelastic balance powered by MDM: lift capacity with soft natural mobility for expressive areas, and precise hydrophilic control that reduces excessive post-injection swelling.'),
    where: T('الخطوط الأنفية الشفوية (Nasolabial)، وخطوط الابتسامة وزوايا الفم (Marionette)، وتحديد وتعبئة الشفاه، وتجاعيد ما بين الحاجبين — والطبيب يحدد المنطقة والعمق والكمية.',
      'Nasolabial folds, marionette lines and oral commissures, lip augmentation and contouring, and glabella lines — the physician selects the area, depth and volume.'),
    expect: T('ثبات متماسك وتحلل تدريجي يحتفظ بالشكل دون هجرة، بثباتية معلنة ١٢–١٨ شهرًا كمدى تقريبي يتفاوت بحسب الحالة — لا وعد بنتيجة ولا ضمان.',
      'Cohesive shape retention with uniform degradation, at a declared 12–18 month indicative range that varies by case — no promised outcome and no guarantee.'),
    problem: T('طُوّر ReMedium® Mid لملء التجاعيد المتوسطة، وتحديد وتعبئة الشفاه، واستعادة توازن خطوط الوجه التعبيرية بحركة طبيعية وثبات متماسك. يعتمد المنتج على تقنية الترابط المتقدمة MDM ليوفر للطبيب مرونة تشكيل عالية وتجانسًا متوازنًا داخل طبقات الجلد.',
      'ReMedium® Mid is formulated to treat moderate wrinkles, restore localized mid-face contours, and define lips with natural movement and structure. Powered by MDM cross-linking technology, it offers balanced moldability and predictable tissue integration.'),
    layer: T('الطبقة المتوسطة إلى العميقة من الأدمة (Mid to Deep Dermis)', 'Mid to deep dermis'),
    needle: T('إبرة 27G — مناسب للحقن بالإبر أو الكانيولا', '27G needle / cannula compatible'),
    specAreas: T('الخطوط الأنفية الشفوية (Nasolabial Folds) · خطوط الابتسامة وزوايا الفم (Marionette Lines) · تحديد وتعبئة الشفاه · تجاعيد ما بين الحاجبين',
      'Nasolabial folds · marionette lines · lip augmentation/contouring · oral commissures · glabella lines'),
    adv: [
      [T('توازن مثالي بين الرفع والمرونة', 'Optimal viscoelastic balance'), T('يمنح حجمًا متناسقًا مع الحفاظ على التعبير الطبيعي للوجه وحركة الشفاه.', 'Combines lift capacity with soft natural mobility for expressive areas.')],
      [T('تحكم دقيق في امتصاص الماء', 'Precise hydrophilic control'), T('تركيبة منقاة تحد من التورم المفرط الناتج عن جذب السوائل بعد الإجراء.', 'Formulated to reduce excessive post-injection water absorption and unexpected swelling.')],
      [T('ثبات متماسك وتحلل تدريجي', 'Uniform degradation'), T('يحتفظ بشكله وموضعه داخل النسيج دون هجرة طوال فترة بقائه.', 'Retains cohesive shape consistently over the treatment lifespan.')],
    ],
    zones: [
      [T('الشفاه', 'Lips'), T('تحديد الحواف وتعبئة الشفاه بحركة طبيعية وبدرجة يحددها الطبيب.', 'Lip contouring and augmentation with natural movement, to the degree the physician sets.')],
      [T('خطوط الابتسامة', 'Nasolabial folds'), T('الخطوط الأنفية الشفوية الممتدة من الأنف إلى زاويتي الفم.', 'The folds running from the nose to the corners of the mouth.')],
      [T('زوايا الفم وما بين الحاجبين', 'Marionette & glabella'), T('خطوط الماريونيت وزوايا الفم، وتجاعيد ما بين الحاجبين.', 'Marionette lines, oral commissures and glabella lines.')],
    ],
    dots: [['50%', '58%'], ['50%', '72%'], ['38%', '62%']],
    posts: [T('كم يدوم فيلر الشفاه؟ وما الذي يغيّر المدة؟', 'How long does lip filler last — and what changes that?'),
      T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?')],
  },
  'sub-q': {
    slug: 'sub-q', name: 'ReMedium Sub-Q', color: 'var(--subq)', swatch: 'subq',
    sub: T('للبناء الحجمي العميق والنحت', 'For deep contouring & volume'),
    subLong: T('فيلر هيالورونيك أسيد عالي اللزوجة والمرونة — للبناء الحجمي العميق وتحديد الملامح ونحت زوايا الوجه.',
      'High-viscoelasticity hyaluronic acid filler engineered for deep tissue projection, structural contouring, and volume restoration.'),
    areas: T('الوجنتان · الصدغان · استعادة حجم الذقن · نحت خط الفك', 'Cheeks · Temples · Chin · Jawline contouring'),
    dur: T('١٨ – ٢٤ شهرًا', '18–24 months'), from: 18, to: 24,
    why: T('قوة رفع وتشكيل فائقة (High G′) بتقنية الترابط الكثيفة MDM: دعم هيكلي بارز وثابت للملامح دون هبوط، ومصفوفة هلامية مترابطة تمنع هجرة المادة وتحافظ على حواف التحديد واضحة.',
      'High structural lifting (high G′) from dense MDM cross-linking: robust mechanical support and distinct projection without displacement, with a cohesive elastic matrix that prevents migration and holds sharp definition.'),
    where: T('تعبئة ونحت الوجنتين، وإبراز وتحديد الذقن، ونحت خط وزاوية الفك (Jawline)، ومنطقة الصدغين، وتصحيح ضمور الأنسجة العميق — والطبيب يحدد المنطقة والعمق والكمية.',
      'Malar (cheekbone) augmentation, chin projection, mandibular angle and jawline definition, temples, and deep structural corrections — the physician selects the area, depth and volume.'),
    expect: T('ديمومة سريرية ممتدة بتحلل بطيء ومتجانس، بثباتية معلنة ١٨–٢٤ شهرًا كمدى تقريبي يتفاوت بحسب الحالة — لا وعد بنتيجة ولا ضمان.',
      'Extended clinical durability through uniform, controlled degradation, at a declared 18–24 month indicative range that varies by case — no promised outcome and no guarantee.'),
    problem: T('صُمم ReMedium® Sub-Q لاستعادة الأحجام المفقودة وبناء الهيكل النسيجي العميق للوجه. وبفضل تقنية الترابط الكثيفة MDM، يوفر المنتج قوة رفع ميكانيكية استثنائية (G-prime) ومرونة عالية تضمن ثبات الحجم ومقاومة قوى الضغط النسيجي.',
      'ReMedium® Sub-Q is formulated for profound volumetric augmentation and structural facial framing. Utilizing dense MDM cross-linking technology, it delivers strong G-prime elasticity, high lifting capacity, and reliable resistance to tissue deformation.'),
    layer: T('الطبقة العميقة تحت الجلد وفوق مستوى العظم مباشرة (Deep Subcutaneous / Supraperiosteal)', 'Deep subcutaneous / pre-periosteal layer (above bone level)'),
    needle: T('كانيولا أو إبرة 25G – 27G', '25G–27G cannula / needle'),
    specAreas: T('تعبئة ونحت الوجنتين (Cheekbones) · إبراز وتحديد الذقن · نحت خط وزاوية الفك (Jawline Definition) · منطقة الصدغين · تصحيح ضمور الأنسجة العميق',
      'Malar area (cheekbones) · chin augmentation · mandibular angle & jawline definition · temples · deep structural facial defects'),
    adv: [
      [T('قوة رفع وتشكيل فائقة (High G′)', 'High structural lifting (high G′)'), T('يمنح دعمًا هيكليًا بارزًا وثابتًا للملامح دون هبوط أو ترهل.', 'Provides robust mechanical support and distinct projection without displacement.')],
      [T('تماسك جزيئي قوي', 'Cohesive elastic matrix'), T('مصفوفة هلامية مترابطة تمنع هجرة المادة وتحافظ على حواف التحديد واضحة.', 'Dense particle integration prevents product migration and holds sharp definition.')],
      [T('ديمومة سريرية ممتدة', 'Extended clinical durability'), T('تحلل بطيء ومتجانس يضمن استمرار الامتلاء والنتائج لفترات طويلة.', 'Retains volume and structural integrity through uniform, controlled degradation.')],
    ],
    zones: [
      [T('الوجنتان', 'Cheeks (malar)'), T('تعبئة ونحت الوجنتين واستعادة حجم منتصف الوجه.', 'Malar augmentation and mid-face volume restoration.')],
      [T('الذقن والصدغان', 'Chin & temples'), T('إبراز وتحديد الذقن، وتعويض الفراغ في منطقة الصدغين.', 'Chin projection and definition, and temple hollow correction.')],
      [T('خط الفك', 'Jawline'), T('نحت خط وزاوية الفك من الذقن إلى الأذن.', 'Mandibular angle and jawline definition from chin to ear.')],
    ],
    dots: [['24%', '52%'], ['72%', '64%'], ['50%', '72%']],
    posts: [T('نحت خط الفك: ماذا يفعل الفيلر وماذا لا يفعل؟', 'Jawline contouring: what filler does — and what it doesn’t'),
      T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?')],
  },
});

export const miniProduct = (ctx, p) => `
<a class="mini-product" href="${ctx.u('brands/remedium/' + p.slug)}">
  <span class="swatch swatch--${p.swatch}"></span>
  <span class="mini-product__body"><b class="lat" dir="ltr">${p.name}</b><span>${p.areas}</span></span>
  <span class="mini-product__dur">${p.dur}<small>${ctx.T('ثبات النتيجة', 'longevity')}</small></span>
</a>`;

export const productCard = (ctx, p) => `
<div class="card card--soft product-card">
  <div class="product-card__head">
    <span class="swatch swatch--${p.swatch}"></span>
    <b class="product-card__name" dir="ltr">${p.name}</b>
    ${chip(p.sub)}
  </div>
  <p>${p.areas}</p>
  ${durBar(ctx, p.dur, p.from, p.to, p.color)}
  <a class="go" href="${ctx.u('brands/remedium/' + p.slug)}">${ctx.T('بطاقة المنتج', 'Product page')} ${I.arrow(13)}</a>
</div>`;

export const ACCRED = (T) => [
  ['SFDA', T('تسجيل الغذاء والدواء السعودية', 'Saudi FDA approval')],
  ['MFDS', T('اعتماد الرقابة الكورية', 'Korean regulatory clearance')],
  ['GMP', T('ممارسات التصنيع الجيد', 'Good manufacturing standards')],
  ['MDSAP', T('التدقيق الدولي الموحد', 'Multi-country audit approval')],
  ['ISO 13485', T('إدارة جودة الأجهزة الطبية', 'Medical devices quality system')],
  ['CE', T('المطابقة الأوروبية', 'European conformity')],
];

export const accredStrip = (ctx) => `
<div class="grid" style="grid-template-columns:repeat(6,minmax(0,1fr));gap:12px">
  ${ACCRED(ctx.T).map(([b, s]) => `
  <a href="${ctx.u('quality/certifications')}" style="display:flex;flex-direction:column;gap:4px;padding:16px 12px;background:#fff;border:1px solid var(--line);border-radius:16px;text-align:center">
    <b class="lat" dir="ltr" style="font-size:14.5px;font-weight:800;color:var(--green-900)">${b}</b>
    <span style="font-size:10px;line-height:1.5;color:var(--muted)">${s}</span>
  </a>`).join('')}
</div>`;

// Copy source: client deck (Aug 2026) — criterion / regulated channel / unregulated sources
export const COMPARE_ROWS = (T) => [
  [T('تسجيل المنتج', 'Product Registration'),
    T('ملف منتج مسجّل ومعتمد لدى الهيئة (SFDA)', 'Registered & approved by SFDA'),
    T('غير مسجّل أو بضائع سوق موازية', 'Unregistered / grey-market stock')],
  [T('تتبّع التشغيلة', 'Traceability'),
    T('رقم تشغيلة قابل للتتبّع المباشر حتى المصنع', 'Batch number traceable to the manufacturer'),
    T('تعذّر تتبّع المصدر أو مسار الشحنة', 'Untraceable origin & custody')],
  [T('المسؤولية القانونية', 'Accountability'),
    T('جهة مسؤولة ومعتمدة نظاميًا عند أي طارئ', 'Designated legal entity accountable for quality'),
    T('غياب أي جهة مسؤولة نظاميًا', 'No identifiable liability')],
  [T('إجراء الاستدعاء', 'Product Recall'),
    T('إجراء استدعاء موثّق ومعتمد لحماية المرضى', 'Documented, systematic recall procedure'),
    T('انعدام آلية الاستدعاء عند وجود خلل', 'No recall path or patient protection')],
  [T('ظروف التخزين', 'Storage Conditions'),
    T('تخزين مراقب وموثّق في مستودع مرّخص', 'Monitored, licensed warehousing (< 25°C)'),
    T('ظروف حفظ مجهولة وغير خاضعة للرقابة', 'Unmonitored & compromised storage')],
  [T('المستندات والفوترة', 'Official Paperwork'),
    T('فاتورة ضريبية نظامية ومستندات رسمية كاملة', 'Certified tax invoice & regulatory files'),
    T('غياب الفواتير الضريبية والمستندات', 'Missing or unverified documents')],
  [T('الدعم والتدريب', 'Technical Support'),
    T('دعم فني، تدريب سريري، وتحديثات المصنّع', 'Clinical training & manufacturer updates'),
    T('ينتهي التعامل بمجرد تسليم العبوة', 'None once the unit is handed over')],
];

export const compareTable = (ctx) => `
<div class="compare">
  <div class="row row--head">
    <span>${ctx.T('معيار المقارنة', 'Criteria')}</span>
    <span class="us">${ctx.T('القناة النظامية', 'The regulated channel')}<em>${ctx.T('جذور الجمال', 'Beauty Roots')}</em></span>
    <span>${ctx.T('التوريد غير النظامي', 'Unregulated sources')}</span>
  </div>
  ${COMPARE_ROWS(ctx.T).map(([crit, us, them]) => `
  <div class="row">
    <span class="crit">${crit}</span>
    <span class="us"><i class="mark mark--yes">${I.check(12)}</i>${us}</span>
    <span class="them"><i class="mark mark--no">${I.xmark(11)}</i>${them}</span>
  </div>`).join('')}
</div>`;

/* ---------- header / crumbs / hero / footer ---------- */
export const NAV = (ctx) => [
  { label: ctx.T('الرئيسية', 'Home'), href: ctx.u(''), key: 'home' },
  {
    label: ctx.T('عن الشركة', 'Company'), key: 'company', items: [
      [ctx.T('عن جذور الجمال', 'About Beauty Roots'), ctx.u('company/about')],
      [ctx.T('الهوية النظامية والتراخيص', 'Legal Identity & Licences'), ctx.u('company/identity')],
      [ctx.T('تواصل معنا', 'Contact Us'), ctx.u('company/contact')],
    ],
  },
  {
    label: ctx.T('العلامات والمنتجات', 'Brands & Products'), key: 'brands', items: [
      [ctx.T('كل العلامات', 'All brands'), ctx.u('brands')],
      [ctx.T('ReMedium — وكالة حصرية', 'ReMedium — exclusive agency'), ctx.u('brands/remedium')],
      ['ReMedium Fine', ctx.u('brands/remedium/fine')],
      ['ReMedium Mid', ctx.u('brands/remedium/mid')],
      ['ReMedium Sub-Q', ctx.u('brands/remedium/sub-q')],
      ['HA Filler', ctx.u('brands/ha-filler')],
      [ctx.T('العناية بالبشرة ↗', 'Skincare ↗'), ctx.u('brands') + '#skincare-external'],
    ],
  },
  {
    label: ctx.T('الجودة والالتزام', 'Quality & Compliance'), key: 'quality', items: [
      [ctx.T('الالتزام واليقظة', 'Compliance & Vigilance'), ctx.u('quality/compliance')],
      [ctx.T('سلسلة الإمداد والتخزين والتوزيع', 'Supply Chain, Storage & Distribution'), ctx.u('quality/supply')],
      [ctx.T('الشهادات والاعتمادات', 'Certifications & Accreditations'), ctx.u('quality/certifications')],
    ],
  },
  {
    label: ctx.T('المعلومات الطبية', 'Medical Information'), key: 'medical', items: [
      [ctx.T('بوابة القسم الطبي', 'Medical section gate'), ctx.u('medical')],
      [ctx.T('نموذج الخدمة والشروط التجارية', 'Service Model & Commercial Terms'), ctx.u('medical/service-model')],
      [ctx.T('الأدلة المخبرية وبروتوكولات الحقن', 'Laboratory Evidence & Protocols'), ctx.u('medical/evidence')],
      [ctx.T('معرض النتائج السريرية', 'Clinical Results Gallery'), ctx.u('medical/results')],
      [ctx.T('طلب عرض سعر', 'Request a Quote'), ctx.u('medical/quote')],
    ],
  },
  { label: ctx.T('مركز المعرفة', 'Knowledge'), href: ctx.u('knowledge'), key: 'knowledge' },
];

export const header = (ctx, active, altHref) => `
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
          <a class="nav__link${item.key === active ? ' is-active' : ''}" href="${item.href ?? item.items[0][1]}">${item.label}${item.items ? I.chev() : ''}</a>
          ${item.items ? `<div class="dropdown">${item.items.map(([l, h]) => `<a href="${h}">${l}</a>`).join('')}</div>` : ''}
        </li>`).join('')}
      </ul>
    </nav>
    <div class="header__actions">
      ${btn(ctx.T('طلب عرض سعر', 'Request a Quote'), ctx.u('medical/quote'), 'dark', I.arrow(14))}
      <a class="wa-btn" href="${WA}" target="_blank" rel="noopener">${I.wa(17)}${ctx.T('واتساب', 'WhatsApp')}</a>
      <a class="lang-pill" href="${altHref}" lang="${ctx.L === 'ar' ? 'en' : 'ar'}" dir="${ctx.L === 'ar' ? 'ltr' : 'rtl'}">${ctx.T('EN', 'عربي')}</a>
      <button class="burger" aria-label="${ctx.T('القائمة', 'Menu')}"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;

export const crumbs = (ctx, parts) => `
<div class="crumbs">
  ${parts.map((p, i) => i === parts.length - 1
    ? `<span class="here">${p[0]}</span>`
    : `<a href="${p[1]}">${p[0]}</a><span class="sep">${ctx.L === 'ar' ? '←' : '→'}</span>`).join('')}
</div>`;

export const pageHero = (ctx, crumbList, title, lead, extra = '') => `
<section class="page-hero"><div class="container"><div class="page-hero__inner">
  ${crumbs(ctx, crumbList)}
  <h1 class="page-title">${title}</h1>
  ${lead ? `<p class="page-hero__lead">${lead}</p>` : ''}
  ${extra}
</div></div></section>`;

export const footer = (ctx) => `
<footer class="site-footer"><div class="container">
  <div class="site-footer__top">
    <div class="site-footer__about">
      <a class="logo" href="${ctx.u('')}">
        <span class="logo__mark">${I.leaf(16)}</span>
        <span class="logo__text"><b>${ctx.T('جذور الجمال', 'Beauty Roots')}</b><i class="lat">${ctx.T('BEAUTY ROOTS', 'جذور الجمال')}</i></span>
      </a>
      <p>${ctx.T('استيراد وتوزيع منتجات التجميل الطبي والأجهزة الطبية ومستحضرات العناية بالبشرة — بتراخيص الهيئة العامة للغذاء والدواء.',
        'Import and distribution of medical aesthetics, medical devices and skincare — licensed by the Saudi Food & Drug Authority.')}</p>
      <ul>
        <li>${I.pin(15)}<span>${ctx.T('شارع حضرموت، حي الخليج، الرياض 13223 — المملكة العربية السعودية', 'Hadhramaut St., Al Khaleej Dist., Riyadh 13223 — Saudi Arabia')}</span></li>
        <li>${I.phone(15)}<span><span class="lat" dir="ltr">+966 56 201 7170</span> — ${ctx.T('جوال / واتساب', 'Mobile / WhatsApp')}</span></li>
        <li>${I.mail(15)}<span class="lat" dir="ltr">sales@beautyrooots.com</span></li>
      </ul>
    </div>
    <div class="site-footer__links">
      <h5>${ctx.T('روابط سريعة', 'Quick links')}</h5>
      <ul>
        <li><a href="${ctx.u('company/about')}">${ctx.T('عن جذور الجمال', 'About Beauty Roots')}</a></li>
        <li><a href="${ctx.u('brands/remedium')}">${ctx.T('ReMedium — الوكالة الحصرية', 'ReMedium — exclusive agency')}</a></li>
        <li><a href="${ctx.u('quality/compliance')}">${ctx.T('الجودة والالتزام', 'Quality & Compliance')}</a></li>
        <li><a href="${ctx.u('quality/certifications')}">${ctx.T('الشهادات والاعتمادات', 'Certifications')}</a></li>
        <li><a href="${ctx.u('knowledge')}">${ctx.T('مركز المعرفة', 'Knowledge Center')}</a></li>
        <li><a href="${ctx.u('company/contact')}">${ctx.T('تواصل معنا', 'Contact Us')}</a></li>
      </ul>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px">
      <a class="cta-box" href="${ctx.u('medical/quote')}">
        <span class="tag">${ctx.T('للمنشآت الصحية', 'FOR FACILITIES')}</span>
        <strong>${ctx.T('طلب عرض سعر رسمي', 'Request an official quote')}</strong>
        <p>${ctx.T('نموذج واحد — وفريق المبيعات يتواصل ويكمل التفاصيل.', 'One form — the sales team follows up and completes the details.')}</p>
        <i>${I.arrow(13)}</i>
      </a>
      <a class="cta-box cta-box--alt" href="${WA}" target="_blank" rel="noopener">
        <span class="tag">${ctx.T('لمن يستعجل', 'IN A HURRY?')}</span>
        <strong>${ctx.T('واتساب مباشر', 'Direct WhatsApp')}</strong>
        <p>${ctx.T('قناة الطلب الأولى — زيارة المندوب تُرتَّب بموعد لجميع المناطق.', 'The primary ordering channel — rep visits are arranged by appointment, all regions.')}</p>
        <i>${I.wa(15)}</i>
      </a>
    </div>
  </div>
  <div class="site-footer__bottom">
    <p>© <span data-year>2026</span> ${ctx.T('شركة جذور الجمال للتجارة — س.ت', 'Beauty Roots Trading Co. — CR')} <span class="lat" dir="ltr">1010909714</span> · ${ctx.T('الرقم الضريبي', 'VAT')} <span class="lat" dir="ltr">311755763600003</span></p>
    <ul>
      <li><a href="${ctx.u('legal/privacy')}">${ctx.T('سياسة الخصوصية', 'Privacy Policy')}</a></li>
      <li><a href="${ctx.u('legal/terms')}">${ctx.T('شروط الاستخدام', 'Terms of Use')}</a></li>
      <li><a href="${ctx.u('legal/medical-disclaimer')}">${ctx.T('إخلاء المسؤولية الطبية', 'Medical Disclaimer')}</a></li>
    </ul>
  </div>
</div></footer>`;

const FONTS = {
  ar: 'https://fonts.googleapis.com/css2?family=Cairo:wght@700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Archivo:wght@600;700;800&display=swap',
  en: 'https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap',
};

export const shell = (ctx, page) => `<!DOCTYPE html>
<html lang="${ctx.L}" dir="${ctx.L === 'ar' ? 'rtl' : 'ltr'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} — ${ctx.T('جذور الجمال | Beauty Roots', 'Beauty Roots | جذور الجمال')}</title>
  <meta name="description" content="${page.desc}">
  <link rel="alternate" hreflang="${ctx.L}" href="${page.self}">
  <link rel="alternate" hreflang="${ctx.L === 'ar' ? 'en' : 'ar'}" href="${page.alt}">
  <link rel="alternate" hreflang="x-default" href="${ctx.L === 'ar' ? page.alt : page.self}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="${FONTS[ctx.L]}">
  <link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
${header(ctx, page.active, page.alt)}
<main>
${page.body}
</main>
${footer(ctx)}
<script src="/assets/js/site.js"></script>
</body>
</html>
`;
