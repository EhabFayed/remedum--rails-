// Company, Quality, Medical, Knowledge and Legal pages — bilingual.
import {
  I, ph, chip, secHead, btn, noteStrip, darkStrip,
  compareTable, crumbs, pageHero, WA,
} from './lib.mjs';

export default function pagesB(ctx) {
  const { T, u } = ctx;
  const pages = [];
  const add = (path, title, desc, active, body) => pages.push({ path, title, desc, active, body });

  const listRow = (ic, t, d) => `
<li class="list-row">
  <span class="icon-tile icon-tile--sm" style="width:38px;height:38px">${ic}</span>
  <div><b>${t}</b><span>${d}</span></div>
</li>`;

  /* ============================================================
     ABOUT — company/about
  ============================================================ */
  add('company/about',
    T('عن جذور الجمال', 'About Beauty Roots'),
    T('شركة سعودية في الرياض متخصصة في استيراد وتوزيع منتجات التجميل الطبي والأجهزة الطبية ومستحضرات العناية بالبشرة.', 'A Saudi company in Riyadh specialised in importing and distributing medical aesthetics, medical devices and advanced skincare.'),
    'company', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الشركة', 'Company'), u('company/about')], [T('عن جذور الجمال', 'About Beauty Roots')]],
    T('عن جذور الجمال', 'About Beauty Roots'),
    T('شركة سعودية تأسست في الرياض، متخصصة في استيراد وتوزيع منتجات التجميل الطبي والأجهزة الطبية ومستحضرات العناية المتقدمة بالبشرة — وكيل معتمد وموزّع لعلامات عالمية متميّزة في السوق السعودي.',
      'A Saudi company founded in Riyadh, specialised in importing and distributing medical aesthetics, medical devices and advanced skincare — an authorised agent and distributor for distinguished global brands in the Saudi market.'))}

