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

/* ---------- localized product data ---------- */
export const products = ({ T }) => ({
  fine: {
    slug: 'fine', name: 'ReMedium Fine', color: 'var(--fine)', swatch: 'fine',
    sub: T('للخطوط الدقيقة', 'For fine lines'),
    subLong: T('للخطوط الدقيقة — حول العين والجبهة والرقبة', 'For fine lines — around the eyes, forehead and neck'),
    areas: T('الخطوط حول العين · خطوط الجبهة · خطوط الرقبة', 'Lines around the eyes · forehead lines · neck lines'),
    dur: T('٩ – ١٢ شهرًا', '9–12 months'), from: 9, to: 12,
    why: T('جل أحادي الطور خفيف القوام، ينساب بتوزيع متساوٍ تحت الجلد فيصحّح الخط دون أن يغيّر ملامح المنطقة.',
      'A light monophasic gel that flows evenly under the skin — correcting the line without changing the character of the area.'),
    where: T('الخطوط حول العين · خطوط الجبهة · خطوط الرقبة — يختار الطبيب المنطقة والعمق والكمية المناسبة لكل حالة.',
      'Lines around the eyes · forehead lines · neck lines — the physician selects the area, depth and volume for each case.'),
    expect: T('ثباتية النتيجة ٩–١٢ شهرًا كمدى معلن — لا وعد بنتيجة ولا ضمان، والقرار النهائي مع طبيبك المرخّص.',
      'Result longevity of 9–12 months is a declared range — no promised outcome and no guarantee; the final decision rests with your licensed physician.'),
    problem: T('الخطوط الرقيقة تحتاج جلًا خفيف القوام يندمج مع الجلد دون أن يُثقل الملامح. Fine هو أخفّ كثافات التشكيلة، مصمَّم للمناطق التي يظهر فيها أي فائض.',
      'Fine lines call for a light gel that blends with the skin without weighing features down. Fine is the lightest density in the range, designed for areas where any excess shows.'),
    zones: [
      [T('الخطوط حول العين', 'Around the eyes'), T('شبكة الخطوط الرقيقة عند الزاوية الخارجية للعين.', 'The network of fine lines at the outer corner of the eye.')],
      [T('خطوط الجبهة', 'Forehead lines'), T('الخطوط الأفقية الناتجة عن تعابير الوجه المتكررة.', 'Horizontal lines formed by repeated facial expressions.')],
      [T('خطوط الرقبة', 'Neck lines'), T('الخطوط الأفقية الدقيقة على امتداد الرقبة.', 'The fine horizontal lines along the neck.')],
    ],
    dots: [['48%', '30%'], ['50%', '13%'], ['50%', '86%']],
    posts: [T('كم يدوم الفيلر حول العين؟ وما الذي يغيّر المدة؟', 'How long does filler around the eyes last — and what changes that?'),
      T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?')],
  },
  mid: {
    slug: 'mid', name: 'ReMedium Mid', color: 'var(--mid)', swatch: 'mid',
    sub: T('للملامح المتوسطة', 'For mid-face features'),
    subLong: T('للملامح المتوسطة — الشفاه والذقن وخطوط الابتسامة', 'For mid-face features — lips, chin and smile lines'),
    areas: T('الشفاه · الذقن · خطوط الابتسامة', 'Lips · chin · smile lines'),
    dur: T('١٢ – ١٨ شهرًا', '12–18 months'), from: 12, to: 18,
    why: T('كثافة متوسطة تمنح الملامح تحديدًا متوازنًا: دعم كافٍ للشكل مع قوام يبقى طبيعيًا في الحركة والتعبير.',
      'A medium density that gives features balanced definition: enough structural support, with a texture that stays natural in movement and expression.'),
    where: T('الشفاه · الذقن · خطوط الابتسامة — يختار الطبيب المنطقة والعمق والكمية المناسبة لكل حالة.',
      'Lips · chin · smile lines — the physician selects the area, depth and volume for each case.'),
    expect: T('ثباتية النتيجة ١٢–١٨ شهرًا كمدى معلن — لا وعد بنتيجة ولا ضمان، والقرار النهائي مع طبيبك المرخّص.',
      'Result longevity of 12–18 months is a declared range — no promised outcome and no guarantee; the final decision rests with your licensed physician.'),
    problem: T('ملامح منتصف الوجه تحتاج توازنًا بين التحديد والليونة. Mid هو الكثافة الوسطى في التشكيلة، مصمَّم للشفاه والذقن وخطوط الابتسامة.',
      'Mid-face features need a balance of definition and softness. Mid is the middle density in the range, designed for the lips, chin and smile lines.'),
    zones: [
      [T('الشفاه', 'Lips'), T('تحديد الحواف والامتلاء بدرجة يحددها الطبيب.', 'Edge definition and volume, to the degree the physician sets.')],
      [T('الذقن', 'Chin'), T('تحديد شكل الذقن وموازنة الملامح.', 'Shaping the chin and balancing the features.')],
      [T('خطوط الابتسامة', 'Smile lines'), T('الخطوط الممتدة من الأنف إلى زاويتي الفم.', 'The lines running from the nose to the corners of the mouth.')],
    ],
    dots: [['50%', '58%'], ['50%', '72%'], ['38%', '62%']],
    posts: [T('كم يدوم فيلر الشفاه؟ وما الذي يغيّر المدة؟', 'How long does lip filler last — and what changes that?'),
      T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?')],
  },
  'sub-q': {
    slug: 'sub-q', name: 'ReMedium Sub-Q', color: 'var(--subq)', swatch: 'subq',
    sub: T('للتحجيم العميق والنحت', 'For deep volumising & contouring'),
    subLong: T('للتحجيم العميق والنحت — الخدود والأصداغ وخط الفك', 'For deep volumising and contouring — cheeks, temples and jawline'),
    areas: T('الخدود · الأصداغ · الذقن · خط الفك (Jawline)', 'Cheeks · temples · chin · jawline'),
    dur: T('١٨ – ٢٤ شهرًا', '18–24 months'), from: 18, to: 24,
    why: T('أعلى كثافات التشكيلة: قوام داعم للتحجيم العميق ونحت الملامح، بثباتية هي الأطول في التشكيلة.',
      'The highest density in the range: a supportive texture for deep volumising and contouring, with the longest longevity in the line.'),
    where: T('الخدود · الأصداغ · الذقن · خط الفك — يختار الطبيب المنطقة والعمق والكمية المناسبة لكل حالة.',
      'Cheeks · temples · chin · jawline — the physician selects the area, depth and volume for each case.'),
    expect: T('ثباتية النتيجة ١٨–٢٤ شهرًا كمدى معلن — لا وعد بنتيجة ولا ضمان، والقرار النهائي مع طبيبك المرخّص.',
      'Result longevity of 18–24 months is a declared range — no promised outcome and no guarantee; the final decision rests with your licensed physician.'),
    problem: T('استعادة الحجم ونحت الملامح يحتاجان قوامًا داعمًا يثبت في العمق. Sub-Q هو أعلى كثافات التشكيلة، مصمَّم للخدود والأصداغ وخط الفك.',
      'Restoring volume and contouring features call for a supportive texture that holds at depth. Sub-Q is the highest density in the range, designed for the cheeks, temples and jawline.'),
    zones: [
      [T('الخدود', 'Cheeks'), T('استعادة الحجم في منتصف الوجه.', 'Restoring mid-face volume.')],
      [T('الأصداغ', 'Temples'), T('تعويض الفراغ في منطقة الصدغين.', 'Compensating hollowness in the temple area.')],
      [T('خط الفك', 'Jawline'), T('تحديد الخط الممتد من الذقن إلى الأذن.', 'Defining the line running from the chin to the ear.')],
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
  ['CE', T('المطابقة الأوروبية', 'European conformity')],
  ['ISO 13485', T('جودة تصنيع الأجهزة الطبية', 'Medical-device quality system')],
  ['MDSAP', T('تدقيق موحّد متعدد الجهات', 'Multi-authority single audit')],
  ['GMP', T('ممارسات التصنيع الجيد', 'Good manufacturing practice')],
  ['MFDS', T('ترخيص بلد المنشأ', 'Country-of-origin licence')],
  ['SFDA', T('شرط التداول في المملكة', 'Required for KSA circulation')],
];

export const accredStrip = (ctx) => `
<div class="grid" style="grid-template-columns:repeat(6,minmax(0,1fr));gap:12px">
  ${ACCRED(ctx.T).map(([b, s]) => `
  <a href="${ctx.u('quality/certifications')}" style="display:flex;flex-direction:column;gap:4px;padding:16px 12px;background:#fff;border:1px solid var(--line);border-radius:16px;text-align:center">
    <b class="lat" dir="ltr" style="font-size:14.5px;font-weight:800;color:var(--green-900)">${b}</b>
    <span style="font-size:10px;line-height:1.5;color:var(--muted)">${s}</span>
  </a>`).join('')}
</div>`;

export const COMPARE_ROWS = (T) => [
  T('ملف منتج مسجّل ومعتمد لدى الهيئة', 'A product file registered and approved with the SFDA'),
  T('رقم تشغيلة قابل للتتبّع حتى المصنع', 'A lot number traceable back to the factory'),
  T('جهة مسؤولة محددة عند وقوع مشكلة', 'A named responsible party when something goes wrong'),
  T('إجراء استدعاء موثّق', 'A documented recall procedure'),
  T('ظروف تخزين مراقبة وموثقة', 'Monitored, documented storage conditions'),
  T('فاتورة ضريبية ومستندات رسمية', 'A tax invoice and official documents'),
  T('دعم فني وتحديثات من المصنّع', 'Technical support and manufacturer updates'),
];

export const compareTable = (ctx) => `
<div class="compare">
  <div class="row row--head">
    <span>${ctx.T('البند', 'Item')}</span>
    <span class="us">${ctx.T('القناة النظامية', 'The regulated channel')}<em>${ctx.T('جذور الجمال', 'Beauty Roots')}</em></span>
    <span>${ctx.T('التوريد غير النظامي', 'Unregulated supply')}</span>
  </div>
  ${COMPARE_ROWS(ctx.T).map((t) => `
  <div class="row">
    <span class="crit">${t}</span>
    <span class="us"><i class="mark mark--yes">${I.check(12)}</i>${ctx.T('متوفر', 'Provided')}</span>
    <span class="them"><i class="mark mark--no">${I.xmark(11)}</i>${ctx.T('غير متوفر', 'Not provided')}</span>
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