<section class="section"><div class="container">
  <div class="hero-split" style="grid-template-columns:.72fr 1.28fr;margin-bottom:40px">
    <div class="arch-media arch-media--soft">
      <img src="/assets/img/team.jpg" alt="${T('فريق العمل', 'Our team')}" style="height:420px">
      <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصور المنشأة', 'Placeholder — to be replaced by company photography')}</span>
    </div>
    <div>
      ${secHead(T('من نحن', 'Who we are'), T('سلسلة إمداد مملوكة ومُدارة بالكامل', 'A fully owned and managed supply chain'))}
      <p style="margin-top:-18px;font-size:14px;line-height:2.1;color:var(--muted)">${T(
      'نخدم العيادات والأطباء والصيدليات ومراكز العناية بالبشرة ومنافذ بيع منتجات التجميل، عبر سلسلة إمداد تبدأ من المصانع العالمية، وتستقر في مستودعنا المرخّص بالرياض، ثم تصل إلى المستفيد النهائي وفق سلاسل الإمداد المعتمدة من الهيئة العامة للغذاء والدواء. نتعامل مع كل منشأة كشريك في مسؤولية كل منتج يُستخدم — لا كنقطة بيع.',
      'We serve clinics, physicians, pharmacies, skincare centres and beauty retailers through a supply chain that starts at global factories, settles in our licensed Riyadh warehouse, and reaches the end user via SFDA-approved supply channels. We treat every facility as a partner in the responsibility for every product used — not as a point of sale.')}</p>
    </div>
  </div>
  <div class="grid grid-2" style="gap:14px">
    ${[
      [T('الركيزة الأولى — الالتزام الكامل بالهيئة', 'Pillar one — full SFDA compliance'), T('تسجيل المنتجات، وتراخيص المنشأة والمستودع، واشتراطات الاستيراد والتخزين والتداول والإعلان. هذا الالتزام هو الضمانة التي تجعل الشراء منّا قرارًا آمنًا مستندًا إلى وثائق.', 'Product registration, facility and warehouse licensing, and the requirements for import, storage, circulation and advertising. That compliance is the guarantee that makes buying from us a safe, document-backed decision.'), 'card--mint'],
      [T('الركيزة الثانية — اختيار المنتجات بعناية', 'Pillar two — carefully chosen products'), T('نختار ما ندخله إلى محفظتنا وفق معايير جودة وسلامة صارمة، ومن مصانع مؤهلة وموثّقة. لا نوسّع المحفظة لمجرد التوسّع؛ نضيف ما نستطيع الوقوف خلفه.', 'We admit products to our portfolio against strict quality and safety criteria, from qualified, documented factories. We don’t grow the portfolio for its own sake; we add what we can stand behind.'), ''],
    ].map(([t, d, mod]) => `
    <div class="card ${mod}" style="padding:24px 26px">
      <h4 class="card__title" style="color:var(--green-900)">${t}</h4>
      <p style="font-size:13px;line-height:2">${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="grid grid-2">
    ${[
      [T('الرؤية', 'Vision'), T('أن نكون المرجع الأكثر ثقةً واطمئنانًا لدى العيادات والصيدليات ومراكز بيع منتجات التجميل في المملكة عند اختيار المنتجات والأجهزة التي تُستخدم على عملائها — بمعيار ثابت من الدقة في الالتزام والأمان.', 'To be the most trusted reference for clinics, pharmacies and beauty retailers in the Kingdom when choosing the products and devices used on their clients — with a constant standard of regulatory precision and safety.')],
      [T('الرسالة', 'Mission'), T('أن نوفّر للسوق السعودي تشكيلات تجميل طبي وعناية بالبشرة مثبتة علميًا ومختارة بعناية من مصانع مؤهلة، وأن نوصلها بجودة عالية وسلسلة إمداد ملتزمة بمتطلبات الهيئة، مع دعم فني ومعرفي يرافق الكادر الطبي قبل الاستخدام وبعده.', 'To bring the Saudi market scientifically proven, carefully selected medical-aesthetics and skincare ranges from qualified factories — delivered at high quality through an SFDA-compliant supply chain, with technical and educational support accompanying medical staff before and after use.')],
    ].map(([t, d]) => `<div class="dark-strip" style="padding:32px 34px"><h3>${t}</h3><p style="line-height:2.1">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('قيمنا الأربع', 'Our four values'), T('كما ترد في الملف — دون تجميل', 'Exactly as stated in the profile'))}
  <div class="grid grid-4">
    ${[
      [T('الالتزام أولًا', 'Compliance first'), T('لا يدخل أي منتج إلى السوق قبل استيفاء متطلبات الهيئة كاملة — لا استثناءات ولا تسريع على حساب المستندات.', 'No product enters the market before its SFDA requirements are fully met — no exceptions, no shortcuts at the expense of documentation.')],
      [T('الوضوح التام', 'Complete clarity'), T('نقول ما هو معتمد وما هو قيد الإجراء كما هو تمامًا. المعلومة الدقيقة جزء من المنتج، لا إضافة عليه.', 'We state what is approved and what is in progress exactly as it is. Accurate information is part of the product, not an add-on.')],
      [T('جودة سلسلة الإمداد', 'Supply-chain quality'), T('مصانع ومصادر بمستوى عالٍ من الجودة، بسلاسل مطابقة لمتطلبات الهيئة وللاشتراطات العالمية.', 'High-grade factories and sources, with chains that meet SFDA requirements and recognised international standards.')],
      [T('الشراكة طويلة الأمد', 'Long-term partnership'), T('علاقة تمتد لسنوات مع كل عيادة وصيدلية ومركز — تنمو بالثقة والخدمة، لا صفقة عابرة.', 'A years-long relationship with every clinic, pharmacy and centre — grown on trust and service, not one-off deals.')],
    ].map(([t, d], i) => `
    <div class="card" style="padding:24px">
      <span class="num">0${i + 1}</span>
      <h4 class="card__title">${t}</h4>
      <p>${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('المسار الزمني', 'Timeline'), T('أربع مراحل — من التأسيس إلى الوكالة الحصرية', 'Four stages — from founding to the exclusive agency'))}
  <div class="timeline">
    ${[
      [T('التأسيس', 'Founding'), T('تسجيل الشركة وانطلاقها رسميًا بموجب السجل التجاري <span class="lat" dir="ltr">1010909714</span>.', 'Company registration and official launch under CR <span class="lat" dir="ltr">1010909714</span>.')],
      [T('البنية النظامية', 'Regulatory structure'), T('استكمال التراخيص، والتسجيل الضريبي، وعضوية الغرفة التجارية.', 'Completion of licences, VAT registration, and Chamber of Commerce membership.')],
      [T('البنية التشغيلية', 'Operational structure'), T('ترخيص المستودع الرئيسي في حي المشعل بالرياض، والتعاقد مع شبكة التوزيع الوطنية.', 'Licensing of the main warehouse in Al Mishal, Riyadh, and contracting the national distribution network.')],
      [T('المحفظة والوكالات', 'Portfolio & agencies'), T('تسجيل تشكيلة <span class="lat" dir="ltr">SKIN1004</span> لدى الهيئة، والوكالة الحصرية لفيلر <span class="lat" dir="ltr">ReMedium</span> في المملكة.', 'SFDA registration of the <span class="lat" dir="ltr">SKIN1004</span> range, and the exclusive KSA agency for the <span class="lat" dir="ltr">ReMedium</span> filler.')],
    ].map(([t, d], i) => `
    <div>
      <span class="t-dot">${i + 1}</span>
      <h4>${t}</h4>
      <p>${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('القيادة والفريق', 'Leadership & team'), T('صفحة قصيرة تعطي المشتري وجهًا يتعامل معه', 'A short page that gives the buyer a face to deal with'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [T('ماهر بن عبدالله بن علي الجاسر', 'Maher bin Abdullah bin Ali Al-Jasser'), T('المدير العام', 'General Manager'), T('الإشراف التشغيلي الشامل، والصلاحيات الاستراتيجية والمالية.', 'Overall operational oversight, with strategic and financial authority.'), 'leader1.jpg'],
      [T('عبدالفتاح عطا محمود', 'Abdelfattah Atta Mahmoud'), T('مدير مبيعات منتجات التجميل والعناية', 'Sales Manager — Beauty & Skincare'), T('الإشراف والتشغيل الشامل لجميع منتجات العناية والتجميل.', 'Full oversight and operation of all skincare and beauty products.'), 'leader2.jpg'],
      [T('د. محمود عادل', 'Dr. Mahmoud Adel'), T('مدير مبيعات منتجات التجميل الطبي', 'Sales Manager — Medical Aesthetics'), T('الإشراف والتشغيل الشامل لجميع منتجات التجميل الطبي.', 'Full oversight and operation of all medical-aesthetics products.'), 'leader3.jpg'],
    ].map(([n, r, d, img]) => `
    <div class="card">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
        <img src="/assets/img/${img}" alt="${n}" style="width:62px;height:62px;border-radius:50% 50% 22% 22% / 40% 40% 16% 16%;object-fit:cover">
        <div>
          <b style="display:block;font-family:var(--ff-d);font-size:15.5px;font-weight:800">${n}</b>
          <span style="font-size:12px;font-weight:700;color:var(--green-600)">${r}</span>
        </div>
      </div>
      <p>${d}</p>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('كادر قيادي بخبرة تمتد لأكثر من أربعة عشر عامًا في القطاع التنظيمي. الصور الحالية مؤقتة إلى حين اعتماد الصور الرسمية.', 'A leadership team with more than fourteen years of experience in the regulatory sector. Current photos are temporary until official portraits are approved.')}</p>
</div></section>
`);

  /* ============================================================
     IDENTITY — company/identity
  ============================================================ */
  add('company/identity',
    T('الهوية النظامية والتراخيص', 'Legal Identity & Licences'),
    T('السجل التجاري والرقم الضريبي والتراخيص والعضويات — كما هي، والمستندات متاحة عند الطلب.', 'CR, VAT, licences and memberships — stated as they are, with documents available on request.'),
    'company', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الشركة', 'Company'), u('company/about')], [T('الهوية النظامية والتراخيص', 'Legal Identity & Licences')]],
    T('الهوية النظامية والتراخيص', 'Legal Identity & Licences'),
    T('الأرقام والتراخيص كما هي — قيد التجديد يُكتب قيد التجديد. عرض اسم الترخيص وحالته، وإتاحة الأرقام والمستندات عند الطلب.',
      'Numbers and licences exactly as they are — “under renewal” is written as under renewal. Each licence is shown by name and status, with numbers and documents available on request.'))}

<section class="section"><div class="container">
  ${secHead(T('بطاقة الهوية', 'Identity card'), T('الهوية النظامية', 'Legal identity'))}
  <div class="grid grid-4" style="gap:14px">
    ${[
      [T('الاسم النظامي', 'Legal name'), T('شركة جذور الجمال للتجارة', 'Beauty Roots Trading Company')],
      [T('الشكل النظامي', 'Legal form'), T('شركة ذات مسؤولية محدودة', 'Limited Liability Company')],
      [T('السجل التجاري', 'Commercial registration'), '<span class="lat" dir="ltr">1010909714</span>'],
      [T('الرقم الضريبي (VAT)', 'VAT number'), '<span class="lat" dir="ltr">311755763600003</span>'],
      [T('المقر الرئيسي', 'Head office'), T('الرياض — المملكة العربية السعودية', 'Riyadh — Saudi Arabia')],
      [T('نشاط الشركة', 'Activities'), T('استيراد · توزيع بالجملة · بيع بالجملة', 'Import · wholesale distribution · wholesale')],
      [T('الفئات المرخّصة', 'Licensed categories'), T('الأدوية البشرية · المنتجات الصحية والعشبية · مستحضرات التجميل · الأجهزة الطبية', 'Human medicines · health & herbal products · cosmetics · medical devices')],
      [T('المستودع', 'Warehouse'), T('حي المشعل — الرياض (مرخّص)', 'Al Mishal district — Riyadh (licensed)')],
    ].map(([t, d]) => `<div class="fact-tile"><span>${t}</span><b>${d}</b></div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('التراخيص والعضويات', 'Licences & memberships'), T('اسم الترخيص وحالته — كما هو', 'Each licence by name and status — as it is'))}
  <div class="lic-table">
    <div class="row row--head"><span>${T('الترخيص / العضوية', 'Licence / membership')}</span><span>${T('الرقم', 'Number')}</span><span>${T('الحالة', 'Status')}</span></div>
    ${[
      [T('عضوية الغرفة التجارية', 'Chamber of Commerce membership'), '842174'],
      [T('ترخيص منشأة أجهزة طبية (مستورد وموزّع)', 'Medical-device establishment licence (importer & distributor)'), 'IDL-2024-MD-0095'],
      [T('ترخيص مستودع مستحضرات تجميل', 'Cosmetics warehouse licence'), 'SWL-2024-CM-0262'],
    ].map(([t, n]) => `
    <div class="row">
      <span>${t}</span>
      <span class="no" dir="ltr">${n}</span>
      <span>${chip(T('سارٍ — قيد التجديد', 'Valid — under renewal'), 'warn')}</span>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('تُحدَّث تواريخ السريان وحالة كل ترخيص في هذه الصفحة فور صدور التجديد.', 'Validity dates and the status of each licence are updated on this page as soon as each renewal is issued.')}</p>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('المستندات متاحة فور الطلب', 'Documents available on request'),
    T('السجل التجاري · شهادة التسجيل الضريبي · عضوية الغرفة التجارية · ترخيص منشأة الأجهزة الطبية · ترخيص مستودع مستحضرات التجميل — لطلب أي مستند أو ترخيص يسعدنا تواصلكم المباشر معنا.',
      'Commercial registration · VAT certificate · Chamber of Commerce membership · medical-device establishment licence · cosmetics warehouse licence — to request any document or licence, contact us directly.'))}
  <div style="display:flex;justify-content:center;margin-top:24px">${btn(T('تواصل معنا', 'Contact us'), u('company/contact'), 'dark')}</div>
</div></section>
`);

  /* ============================================================
     CONTACT — company/contact
  ============================================================ */
  add('company/contact',
    T('تواصل معنا', 'Contact Us'),
    T('جوال وواتساب +966 56 201 7170 · sales@beautyrooots.com · شارع حضرموت، حي الخليج، الرياض.', 'Mobile & WhatsApp +966 56 201 7170 · sales@beautyrooots.com · Hadhramaut St., Al Khaleej, Riyadh.'),
    'company', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الشركة', 'Company'), u('company/about')], [T('تواصل معنا', 'Contact Us')]],
    T('تواصل معنا', 'Contact Us'),
    T('للعيادات والصيدليات ومراكز العناية: لطلب عرض سعر، أو زيارة المندوب، أو طلب مستندات المنتج والتسجيل — نرحّب بتواصلكم مباشرة.',
      'For clinics, pharmacies and care centres: to request a quote, a rep visit, or product and registration documents — we welcome your direct contact.'))}

<section class="section"><div class="container">
  <div class="grid grid-4">
    ${[
      [I.phone(20), T('الجوال / الواتساب', 'Mobile / WhatsApp'), '<span class="lat" dir="ltr">+966 56 201 7170</span>', T('قناة الطلب الأولى — والرد في ساعات العمل', 'The primary ordering channel — replies during working hours')],
      [I.mail(20), T('البريد الإلكتروني', 'Email'), '<span class="lat" dir="ltr">sales@beautyrooots.com</span>', T('للطلبات والمستندات والاستفسارات الفنية', 'For orders, documents and technical enquiries')],
      [I.pin(20), T('العنوان', 'Address'), T('شارع حضرموت، حي الخليج، الرياض 13223', 'Hadhramaut St., Al Khaleej Dist., Riyadh 13223'), T('المملكة العربية السعودية', 'Saudi Arabia')],
      [I.user(20), T('زيارة المندوب', 'Rep visit'), T('تُرتَّب بموعد', 'Arranged by appointment'), T('لجميع مناطق المملكة', 'All regions of the Kingdom')],
    ].map(([ic, t, v, d]) => `
    <div class="card">
      <span class="icon-tile" style="margin-bottom:14px">${ic}</span>
      <span style="display:block;font-size:11.5px;font-weight:700;color:var(--muted-2);margin-bottom:5px">${t}</span>
      <b style="display:block;font-family:var(--ff-d);font-size:15px;font-weight:800;line-height:1.7;margin-bottom:6px">${v}</b>
      <p style="font-size:12px">${d}</p>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('ساعات العمل: الأحد – الخميس، 9:00 صباحًا – 6:00 مساءً.', 'Working hours: Sunday–Thursday, 9:00 AM – 6:00 PM.')}</p>
</div></section>

<section class="section"><div class="container">
  <div class="grid" style="grid-template-columns:1.35fr .65fr;align-items:stretch" id="map">
    <div style="position:relative;min-height:330px;border:1px solid var(--line);border-radius:28px;overflow:hidden;background:var(--mint)">
      <iframe src="https://www.google.com/maps?q=Hadhramaut%20St%2C%20Al%20Khaleej%20District%2C%20Riyadh%2013223&hl=${ctx.L}&z=15&output=embed" style="position:absolute;inset:0;width:100%;height:100%;border:0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="${T('موقعنا على الخريطة', 'Our location on the map')}"></iframe>
    </div>
    <div class="dark-strip" style="display:flex;flex-direction:column;gap:14px;justify-content:center;padding:32px">
      <h3>${T('دعوة مزدوجة', 'Two ways to start')}</h3>
      <p style="font-size:13px">${T('للمنشآت: نموذج طلب عرض السعر هو أسرع طريق لعرض رسمي وموثّق. للجمهور: اسألي طبيبك — المنتج يصل عبر المنشآت الصحية المرخّصة فقط.', 'Facilities: the quote form is the fastest route to an official, documented offer. Public: ask your doctor — the product reaches you only through licensed healthcare facilities.')}</p>
      <div style="display:flex;flex-direction:column;gap:10px;align-items:flex-start">
        ${btn(T('طلب عرض سعر', 'Request a quote'), u('medical/quote'), 'white')}
        ${btn(T('واتساب مباشر', 'Direct WhatsApp'), WA, 'green', I.wa(15))}
      </div>
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${noteStrip(T('حسابات التواصل الاجتماعي المعتمدة تُدرج هنا فور اعتمادها — ولا يُنشر أي حساب قبل تأكيده. البيانات التي تُجمع عبر النماذج تُعالج وفق سياسة الخصوصية ونظام حماية البيانات الشخصية السعودي.', 'Approved social accounts will be listed here once confirmed — none is published before confirmation. Data collected through forms is processed under the Privacy Policy and the Saudi Personal Data Protection Law.'))}
</div></section>
`);

  /* ============================================================
     COMPLIANCE — quality/compliance
  ============================================================ */
  add('quality/compliance',
    T('الالتزام واليقظة', 'Compliance & Vigilance'),
    T('تسجيل المنتجات ومراجعة الملصقات وقناة الإبلاغ وإجراء الاستدعاء — والقناة النظامية مقابل غيرها.', 'Product registration, label review, the reporting channel and the recall procedure — plus the regulated channel vs everything else.'),
    'quality', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الجودة والالتزام', 'Quality & Compliance'), u('quality/compliance')], [T('الالتزام واليقظة', 'Compliance & Vigilance')]],
    T('الالتزام واليقظة', 'Compliance & Vigilance'),
    T('ملف المنتج مسؤوليتنا الكاملة — عيادتكم تستلم منتجًا جاهزًا ومستنداته معه. تُدار شؤون التسجيل والالتزام داخليًا في «جذور الجمال»، دون الاعتماد على مستشارين خارجيين.',
      'The product file is entirely our responsibility — your clinic receives a ready product with its documents attached. Registration and compliance are managed in-house at Beauty Roots, with no reliance on external consultants.'))}

<section class="section"><div class="container">
  <div class="grid" style="grid-template-columns:.5fr 1fr 1fr;gap:18px">
    <div class="arch-media arch-media--card" style="min-height:360px">
      <img src="/assets/img/docs.jpg" alt="${T('مراجعة مستندات التسجيل', 'Reviewing registration documents')}">
      <span class="media-shade"></span>
      <span style="position:absolute;bottom:14px;inset-inline:14px;color:#fff;font-size:12px;font-weight:700;line-height:1.7">${T('التسجيل والالتزام يُداران داخليًا — دون مستشارين خارجيين', 'Registration and compliance are managed in-house — no external consultants')}</span>
    </div>
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17.5px">${T('إدارة ملفات المنتجات والتسجيل', 'Product files & registration')}</h3>
      <ul>
        ${listRow(I.doc(17), T('تسجيل المنتجات ومتابعتها', 'Product registration & follow-up'), T('إعداد ملفات التسجيل لدى الهيئة ومتابعة تجديدها قبل موعد انتهائها بوقت كافٍ.', 'Preparing SFDA registration files and renewing them well before expiry.'))}
        ${listRow(I.eye(17), T('مراجعة الملصقات والمواد التعريفية', 'Label & material review'), T('فحص كل ملصق ومادة تعريفية للتأكد من مطابقتها للملف المسجَّل قبل التداول.', 'Checking every label and promotional item against the registered file before circulation.'))}
        ${listRow(I.check(17), T('التحقق عند الاستلام', 'Verification at receipt'), T('فحص المطابقة وتواريخ الصلاحية وسلامة العبوات قبل إدخال الشحنات إلى المستودع.', 'Checking conformity, expiry dates and pack integrity before shipments enter the warehouse.'))}
        ${listRow(I.box(17), T('التنسيق مع المصنّع', 'Manufacturer coordination'), T('نقل أي تحديثات أو تغييرات في المواصفات من المصنع إلى العيادة فور صدورها.', 'Relaying any specification updates or changes from the factory to the clinic as soon as they are issued.'))}
      </ul>
    </div>
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17.5px">${T('الجاهزية عند المشكلة', 'Readiness when something goes wrong')}</h3>
      <ul>
        ${listRow(I.phone(17), T('قناة إبلاغ مخصّصة', 'A dedicated reporting channel'), T('قناة مباشرة عبر الواتساب <span class="lat" dir="ltr">+966 56 201 7170</span> والبريد <span class="lat" dir="ltr">sales@beautyrooots.com</span> — بوقت استجابة خلال 24 ساعة لأي ملحوظة أو شكوى أو أثر غير مرغوب.', 'A direct channel via WhatsApp <span class="lat" dir="ltr">+966 56 201 7170</span> and email <span class="lat" dir="ltr">sales@beautyrooots.com</span> — with a 24-hour response time for any observation, complaint or adverse effect.'))}
        ${listRow(I.shield(17), T('إجراء استدعاء موثّق', 'A documented recall procedure'), T('سجل التتبّع يتيح تحديد أماكن كل وحدة، وإبلاغ الجهات المعنية، وسحب المنتجات.', 'The traceability record locates every unit, notifies the relevant parties, and withdraws products.'))}
        ${listRow(I.doc(17), T('الإبلاغ للجهات المختصة', 'Reporting to the authorities'), T('رفع تقارير الحوادث إلى الهيئة وفق الأنظمة، بالتنسيق مع المصانع.', 'Filing incident reports with the SFDA per regulations, in coordination with the factories.'))}
        ${listRow(I.thermo(17), T('نقل تعليمات التخزين والاستخدام', 'Passing on storage & use instructions'), T('تعليمات الحفظ والاستخدام الصادرة عن المصنع تصل مرفقة مع كل شحنة.', 'The manufacturer’s storage and usage instructions arrive attached to every shipment.'))}
      </ul>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('القناة النظامية مقابل غيرها', 'The regulated channel vs everything else'), T('أقوى بلوك إقناع للعيادة', 'The clinic’s strongest proof point'),
    T('الفرق يظهر في المستندات التي تُطلب من منشأتكم عند أول مراجعة رقابية. مقارنة محايدة بين قناة نظامية وأخرى غير نظامية — دون ذكر أي منافس بالاسم.',
      'The difference shows in the documents your facility is asked for at its first regulatory inspection. A neutral comparison between a regulated channel and an unregulated one — no competitor named.'))}
  ${compareTable(ctx)}
  <p class="foot-note">${T('البلوك نفسه يظهر مختصرًا في الصفحة الرئيسية، ويعيش هنا بنسخته الكاملة.', 'A condensed version of this block appears on the homepage; the full version lives here.')}</p>
</div></section>

<section class="section section--last"><div class="container">
  ${darkStrip(T('مسؤوليتنا تبدأ قبل التسليم، وتستمر بعده', 'Our responsibility begins before delivery — and continues after it'),
    T('قنوات اتصال مباشرة مع المصانع ومع الهيئة تتيح استجابة سريعة وموثّقة لأي أثر جانبي أو ملحوظة تُرفع إلينا عن أي منتج.',
      'Direct lines to the factories and the SFDA allow a fast, documented response to any adverse effect or observation raised about any product.'))}
</div></section>
`);

  /* ============================================================
     SUPPLY — quality/supply
  ============================================================ */
  add('quality/supply',
    T('سلسلة الإمداد والتخزين والتوزيع', 'Supply Chain, Storage & Distribution'),
    T('أربع مراحل موثّقة من المصنع إلى العيادة، مستودع مرخّص في الرياض، وتغطية جميع مناطق المملكة.', 'Four documented stages from factory to clinic, a licensed Riyadh warehouse, and coverage of every region of the Kingdom.'),
    'quality', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الجودة والالتزام', 'Quality & Compliance'), u('quality/compliance')], [T('سلسلة الإمداد والتخزين والتوزيع', 'Supply Chain, Storage & Distribution')]],
    T('سلسلة الإمداد والتخزين والتوزيع', 'Supply Chain, Storage & Distribution'),
    T('لا وسطاء ولا سوق ثانوية: كل شحنة بتعاقد مباشر مع المصنّع أو وكيله المعتمد، ومصحوبة بمستنداتها الأصلية. السلسلة مسار واحد متصل، كل مرحلة فيه موثّقة.',
      'No intermediaries, no grey market: every shipment comes under a direct contract with the manufacturer or its authorised agent, accompanied by its original documents. The chain is one connected path, every stage documented.'))}

<section class="section"><div class="container">
  ${secHead(T('المسار', 'The path'), T('أربع مراحل موثّقة — من باب المصنع إلى باب العيادة', 'Four documented stages — from the factory door to the clinic door'))}
  <div class="grid grid-4">
    ${[
      [T('التأهيل والتعاقد', 'Qualification & contracting'), T('تقييم المصنع ومستنداته وأنظمة جودته، ومراجعة مطابقة المنتج لاشتراطات التداول في المملكة، ثم التعاقد المباشر.', 'Assessing the factory, its documents and quality systems, checking the product against KSA circulation requirements, then contracting directly.')],
      [T('التسجيل والاستيراد', 'Registration & import'), T('استكمال متطلبات التسجيل والاستيراد لدى الجهات المختصة، وشحن مضبوط الظروف، وتخليص جمركي بمستندات مكتملة.', 'Completing registration and import requirements with the authorities, condition-controlled shipping, and customs clearance with complete documents.')],
      [T('الاستلام والفحص', 'Receipt & inspection'), T('فحص المطابقة وسلامة العبوات وتواريخ الصلاحية وأرقام التشغيلات، وتسجيلها في نظام المخزون قبل الإدخال.', 'Checking conformity, pack integrity, expiry dates and lot numbers, and logging them in the inventory system before entry.')],
      [T('التخزين والتسليم', 'Storage & delivery'), T('حفظ وفق ظروف المصنّع في مستودعنا المرخّص، ثم صرف بنظام الأقدم صلاحيةً أولًا، وتسليم موثّق مع بيان الدفعة.', 'Storage per the manufacturer’s conditions in our licensed warehouse, dispatch on a first-expiry-first-out basis, and documented delivery with the batch record.')],
    ].map(([t, d], i) => `
    <div class="card">
      <span class="num">0${i + 1}</span>
      <h4 class="card__title">${t}</h4>
      <p>${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${darkStrip(T('التتبّع والمستندات المرافقة', 'Traceability & accompanying documents'),
    T('يُسجَّل رقم التشغيلة وتاريخ الصلاحية لكل وحدة عند الإدخال وعند الصرف، بما يتيح تحديد الجهة المستلمة لأي دفعة عند الحاجة. وتُسلَّم كل شحنة بفاتورة ضريبية نظامية وبيان تسليم يتضمن بيانات الدفعة وتعليمات الحفظ الصادرة عن المصنّع.',
      'Every unit’s lot number and expiry date are logged at entry and at dispatch, so the recipient of any batch can be identified when needed. Every shipment is delivered with a compliant tax invoice and a delivery note carrying the batch data and the manufacturer’s storage instructions.'))}
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('التخزين وظروف الحفظ', 'Storage & conditions'), T('مستودع مرخّص تحت إشراف الهيئة', 'A licensed warehouse under SFDA supervision'))}
  <div class="grid" style="grid-template-columns:.8fr 1.2fr;gap:18px;align-items:stretch">
    <div class="arch-media arch-media--card" style="min-height:420px">
      <img src="/assets/img/warehouse.jpg" alt="${T('مستودع مرخّص', 'Licensed warehouse')}">
      <span class="media-shade"></span>
      <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصور المستودع الفعلي', 'Placeholder — to be replaced by photos of the actual warehouse')}</span>
    </div>
    <div style="display:grid;grid-template-rows:repeat(3,minmax(0,1fr));gap:14px">
      ${[
        [I.box(20), T('مستودع حي المشعل — الرياض', 'Al Mishal warehouse — Riyadh'), T('مرخّص لتخزين مستحضرات التجميل والأجهزة الطبية، خاضع لإشراف الهيئة العامة للغذاء والدواء واشتراطاتها.', 'Licensed for cosmetics and medical devices, under SFDA supervision and requirements.')],
        [I.thermo(20), T('حفظ وفق ظروف المصنّع', 'Manufacturer-set conditions'), T('معايير الحرارة والظروف المحددة من المصنّع، مع الفصل بين الفئات المتباينة من المنتجات.', 'Temperature and condition standards set by the manufacturer, with segregation between differing product categories.')],
        [I.check(20), T('صرف الأقدم صلاحيةً أولًا', 'First expiry, first out'), T('نظام إدارة مخزون يضبط أرقام التشغيلات وتواريخ الصلاحية ويعتمد مبدأ FEFO.', 'An inventory system that controls lot numbers and expiry dates on a FEFO basis.')],
      ].map(([ic, t, d]) => `
      <div class="card" style="display:flex;gap:16px;align-items:flex-start;padding:22px 24px">
        <span class="icon-tile icon-tile--sm">${ic}</span>
        <div>
          <h4 class="card__title" style="font-size:15px;margin-bottom:6px">${t}</h4>
          <p>${d}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
  <div style="margin-top:16px;display:flex;align-items:center;justify-content:space-between;gap:16px;background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 22px;flex-wrap:wrap">
    <p style="font-size:13px;font-weight:700;color:var(--green-900)">${T('حفظ ReMedium: أقل من 25 درجة مئوية — لا يحتاج سلسلة تبريد.', 'ReMedium storage: below 25°C — no cold chain required.')}</p>
    <span style="font-size:12.5px;color:var(--muted)">${T('مراقبة حرارة رقمية على مدار الساعة، مع سجلات حفظ دورية موثّقة.', 'Round-the-clock digital temperature monitoring, with documented periodic storage logs.')}</span>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('التوزيع والتغطية', 'Distribution & coverage'), T('جميع مناطق ومحافظات المملكة', 'Every region and governorate of the Kingdom'))}
  <div class="grid grid-2">
    ${[
      [I.pin(20), T('داخل مدينة الرياض', 'Within Riyadh'), T('توصيل مباشر عبر مندوبينا.', 'Direct delivery by our own representatives.')],
      [I.truck(20), T('باقي مناطق المملكة', 'The rest of the Kingdom'), T('عبر الشبكة اللوجستية الوطنية المعتمدة — تتبّع فوري وإمكانية الدفع عند الاستلام.', 'Via the approved national logistics network — live tracking and cash-on-delivery available.')],
    ].map(([ic, t, d]) => `
    <div class="card" style="display:flex;align-items:center;gap:14px">
      <span class="icon-tile">${ic}</span>
      <div>
        <h4 class="card__title" style="margin-bottom:4px">${t}</h4>
        <p style="font-size:13px">${d}</p>
      </div>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('التوصيل داخل الرياض خلال 24–48 ساعة، ولبقية مناطق المملكة خلال 2–5 أيام عمل من تأكيد الطلب.', 'Delivery within Riyadh in 24–48 hours, and to the rest of the Kingdom in 2–5 business days from order confirmation.')}</p>
</div></section>
`);

  /* ============================================================
     CERTIFICATIONS — quality/certifications
  ============================================================ */
  add('quality/certifications',
    T('الشهادات والاعتمادات', 'Certifications & Accreditations'),
    T('CE، ISO 13485، MDSAP، GMP، MFDS — كل اعتماد باسمه الكامل ومعناه العملي، وتسجيل SFDA شرط التداول.', 'CE, ISO 13485, MDSAP, GMP, MFDS — each by its full name and practical meaning, with SFDA registration as the condition of circulation.'),
    'quality', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الجودة والالتزام', 'Quality & Compliance'), u('quality/compliance')], [T('الشهادات والاعتمادات', 'Certifications & Accreditations')]],
    T('الشهادات والاعتمادات', 'Certifications & Accreditations'),
    T('كل اعتماد يُعرض باسمه الكامل وبمعناه العملي — لا كشعار بلا شرح. ولا يُنشر أي رقم تسجيل قبل تأكيده كتابةً.',
      'Every accreditation is shown by its full name and its practical meaning — never as an unexplained logo. And no registration number is published before written confirmation.'))}

<section class="section"><div class="container">
  ${secHead(T('الاعتمادات الدولية', 'International accreditations'), T('ماذا يعني كل اعتماد عمليًا؟', 'What does each one mean in practice?'))}
  <div style="display:flex;flex-direction:column;gap:12px">
    ${[
      ['CE', 'European Conformity', T('علامة المطابقة الأوروبية: تفيد استيفاء المنتج لمتطلبات السلامة والأداء المعمول بها في السوق الأوروبي.', 'The European conformity mark: the product meets the safety and performance requirements applicable in the European market.')],
      ['ISO 13485', 'Medical Devices — Quality Management Systems', T('المواصفة الدولية لنظام إدارة الجودة الخاص بتصنيع الأجهزة الطبية — تضمن انضباط عمليات التصنيع والتوثيق.', 'The international standard for medical-device quality management — ensuring disciplined manufacturing and documentation.')],
      ['MDSAP', 'Medical Device Single Audit Program', T('برنامج تدقيق موحّد تقبله جهات رقابية في عدة دول بتدقيق واحد — أي خضوع المصنع لرقابة متعددة الجهات.', 'A single audit accepted by regulators in several countries — meaning the factory answers to multiple authorities at once.')],
      ['GMP', 'Good Manufacturing Practice', T('ممارسات التصنيع الجيد: اشتراطات تضمن ثبات جودة الإنتاج من دفعة إلى أخرى.', 'Good manufacturing practice: requirements that keep production quality consistent from batch to batch.')],
      ['MFDS', T('Ministry of Food and Drug Safety — سابقًا KFDA', 'Ministry of Food and Drug Safety — formerly KFDA'), T('ترخيص الجهة الرقابية الكورية في بلد المنشأ — أي أن المنتج معتمد للتداول في موطن تصنيعه.', 'The Korean regulator’s licence in the country of origin — the product is approved for circulation where it is made.')],
    ].map(([b, full, d]) => `
    <div style="display:grid;grid-template-columns:150px 1fr;gap:22px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:20px;padding:20px 26px" class="cert-row">
      <b class="lat" dir="ltr" style="font-size:21px;font-weight:800;color:var(--green-900);text-align:center;background:var(--mint);border-radius:14px;padding:16px 8px">${b}</b>
      <div>
        <span class="lat" dir="ltr" style="display:block;font-size:12px;font-weight:700;color:var(--muted-2);margin-bottom:4px;text-align:start">${full}</span>
        <p style="font-size:13.5px;line-height:1.95;color:var(--muted)">${d}</p>
      </div>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  <div class="dark-strip" style="display:grid;grid-template-columns:auto 1fr;gap:28px;align-items:center;padding:38px 42px">
    <b class="lat" dir="ltr" style="font-size:30px;font-weight:800;color:#7FE3BE;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:18px;padding:22px 30px">SFDA</b>
    <div>
      <h3 style="font-size:19px">${T('تسجيل الهيئة العامة للغذاء والدواء', 'Saudi Food & Drug Authority registration')}</h3>
      <p>${T('شرط تداول المنتج واستخدامه داخل المملكة — وأقوى إشارة ثقة محلية لدينا. يأخذ مساحة مستقلة أعرض هنا وفي شريط الثقة على الرئيسية، ولا يُكتب كسطر في قائمة.', 'The condition for the product’s circulation and use in the Kingdom — and our strongest local trust signal. It gets its own wider space here and in the homepage trust strip, never a single line in a list.')}</p>
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('المستندات المتاحة عند الطلب', 'Documents available on request'), T('قائمة المرفقات — كما في ملف الشركة', 'The annex list — as in the company profile'))}
  <div class="grid grid-3">
    ${[
      [T('مستندات الشركة', 'Company documents'), [T('السجل التجاري', 'Commercial registration'), T('شهادة التسجيل الضريبي', 'VAT certificate'), T('عضوية الغرفة التجارية', 'Chamber of Commerce membership'), T('ترخيص منشأة الأجهزة الطبية', 'Medical-device establishment licence'), T('ترخيص مستودع مستحضرات التجميل', 'Cosmetics warehouse licence')]],
      [T('مستندات ReMedium', 'ReMedium documents'), [T('شهادة CE', 'CE certificate'), T('شهادة EN ISO 13485', 'EN ISO 13485 certificate'), T('شهادة GMP', 'GMP certificate'), T('شهادة MDSAP', 'MDSAP certificate'), T('إقرار المطابقة (DOC)', 'Declaration of Conformity (DOC)'), T('شهادة تسجيل الهيئة · الملف التقني وبروتوكولات الاستخدام', 'SFDA registration certificate · technical file & usage protocols')]],
      [T('مستندات المحفظة', 'Portfolio documents'), ['SKIN1004', 'Purito', 'Orjena', 'Herb Earth', T('HA Filler — لدى الهيئة العامة للغذاء والدواء', 'HA Filler — with the SFDA')]],
    ].map(([t, items]) => `
    <div class="card">
      <h4 class="card__title" style="margin-bottom:14px">${t}</h4>
      <ul class="check-list">
        ${items.map((x) => `<li>${I.check(12)}${x}</li>`).join('')}
      </ul>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('تُحذف من القائمة أي شهادة غير متاحة فعليًا — إدراج وعد غير مؤكد أخطر من عدم ذكره.', 'Any certificate not actually available is removed from the list — an unconfirmed promise is riskier than its absence.')}</p>
</div></section>
`);

  /* ============================================================
     MEDICAL GATE + HUB — medical
  ============================================================ */
  add('medical',
    T('المعلومات الطبية', 'Medical Information'),
    T('القسم الموجّه للكادر الطبي: بوابة إقرار واحدة قبل الأدلة والبروتوكولات وصور النتائج ونموذج طلب عرض السعر.', 'The practitioner section: one attestation gate before the evidence, protocols, result photos and the quote form.'),
    'medical', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('المعلومات الطبية', 'Medical Information')]],
    T('المعلومات الطبية', 'Medical Information'),
    T('القسم الموجّه للكادر الطبي: ما يحتاجه قبل أن يقرّر، وما يحتاجه بعد أن يبدأ. شاشة إقرار واحدة قبل الدخول إلى الأقسام المحمية — بدل التسجيل.',
      'The section for medical staff: what they need before deciding, and what they need once they start. A single attestation screen before the protected areas — instead of registration.'))}

<section class="section"><div class="container">
  <div class="dark-panel gate" data-gate>
    <span class="icon-badge">${I.lock(24)}</span>
    <h2>${T('بوابة الإقرار المهني', 'Professional attestation gate')}</h2>
    <p>${T('«المحتوى التالي موجّه للممارسين الصحيين المرخّصين، ويتضمن مواد ومعلومات سريرية.»', '“The following content is intended for licensed healthcare practitioners and includes clinical material and information.”')}</p>
    <label>
      <input type="checkbox">
      <span>${T('أُقرّ بأنني طبيب أو ممارس صحي مرخّص، وأطّلع على هذا المحتوى بصفة مهنية.', 'I confirm that I am a licensed physician or healthcare practitioner, accessing this content in a professional capacity.')}</span>
    </label>
    <div style="display:flex;justify-content:center">
      <button class="btn btn--green" data-gate-enter disabled>${T('دخول القسم', 'Enter the section')}<span class="btn__circle">${I.arrow()}</span></button>
    </div>
    <p class="small">${T('الموقع لا يتحقق من الترخيص — التحقق الفعلي يحدث في مكانه الطبيعي عند فتح الحساب: ترخيص المنشأة الصحية · السجل التجاري · الشهادة الضريبية · بيانات التواصل.', 'The site does not verify licences — real verification happens where it belongs, at account opening: facility licence · commercial registration · VAT certificate · contact details.')}</p>
  </div>
</div></section>

<section class="section gated" hidden><div class="container">
  ${secHead(T('محتويات القسم', 'What’s inside'), T('ستة مداخل — والفعل التجاري الوحيد هو طلب عرض السعر', 'Six entries — and the only commercial action is the quote request'))}
  <div class="grid grid-3">
    ${[
      [I.user(19), T('نموذج الخدمة للعيادات', 'Service model for clinics'), T('خمس خطوات من فتح الحساب إلى المتابعة.', 'Five steps from account opening to follow-up.'), u('medical/service-model'), false],
      [I.doc(19), T('الشروط التجارية وسياسة الصلاحية', 'Commercial terms & shelf-life policy'), T('الدفع والفوترة والصلاحية عند التسليم والاستبدال.', 'Payment, invoicing, shelf life at delivery, and replacement.'), u('medical/service-model') + '#terms', false],
      [I.search(19), T('الأدلة المخبرية', 'Laboratory evidence'), T('الجداول والدراسات ومصادر الأرقام المنشورة.', 'The tables, studies and sources behind every published figure.'), '#', true],
      [I.eye(19), T('صور النتائج', 'Result photos'), T('خلف الإقرار وبطبقة الحماية.', 'Behind the attestation, with the protection layer.'), '#', true],
      [I.shield(19), T('بروتوكولات وفيديوهات التدريب', 'Protocols & training videos'), T('مناطق الحقن والأعماق والكميات كما وردت من المصنّع.', 'Injection areas, depths and volumes as issued by the manufacturer.'), '#', true],
      [I.arrow(17), T('طلب عرض سعر', 'Request a quote'), T('نموذج واحد — هو الفعل التجاري الوحيد في القسم.', 'One form — the section’s only commercial action.'), u('medical/quote'), false],
    ].map(([ic, t, d, href, locked]) => `
    <a class="card" href="${href}" style="display:block">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <span class="icon-tile icon-tile--sm" style="width:44px;height:44px">${ic}</span>
        ${locked ? chip(`${I.lock(11)} ${T('المحتوى قيد الإعداد', 'Content in preparation')}`) : ''}
      </div>
      <h4 class="card__title">${t}</h4>
      <p>${d}</p>
    </a>`).join('')}
  </div>
</div></section>

<section class="section section--last gated" hidden><div class="container">
  ${secHead(T('حماية صور قبل وبعد', 'Before/after photo protection'), T('ثلاث طبقات — والقاعدة: لا صور قبل وبعد على أي صفحة عامة', 'Three layers — and the rule: no before/after photos on any public page'))}
  <div class="grid grid-3">
    ${[
      [T('الطبقة الأولى — المنع والإخفاء', 'Layer one — prevention & concealment'), T('الصور خلف الإقرار فقط · روابط موقّعة قصيرة العمر · تعطيل النسخ والسحب · نسخة منخفضة الدقة بلا تحميل ولا تكبير · noindex.', 'Photos behind the attestation only · short-lived signed URLs · copy/drag disabled · a low-resolution version with no download or zoom · noindex.'), 'card--mint'],
      [T('الطبقة الثانية — العلامة والتتبع', 'Layer two — watermarking & tracing'), T('علامة مائية ظاهرة بشعار جذور الجمال فوق الصورة كلها · علامة ديناميكية بوقت الاطلاع ورقم الجلسة · بصمة مخفية داخل الملف · بحث دوري بالصورة العكسي.', 'A visible Beauty Roots watermark across the whole image · a dynamic mark with view time and session ID · a hidden fingerprint inside the file · periodic reverse-image searches.'), ''],
      [T('الطبقة الثالثة — السند القانوني', 'Layer three — legal grounding'), T('بند صريح في شروط الاستخدام: الصور ملك جذور الجمال ويُمنع نسخها أو إعادة نشرها · إقرار الدخول يُسجَّل بتاريخه ووقته · موافقة خطية موثّقة من كل حالة.', 'An explicit clause in the Terms of Use: photos are Beauty Roots property and may not be copied or republished · the attestation is logged with date and time · documented written consent from every case.'), ''],
    ].map(([t, d, mod]) => `
    <div class="card ${mod}" style="padding:24px">
      <h4 class="card__title" style="color:var(--green-900);font-size:15px;margin-bottom:10px">${t}</h4>
      <p style="line-height:2">${d}</p>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('التوصية المعتمدة في الهيكل: الطبقة الأولى مع العلامة المائية الديناميكية تغطيان الغالبية العملية من الحالات — وهما ما نوصي بتنفيذه في الإطلاق.', 'The structure’s adopted recommendation: layer one plus the dynamic watermark cover the practical majority of cases — and are what we recommend implementing at launch.')}</p>
</div></section>
`);

  /* ============================================================
     SERVICE MODEL — medical/service-model
  ============================================================ */
  add('medical/service-model',
    T('نموذج الخدمة والشروط التجارية', 'Service Model & Commercial Terms'),
    T('خمس خطوات من فتح الحساب إلى المتابعة، والشروط التجارية وسياسة الصلاحية، والتدريب والدعم الفني.', 'Five steps from account opening to follow-up, the commercial terms and shelf-life policy, and training & technical support.'),
    'medical', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('المعلومات الطبية', 'Medical Information'), u('medical')], [T('نموذج الخدمة والشروط التجارية', 'Service Model & Commercial Terms')]],
    T('نموذج الخدمة والشروط التجارية', 'Service Model & Commercial Terms'),
    T('خمس خطوات من فتح الحساب إلى المتابعة — وإجابات مكتوبة للأسئلة التي يطرحها كل مسؤول مشتريات قبل فتح الحساب.',
      'Five steps from account opening to follow-up — with written answers to the questions every procurement officer asks before opening an account.'))}

<section class="section"><div class="container">
  ${secHead(T('نموذج الخدمة للعيادات', 'The service model for clinics'), T('خطوة بخطوة', 'Step by step'))}
  <div class="grid grid-5" style="gap:14px">
    ${[
      [T('فتح الحساب', 'Account opening'), T('ترخيص المنشأة الصحية · السجل التجاري · الشهادة الضريبية · بيانات التواصل.', 'Facility licence · commercial registration · VAT certificate · contact details.')],
      [T('الطلب', 'Ordering'), T('واتساب أو بريد أو زيارة المندوب — مع عرض سعر رسمي وموثّق.', 'WhatsApp, email, or a rep visit — with an official, documented quote.')],
      [T('التسليم', 'Delivery'), T('بيان تسليم وبيانات التشغيلة وفاتورة ضريبية نظامية.', 'A delivery note, the lot data, and a compliant tax invoice.')],
      [T('التدريب والتطبيق', 'Training & practice'), T('تدريب عملي للطاقم الطبي، وعينات مجانية للتجربة عند أول تعامل.', 'Hands-on training for the medical team, with free trial samples at first engagement.')],
      [T('المتابعة', 'Follow-up'), T('متابعة الاستهلاك وإعادة الطلب في وقته لضمان عدم انقطاع أعمالكم.', 'Monitoring consumption and reordering on time so your work never stops.')],
    ].map(([t, d], i) => `
    <div class="card step-card${i === 0 ? ' is-first' : ''}">
      <span class="step-no">${ctx.L === 'ar' ? ['١', '٢', '٣', '٤', '٥'][i] : i + 1}</span>
      <h4 class="card__title" style="font-size:14.5px;margin-bottom:7px">${t}</h4>
      <p style="font-size:12px">${d}</p>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('يُفتح الحساب خلال 1–3 أيام عمل من اكتمال المستندات، ويتابع مسؤول الحساب إعادة الطلب دوريًا قبل نفاد المخزون.', 'Accounts open within 1–3 business days of complete documents, and your account manager follows up on reorders regularly before stock runs out.')}</p>
</div></section>

<section class="section" id="terms"><div class="container">
  <div class="grid grid-2" style="gap:16px">
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17px;margin-bottom:16px">${T('الشروط التجارية', 'Commercial terms')}</h3>
      <ul class="check-list">
        <li>${I.check(13)}${T('طرق الدفع: تحويل بنكي · مدى · فيزا · الدفع عند الاستلام.', 'Payment methods: bank transfer · mada · Visa · cash on delivery.')}</li>
        <li>${I.check(13)}${T('الفوترة: فاتورة ضريبية نظامية مع كل شحنة، مرفقة ببيانات التشغيلة.', 'Invoicing: a compliant tax invoice with every shipment, with the lot data attached.')}</li>
        <li>${I.check(13)}${T('الحسابات المؤسسية: يتوفر الدفع الآجل للمجموعات الطبية حسب الاتفاق مع المنشأة.', 'Corporate accounts: credit terms are available for medical groups per agreement with the facility.')}</li>
      </ul>
    </div>
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17px;margin-bottom:16px">${T('سياسة الصلاحية والاستبدال', 'Shelf-life & replacement policy')}</h3>
      <ul class="check-list">
        <li>${I.check(13)}${T('الصلاحية عند التسليم: صلاحية متبقية لا تقل عن 12 شهرًا من تاريخ الاستلام.', 'Shelf life at delivery: remaining validity of no less than 12 months from the date of receipt.')}</li>
        <li>${I.check(13)}${T('التالف عند الاستلام: تُستبدل أي وحدة متضررة عند الإبلاغ خلال 48 ساعة من الاستلام.', 'Damaged on arrival: any damaged unit is replaced when reported within 48 hours of receipt.')}</li>
        <li>${I.check(13)}${T('المخزون قريب الانتهاء: تُنسَّق حالات الاستبدال أو الإرجاع مع مسؤول الحساب وفق سياسة معتمدة.', 'Near-expiry stock: replacement or return cases are coordinated with your account manager under an approved policy.')}</li>
      </ul>
    </div>
  </div>
  <div style="margin-top:16px">${noteStrip(T('أي بند لا توجد له سياسة مكتوبة معتمدة يُحذف من النسخة المنشورة — إدراج وعد غير مؤكد أخطر من عدم ذكره. وبقرار الاجتماع: لا يُذكر حد أدنى للطلب.', 'Any clause without an approved written policy is removed from the published version — an unconfirmed promise is riskier than its absence. And by meeting decision: no minimum order is stated.'))}</div>
</div></section>

<section class="section--mint" id="training"><div class="container">
  ${secHead(T('التدريب والدعم الفني', 'Training & technical support'), T('مع كل توريد — بروتوكولات معتمدة ودعم للكادر الطبي', 'With every supply — approved protocols and support for the medical team'))}
  <div class="grid grid-3">
    ${[
      [T('بروتوكولات الاستخدام', 'Usage protocols'), T('أدلة موثّقة لمناطق الحقن والأعماق الموصى بها والكميات المقترحة لكل منتج — كما وردت من المصنّع.', 'Documented guides to injection areas, recommended depths and suggested volumes per product — as issued by the manufacturer.')],
      [T('المواد التدريبية المرئية', 'Visual training material'), T('وسائط تعليمية مقدَّمة من أطباء ممارسين يمتلكون خبرة مباشرة مع المنتج.', 'Educational media presented by practising physicians with direct product experience.')],
      [T('المساندة الفنية', 'Technical assistance'), T('دعم فني وتوضيحي عند الاستخدام الأول للعيادة، ومتابعة لأي استفسار لاحق.', 'Technical and explanatory support at the clinic’s first use, with follow-up for any later enquiry.')],
    ].map(([t, d]) => `<div class="card" style="padding:24px"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="line-height:1.95">${d}</p></div>`).join('')}
  </div>
  <p class="foot-note">${T('التدريب حضوري داخل المنشأة عند أول توريد، مع مواد مرئية مساندة — وتُمنح شهادة حضور للتدريب العملي.', 'Training is delivered in person at the facility on first supply, supported by video material — with an attendance certificate for the hands-on session.')}</p>
</div></section>

<section class="section section--last"><div class="container">
  <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap">
    ${btn(T('طلب عرض سعر', 'Request a quote'), u('medical/quote'), 'dark')}
    ${btn(T('واتساب مباشر', 'Direct WhatsApp'), WA, 'green', I.wa(15))}
  </div>
</div></section>
`);

  /* ============================================================
     QUOTE — medical/quote
  ============================================================ */
  const field = (label, name, placeholder, req = true, wide = false, type = 'text') => `
<div class="field${wide ? ' field--wide' : ''}">
  <label for="${name}">${label}${req ? ' <span class="req">*</span>' : ''}</label>
  ${type === 'textarea'
    ? `<textarea id="${name}" name="${name}" placeholder="${placeholder}"></textarea>`
    : `<input type="${type}" id="${name}" name="${name}" placeholder="${placeholder}"${req ? ' required' : ''}>`}
</div>`;

  add('medical/quote',
    T('طلب عرض سعر', 'Request a Quote'),
    T('نموذج واحد يجمع الأساسي — وفريق المبيعات يتواصل ويكمل التفاصيل ويصدر عرضًا رسميًا.', 'One form collects the essentials — the sales team follows up, completes the details and issues an official quote.'),
    'medical', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('المعلومات الطبية', 'Medical Information'), u('medical')], [T('طلب عرض سعر', 'Request a Quote')]],
    T('طلب عرض سعر — نموذج واحد', 'Request a Quote — one form'),
    T('النموذج يجمع الأساسي فقط، وفريق المبيعات يتواصل ويكمل التفاصيل ويصدر عرضًا رسميًا. مستندات فتح الحساب لا تُطلب هنا — يطلبها الفريق بعد أول تواصل.',
      'The form collects only the essentials; the sales team follows up, completes the details and issues an official quote. Account-opening documents are not requested here — the team asks for them after first contact.'))}

<section class="section section--last"><div class="container">
  <div class="grid" style="grid-template-columns:1.3fr .7fr;gap:18px;align-items:start">
    <form class="form-card" data-quote-form novalidate>
      <div data-form-body>
        <h3>${T('الحقول الإلزامية', 'Required fields')}</h3>
        <div class="form-grid">
          ${field(T('الاسم', 'Name'), 'name', T('الاسم الكامل', 'Full name'))}
          <div class="field">
            <label>${T('نوع المنشأة', 'Facility type')} <span class="req">*</span></label>
            <div class="choice-chips">
              <button type="button" class="cchip is-on">${T('عيادة', 'Clinic')}</button>
              <button type="button" class="cchip">${T('صيدلية', 'Pharmacy')}</button>
              <button type="button" class="cchip">${T('مركز عناية', 'Care centre')}</button>
            </div>
          </div>
          ${field(T('اسم المنشأة', 'Facility name'), 'facility', T('كما في الترخيص', 'As on the licence'))}
          ${field(T('المدينة', 'City'), 'city', T('الرياض، جدة، الدمام…', 'Riyadh, Jeddah, Dammam…'))}
          ${field(T('رقم الجوال / واتساب', 'Mobile / WhatsApp'), 'phone', '+966 5X XXX XXXX', true, false, 'tel')}
          ${field(T('البريد الإلكتروني', 'Email'), 'email', 'name@clinic.sa', true, false, 'email')}
          <div class="field field--wide">
            <label>${T('المنتجات محل الاهتمام — اختيار متعدد', 'Products of interest — multi-select')} <span class="req">*</span></label>
            <div class="choice-chips" data-multi>
              <button type="button" class="cchip">ReMedium Fine</button>
              <button type="button" class="cchip">ReMedium Mid</button>
              <button type="button" class="cchip">ReMedium Sub-Q</button>
              <button type="button" class="cchip">HA Filler</button>
              <button type="button" class="cchip">${T('تشكيلات العناية بالبشرة', 'Skincare ranges')}</button>
            </div>
          </div>
        </div>
        <h3 style="margin-top:28px">${T('حقول اختيارية', 'Optional fields')}</h3>
        <div class="form-grid">
          <div class="field">
            <label>${T('الكمية التقريبية — شرائح لا رقم دقيق', 'Approximate quantity — ranges, not exact numbers')}</label>
            <div class="choice-chips">
              <button type="button" class="cchip">${T('١–١٠', '1–10')}</button>
              <button type="button" class="cchip">${T('١١–٥٠', '11–50')}</button>
              <button type="button" class="cchip">${T('+٥٠', '50+')}</button>
            </div>
          </div>
          <div class="field">
            <label>${T('هل تتعاملون معنا حاليًا؟', 'Do you already work with us?')}</label>
            <div class="choice-chips">
              <button type="button" class="cchip">${T('نعم', 'Yes')}</button>
              <button type="button" class="cchip">${T('لا', 'No')}</button>
            </div>
          </div>
          <label class="checkbox-row field--wide"><input type="checkbox" name="visit">${T('أفضّل زيارة المندوب لمنشأتنا', 'I would prefer a rep visit to our facility')}</label>
          ${field(T('ملاحظات', 'Notes'), 'notes', T('أي تفاصيل تودون إضافتها…', 'Anything you would like to add…'), false, true, 'textarea')}
        </div>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;border-top:1px solid var(--line);padding-top:22px">
          <label class="checkbox-row"><input type="checkbox" data-consent>${T('أوافق على', 'I agree to the')} <a href="${u('legal/privacy')}" style="color:var(--green-600);font-weight:700">${T('سياسة الخصوصية', 'Privacy Policy')}</a> ${T('ومعالجة البيانات لغرض إعداد عرض السعر والتواصل.', 'and to data processing for preparing the quote and follow-up contact.')}</label>
          <p style="font-size:12px;font-weight:700;color:var(--green-900)">${T('التوريد للمنشآت الصحية المرخّصة والمعتمدة فقط.', 'Supply is to licensed, approved healthcare facilities only.')}</p>
          <div><button type="submit" class="btn btn--green">${T('إرسال الطلب', 'Send request')}<span class="btn__circle">${I.arrow()}</span></button></div>
        </div>
      </div>
      <div class="thanks" data-form-thanks hidden>
        <b>${T('وصل طلبكم — شكرًا لكم.', 'Your request has been received — thank you.')}</b>
        <p>${T('يتواصل فريق المبيعات خلال يوم عمل واحد ويصدر عرض السعر الرسمي. وصلتكم رسالة تأكيد على البريد المُدخل.', 'The sales team will follow up within one business day and issue the official quote. A confirmation email has been sent to the address provided.')}</p>
        <p style="margin-top:10px;font-size:11.5px;color:var(--warn-ink)">${T('ملاحظة تقنية: هذا النموذج واجهة فقط حاليًا — الإرسال الفعلي (بريد + جدول طلبات) يُوصل في مرحلة الربط الخلفي.', 'Technical note: this form is front-end only for now — actual submission (email + request log) is wired in the backend phase.')}</p>
      </div>
    </form>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="dark-strip" style="padding:28px 30px">
        <h3 style="font-size:16px;margin-bottom:14px">${T('بعد الإرسال', 'After you send')}</h3>
        <ul style="display:flex;flex-direction:column;gap:11px">
          ${[
            T('شاشة شكر تؤكد الرد خلال يوم عمل واحد.', 'A thank-you screen confirming a reply within one business day.'),
            T('رسالة تأكيد تلقائية إلى بريد مُرسِل الطلب.', 'An automatic confirmation email to the sender.'),
            T('إشعار فوري إلى بريد فريق المبيعات ورقمه.', 'An instant notification to the sales team’s email and number.'),
          ].map((t) => `<li style="display:flex;gap:9px;align-items:flex-start;font-size:12.5px;line-height:1.9;color:rgba(255,255,255,.8)"><span style="color:#7FE3BE;margin-top:4px">${I.check(12)}</span><span>${t}</span></li>`).join('')}
        </ul>
        <div style="margin-top:18px">${btn(T('ولمن يستعجل: واتساب', 'In a hurry? WhatsApp'), WA, 'green', I.wa(15))}</div>
      </div>
      ${noteStrip(T('خلف الكواليس: كل الطلبات في جدول واحد قابل للتصدير بحالة لكل طلب (جديد · تم التواصل · مغلق)، ويُسجَّل مصدر الزيارة مع كل طلب لنعرف أي صفحة تجلب الطلبات فعلًا — مع حماية من الإرسال الآلي دون كابتشا مزعجة.', 'Behind the scenes: all requests land in one exportable table with a status per request (new · contacted · closed), and the visit source is logged with each request so we know which pages actually bring leads — with bot protection and no intrusive captcha.'))}
    </div>
  </div>
</div></section>
`);

  /* ============================================================
     KNOWLEDGE — knowledge
  ============================================================ */
  add('knowledge',
    T('مركز المعرفة والآراء', 'Knowledge Center & Reviews'),
    T('مقالات بمراجعة طبية تجيب عن أسئلة المستخدمة الحقيقية، وثلاثة مسارات للآراء مرتبة حسب قوة المصداقية.', 'Medically reviewed articles that answer users’ real questions, plus three review tracks ranked by strength of credibility.'),
    'knowledge', `
<section class="page-hero"><div class="container"><div class="page-hero__inner" style="text-align:center;display:flex;flex-direction:column;align-items:center">
  ${crumbs(ctx, [[T('الرئيسية', 'Home'), u('')], [T('مركز المعرفة', 'Knowledge Center')]])}
  <h1 class="page-title">${T('مركز المعرفة والآراء', 'Knowledge Center & Reviews')}</h1>
  <p class="page-hero__lead" style="margin-bottom:26px">${T('المستخدمة لا تبحث عن أسماء المنتجات، بل عن سؤالها: كم يدوم فيلر الشفاه؟ هل يمكن إزالة الفيلر؟ — والمقالات هي ما تجذبها للموقع.', 'Users don’t search for product names — they search their question: how long does lip filler last? Can filler be dissolved? The articles are what draw them to the site.')}</p>
  <div class="search-pill">
    ${I.search(17)}
    <input type="search" placeholder="${T('كم يدوم فيلر الشفاه؟', 'How long does lip filler last?')}" aria-label="${T('بحث', 'Search')}">
    <button type="button">${T('بحث', 'Search')}</button>
  </div>
  <div class="choice-chips" style="margin-top:18px;justify-content:center">
    <button type="button" class="cchip is-on">${T('الكل', 'All')}</button>
    <button type="button" class="cchip">${T('أساسيات', 'Basics')}</button>
    <button type="button" class="cchip">${T('مناطق', 'Areas')}</button>
    <button type="button" class="cchip">${T('أمان', 'Safety')}</button>
    <button type="button" class="cchip">${T('للأطباء', 'For physicians')}</button>
  </div>
</div></div></section>

<section class="section"><div class="container">
  <div class="grid grid-3" style="gap:22px">
    ${[
      [T('مناطق', 'Areas'), T('كم يدوم فيلر الشفاه؟ وما الذي يغيّر المدة؟', 'How long does lip filler last — and what changes that?'), T('يرتبط بمنطقة الشفاه وبصفحة ReMedium Mid', 'Linked to the lips area and the ReMedium Mid page'), 'face.jpg'],
      [T('أمان', 'Safety'), T('هل يمكن إزالة الفيلر بعد حقنه؟', 'Can filler be dissolved after injection?'), T('مقال أمان — يمر على مراجعة طبية قبل النشر', 'A safety article — medically reviewed before publishing'), 'inject.jpg'],
      [T('أساسيات', 'Basics'), T('جل أحادي الطور: ماذا يعني للنتيجة؟', 'Monophasic gel: what does it mean for the result?'), T('يشرح مصطلح المنتج بلغة المستخدمة', 'Explains the product term in the user’s language'), 'skincare.jpg'],
    ].map(([cat, t, d, img]) => `
    <article class="post">
      <a class="post__img" href="#">
        <img src="/assets/img/${img}" alt="${t}">
        <span class="post__btn">${I.arrow(14)}</span>
      </a>
      <div class="post__meta">
        ${chip(cat)}
        <span>${I.check(12)}${T('مراجعة طبية', 'Medically reviewed')}</span>
      </div>
      <h3><a href="#">${t}</a></h3>
      <p>${d}</p>
    </article>`).join('')}
  </div>
  <p class="foot-note">${T('تصنيفات ثابتة: أساسيات · مناطق · أمان · للأطباء — ومقال مخصّص لكل منطقة علاج يربط بمنتجها وبسيكشن المنطقة ذي الصلة. كل مقال يمر على مراجعة طبية قبل النشر.', 'Fixed categories: basics · areas · safety · for physicians — with a dedicated article per treatment area linking to its product and the relevant area section. Every article passes medical review before publishing.')}</p>
</div></section>

<section class="section"><div class="container">
  ${darkStrip(T('قواعد ثابتة على كل محتوى في الموقع', 'Fixed rules for all content on the site'),
    T('لا وعد بنتيجة، ولا ضمان، ولا صيغة تفضيل مطلق · لا صور قبل وبعد على أي صفحة عامة — داخل المعلومات الطبية فقط، خلف الإقرار وبطبقة الحماية · لا مقارنة بمنتج منافس بالاسم، ولا ذكر أسعار · المنتج يُصرف ويُحقن عن طريق الطبيب فقط، ولا يُباع للأفراد · كل رقم يُنشر له مصدر في الملف التقني، ولا تُستخدم أي مادة تعريفية قبل مراجعتها.',
      'No promised outcomes, no guarantees, no absolute superlatives · no before/after photos on any public page — only inside Medical Information, behind the attestation and the protection layer · no named competitor comparisons and no prices · the product is dispensed and injected by a physician only, never sold to individuals · every published figure has a source in the technical file, and no promotional material is used before review.'))}
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('التجارب والآراء', 'Experiences & reviews'), T('ثلاثة مسارات — مرتبة حسب قوة المصداقية', 'Three tracks — ranked by strength of credibility'))}
  <div class="grid grid-3">
    <div class="card">
      <h4 class="card__title">${T('آراء الأطباء والمنشآت', 'Physician & facility reviews')}</h4>
      <p>${T('رأي مهني عن أداء المنتج — سلايدر هادئ، بدون تقييم رقمي.', 'Professional opinion on product performance — a quiet slider, no numeric rating.')}</p>
      <div class="quote-card">
        <p>${T('«ملف مكتمل من أول مرة يعني شحنة لا تتأخر، ومنتجًا لا يُسحب.»', '“A file complete the first time means a shipment that isn’t delayed — and a product that isn’t recalled.”')}</p>
        <span class="who"><img src="/assets/img/portrait.jpg" alt=""><b>${T('د. ليلى الحربي — عيادة جلدية، الرياض', 'Dr. Layla Al-Harbi — Dermatology Clinic, Riyadh')}</b></span>
      </div>
    </div>
    <div class="card">
      <h4 class="card__title">${T('تقييمات جوجل', 'Google reviews')}</h4>
      <p>${T('منصة خارجية غير محرَّرة — تُعرض كما هي.', 'An external, unedited platform — shown as it is.')}</p>
      <div class="stars" style="margin-top:14px">${I.star()}${I.star()}${I.star()}${I.star()}${I.star()}<a href="https://maps.google.com/?q=Beauty+Roots+Trading+Riyadh" target="_blank" rel="noopener" style="font-size:12px;font-weight:700;color:var(--green-600)">${T('الملف التجاري على خرائط جوجل', 'Business profile on Google Maps')} ${I.ext(12)}</a></div>
    </div>
    <div class="card">
      <h4 class="card__title">${T('تجارب المستخدمات', 'User experiences')}</h4>
      <p>${T('تُنشر بموافقة خطية موثّقة فقط.', 'Published only with documented written consent.')}</p>
      <div style="margin-top:14px">${chip(T('موافقة خطية موثّقة قبل النشر', 'Documented written consent before publishing'))}</div>
    </div>
  </div>
</div></section>
`);

  /* ============================================================
     LEGAL
  ============================================================ */
  const legalShell = (title, body) => `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [title]], title, '')}
<section class="section section--last"><div class="container" style="max-width:860px">
  ${body}
  <p class="foot-note" style="margin-top:28px">${T('صيغة أولى بحسب ملف هيكل الموقع — وتُعتمد نهائيًا بعد المراجعة القانونية.', 'A first version per the site-structure document — finalised after legal review.')}</p>
</div></section>`;

  add('legal/privacy',
    T('سياسة الخصوصية', 'Privacy Policy'),
    T('سياسة الخصوصية لموقع شركة جذور الجمال للتجارة وفق نظام حماية البيانات الشخصية السعودي.', 'The privacy policy of Beauty Roots Trading Company under the Saudi Personal Data Protection Law.'),
    '', legalShell(T('سياسة الخصوصية', 'Privacy Policy'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    <p>${T('تُصاغ هذه السياسة باسم <b style="color:var(--ink)">شركة جذور الجمال للتجارة</b> وبسجلها التجاري <span class="lat" dir="ltr">1010909714</span> بصفتها جهة التحكم في البيانات، وفق نظام حماية البيانات الشخصية السعودي.', 'This policy is issued in the name of <b style="color:var(--ink)">Beauty Roots Trading Company</b>, CR <span class="lat" dir="ltr">1010909714</span>, as the data controller, under the Saudi Personal Data Protection Law.')}</p>
    <p>${T('تغطي السياسة البيانات التي تُجمع عبر نموذج طلب عرض السعر (الاسم، بيانات المنشأة، بيانات التواصل، المنتجات محل الاهتمام)، وإقرار الصفة المهنية عند دخول قسم المعلومات الطبية، وملفات الكوكيز، والخريطة المضمّنة.', 'It covers data collected through the quote request form (name, facility details, contact details, products of interest), the professional attestation on entering the Medical Information section, cookies, and the embedded map.')}</p>
    <div class="card card--mint" style="border:0">
      <h4 class="card__title">${T('بند الأهلية', 'Eligibility clause')}</h4>
      <p style="font-size:13px;line-height:2.1">${T('«منتجات ReMedium من منتجات التجميل الطبي، تُورَّد وتُباع للمنشآت الصحية المرخّصة والمصنّفة المعتمدة لدى جذور الجمال فقط، ولا تُباع للأفراد ولا لأي جهة غير مرخّصة. البيانات التي نجمعها عبر نماذج الموقع تُستخدم للتحقق من استيفاء هذه الأهلية ولإتمام التوريد، ولجذور الجمال الحق في رفض أي طلب لا يستوفيها.»', '“ReMedium products are medical aesthetics, supplied and sold only to licensed, classified healthcare facilities approved by Beauty Roots — never to individuals or unlicensed parties. Data collected through the site’s forms is used to verify this eligibility and complete supply, and Beauty Roots reserves the right to decline any request that does not meet it.”')}</p>
    </div>
    <p>${T('يُذكر هذا البند هنا، ويُكرَّر بصياغة مختصرة في شروط الاستخدام وأسفل نموذج طلب عرض السعر — حتى يقرأه من لن يفتح الصفحات القانونية.', 'The clause appears here and is repeated in shortened form in the Terms of Use and beneath the quote request form — so that even those who never open the legal pages will read it.')}</p>
  </div>
`));

  add('legal/terms',
    T('شروط الاستخدام', 'Terms of Use'),
    T('شروط استخدام موقع جذور الجمال: الملكية الفكرية وحدود استخدام المحتوى والقانون الواجب التطبيق.', 'Beauty Roots website terms: intellectual property, content-use limits, and governing law.'),
    '', legalShell(T('شروط الاستخدام', 'Terms of Use'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    <p>${T('تنظّم هذه الشروط استخدام موقع شركة جذور الجمال للتجارة، وتشمل: الملكية الفكرية وملكية صور النتائج ومنع إعادة نشرها، وحدود استخدام المحتوى، وشروط قسم المعلومات الطبية.', 'These terms govern the use of the Beauty Roots Trading Company website, covering intellectual property, ownership of result photos and the ban on republishing them, content-use limits, and the Medical Information section conditions.')}</p>
    <ul class="check-list">
      <li>${I.check(13)}${T('الصور والمحتوى ملك لشركة جذور الجمال، ويُمنع نسخها أو إعادة نشرها أو استخدامها في أي مادة تسويقية دون إذن كتابي.', 'Photos and content are Beauty Roots property; copying, republishing, or use in any marketing material without written permission is prohibited.')}</li>
      <li>${I.check(13)}${T('قسم المعلومات الطبية موجّه للممارسين الصحيين المرخّصين، وإقرار الدخول يُسجَّل بتاريخه ووقته ويصبح المطّلع مرتبطًا بالشرط الذي وافق عليه.', 'The Medical Information section is for licensed practitioners; the entry attestation is logged with date and time, binding the viewer to the condition they accepted.')}</li>
      <li>${I.check(13)}${T('التوريد للمنشآت الصحية المرخّصة والمعتمدة فقط — ولا يُباع أي منتج تجميل طبي للأفراد.', 'Supply is to licensed, approved healthcare facilities only — no medical-aesthetics product is sold to individuals.')}</li>
      <li>${I.check(13)}${T('القانون الواجب التطبيق: أنظمة المملكة العربية السعودية.', 'Governing law: the regulations of the Kingdom of Saudi Arabia.')}</li>
    </ul>
  </div>
`));

  add('legal/medical-disclaimer',
    T('إخلاء المسؤولية الطبية', 'Medical Disclaimer'),
    T('محتوى الموقع لا يُغني عن استشارة الطبيب — والمنتجات تُستخدم بيد ممارس صحي مرخّص فقط.', 'Site content is no substitute for consulting a physician — products are used only by licensed practitioners.'),
    '', legalShell(T('إخلاء المسؤولية الطبية', 'Medical Disclaimer'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    <p>${T('كل محتوى هذا الموقع — بما فيه المقالات وخريطة الوجه وصفحات المنتجات — محتوى تعريفي وتثقيفي، وليس نصيحة طبية، ولا يُغني عن استشارة طبيب مرخّص.', 'All content on this site — including the articles, the face map and the product pages — is informational and educational. It is not medical advice and is no substitute for consulting a licensed physician.')}</p>
    <p>${T('منتجات التجميل الطبي المعروضة تُصرف وتُحقن عن طريق ممارس صحي مرخّص داخل منشأة صحية معتمدة فقط، ولا تُباع للأفراد. مدد ثبات النتيجة المذكورة مدى معلن من المصنّع — لا وعد بنتيجة ولا ضمان، والنتائج تختلف من حالة إلى أخرى بتقدير الطبيب.', 'The medical-aesthetics products shown are dispensed and injected only by a licensed practitioner within an accredited healthcare facility, and are never sold to individuals. The longevity ranges stated are the manufacturer’s declared ranges — no promised outcome and no guarantee; results vary case by case at the physician’s judgement.')}</p>
    <p>${T('يظهر ملخّص هذا الإخلاء (سطر واحد ورابط) أسفل كل صفحة تحمل محتوى طبيًا.', 'A one-line summary of this disclaimer, with a link, appears beneath every page carrying medical content.')}</p>
  </div>
`));

  return pages;
}
