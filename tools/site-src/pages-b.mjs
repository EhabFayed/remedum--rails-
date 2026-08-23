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
    T('شريككم المعتمد لحلول التجميل الطبي في المملكة — سلسلة إمداد مرخصة ومطابقة لاشتراطات الهيئة العامة للغذاء والدواء.', 'The Kingdom’s trusted partner for medical aesthetic solutions — a licensed, SFDA-compliant supply chain.'),
    'company', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('الشركة', 'Company'), u('company/about')], [T('عن جذور الجمال', 'About Beauty Roots')]],
    T('شريككم المعتمد لحلول التجميل الطبي في المملكة', 'The Kingdom’s Trusted Partner for Medical Aesthetic Solutions'),
    T('نجمع بين ابتكارات التجميل الطبي العالمية والامتثال للاشتراطات الرقابية السعودية.',
      'Bridging global medical aesthetics with Saudi regulatory standards.'))}

<section class="section"><div class="container">
  <div class="hero-split" style="grid-template-columns:.72fr 1.28fr;margin-bottom:40px">
    <div class="arch-media arch-media--soft">
      <img src="/assets/img/team.jpg" alt="${T('فريق العمل', 'Our team')}" style="height:420px">
      <span class="media-tag">${T('صورة مؤقتة — تُستبدل بصور المنشأة', 'Placeholder — to be replaced by company photography')}</span>
    </div>
    <div>
      ${secHead(T('من نحن', 'Who we are'), T('سلسلة إمداد مرخصة — من المصنع مباشرة حتى عيادتكم', 'A fully controlled, SFDA-compliant supply chain'))}
      <p style="margin-top:-18px;font-size:14px;line-height:2.1;color:var(--muted)">${T(
      '«جذور الجمال» شركة سعودية في الرياض، متخصصة في استيراد وتوزيع منتجات التجميل الطبي والأجهزة الطبية ومستحضرات العناية. نخدم العيادات والصيدليات في كافة مناطق المملكة عبر سلسلة إمداد مرخصة ومطابقة لاشتراطات الهيئة العامة للغذاء والدواء تبدأ من المصنع مباشرة حتى عيادتكم.',
      'Beauty Roots is a licensed Saudi distributor in Riyadh specializing in medical aesthetics, ophthalmic devices, and advanced skincare. We serve clinics, pharmacies, and specialists across the Kingdom through a fully controlled, SFDA-compliant supply chain from global manufacturers to your facility.')}</p>
    </div>
  </div>
  <div class="grid grid-2" style="gap:14px">
    ${[
      [T('الامتثال لاشتراطات الهيئة (SFDA)', 'Full SFDA compliance'), T('التزام كامل باشتراطات التسجيل والتخزين والتتبع لضمان أمان كل شحنة.', 'Rigorous adherence to national registration, storage, and traceability standards.'), 'card--mint'],
      [T('الانتقاء الدقيق للمحفظة', 'A selective portfolio'), T('محفظة مختارة بعناية من مصانع عالمية مؤهلة لتوفير نتائج علاجية آمنة ومثبتة سريريًا.', 'Clinically proven products sourced directly from accredited global manufacturers.'), ''],
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
      [T('رؤيتنا', 'Our Vision'), T('أن نكون المرجع الأكثر ثقة للمنشآت الصحية في المملكة بمعايير أمان وانضباط لا تقبل المساومة.', 'To be Saudi Arabia’s most trusted benchmark for safe, fully compliant aesthetic solutions.')],
      [T('رسالتنا', 'Our Mission'), T('تزويد السوق بحلول تجميل مثبتة علميًا، مع دعم تدريبي ولوجستي مستمر للكادر الطبي.', 'Supplying verified aesthetic technologies backed by direct clinical training and reliable distribution.')],
    ].map(([t, d]) => `<div class="dark-strip" style="padding:32px 34px"><h3>${t}</h3><p style="line-height:2.1">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('قيمنا الأربع', 'Our four values'), T('المبادئ التي تحكم كل توريد', 'The principles behind every supply'))}
  <div class="grid grid-4">
    ${[
      [T('الالتزام أولًا', 'Compliance first'), T('لا تداول لأي منتج قبل استيفاء التراخيص الرسمية.', 'No product enters the market without complete approvals.')],
      [T('الوضوح التام', 'Total transparency'), T('شفافية مطلقة حول حالة الاعتماد والبيانات الفنية.', 'Accurate, verifiable product and registration data.')],
      [T('سلسلة إمداد موثوقة', 'Supply integrity'), T('استيراد مباشر من المصانع دون وسطاء أو سوق موازية.', 'Direct manufacturer sourcing with zero intermediaries.')],
      [T('شراكة مستدامة', 'Enduring partnership'), T('دعم مهني مستمر يبني علاقات طويلة الأمد مع العيادات.', 'Dedicated, long-term support for every partner clinic.')],
    ].map(([t, d], i) => `
    <div class="card" style="padding:24px">
      <span class="num">0${i + 1}</span>
      <h4 class="card__title">${t}</h4>
      <p>${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('محطات النمو', 'Key milestones'), T('أربع محطات — من التأسيس إلى الوكالة الحصرية', 'Four milestones — from inception to the exclusive agency'))}
  <div class="timeline">
    ${[
      [T('التأسيس', 'Inception'), T('انطلاق الشركة في الرياض بالسجل التجاري رقم <span class="lat" dir="ltr">1010909714</span>.', 'Established in Riyadh (CR: <span class="lat" dir="ltr">1010909714</span>).')],
      [T('البنية النظامية', 'Licensing'), T('استكمال التسجيل الضريبي، والتراخيص، وعضوية الغرفة التجارية.', 'Completed Chamber of Commerce, VAT, and regulatory setups.')],
      [T('البنية التشغيلية', 'Infrastructure'), T('ترخيص مستودع الرياض المركزي وشبكة التوزيع الوطنية.', 'Licensed Riyadh central warehouse and nationwide logistics.')],
      [T('التسجيل والوكالة الحصرية', 'Exclusivity'), T('التسجيل لدى الهيئة العامة للغذاء والدواء والوكالة الحصرية لتوزيع فيلر <span class="lat" dir="ltr">ReMedium®</span> في المملكة.', 'SFDA registration and the exclusive Saudi distribution agency for <span class="lat" dir="ltr">ReMedium®</span> HA fillers.')],
    ].map(([t, d], i) => `
    <div>
      <span class="t-dot">${i + 1}</span>
      <h4>${t}</h4>
      <p>${d}</p>
    </div>`).join('')}
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('فريقنا', 'Our team'), T('القيادة وفريق العمل', 'Leadership & commercial management'),
    T('خبرات متخصصة، شراكة موثوقة، ودعم مستمر لمنشآتكم.', 'Specialized expertise and trusted support, empowering your healthcare practice.'))}
  <div class="grid grid-3" style="gap:18px">
    ${[
      [T('ماهر بن عبدالله بن علي الجاسر', 'Maher bin Abdullah bin Ali Al-Jasser'), T('المدير العام', 'General Manager'), T('الإشراف التشغيلي الشامل، والصلاحيات الاستراتيجية والمالية.', 'Comprehensive operational oversight, strategic development, and corporate financial authorities.'), 'leader1.jpg'],
      [T('الدكتور محمود عادل', 'Dr. Mahmoud Adel'), T('مدير مبيعات منتجات التجميل الطبي', 'Sales Manager — Medical Aesthetics'), T('الإشراف والتشغيل الشامل لجميع منتجات التجميل الطبي.', 'Comprehensive supervision and commercial operations for all medical aesthetic product lines.'), 'leader3.jpg'],
      [T('الأستاذ عبدالفتاح عطا محمود', 'Mr. Abdelfattah Atta Mahmoud'), T('مدير مبيعات منتجات التجميل والعناية', 'Sales Manager — Skincare & Cosmetics'), T('الإشراف والتشغيل الشامل لجميع منتجات العناية والتجميل.', 'Comprehensive supervision and commercial operations for all skincare and cosmetic product lines.'), 'leader2.jpg'],
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
  <div class="dark-strip" style="margin-top:24px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;padding:28px 34px">
    <h3 style="margin:0;font-size:17px">${T('ترغب في التنسيق المباشر مع فريق المبيعات لمنشأتك؟', 'Looking to connect directly with our commercial team?')}</h3>
    ${btn(T('طلب زيارة مندوب', 'Request a Rep Visit'), u('company/contact'), 'green')}
  </div>
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
    T('الهوية النظامية والتراخيص', 'Regulatory Identity & Licensing'),
    T('نعمل بموثوقية كاملة تحت مظلة الأنظمة الوطنية واشتراطات الهيئة العامة للغذاء والدواء.',
      'Operating strictly within Saudi national regulations and SFDA standards.'))}

<section class="section"><div class="container">
  ${secHead(T('بطاقة الهوية', 'Identity card'), T('الهوية النظامية', 'Legal identity'))}
  <div class="grid grid-4" style="gap:14px">
    ${[
      [T('الاسم النظامي', 'Legal name'), T('شركة جذور الجمال للتجارة', 'Beauty Roots Trading Company')],
      [T('الشكل النظامي', 'Legal form'), T('شركة ذات مسؤولية محدودة', 'Limited Liability Company')],
      [T('السجل التجاري', 'Commercial registration'), '<span class="lat" dir="ltr">1010909714</span>'],
      [T('الرقم الضريبي (VAT)', 'VAT number'), '<span class="lat" dir="ltr">311755763600003</span>'],
      [T('المقر الرئيسي', 'Headquarters'), T('الرياض — المملكة العربية السعودية', 'Riyadh — Kingdom of Saudi Arabia')],
      [T('عضوية الغرفة التجارية', 'Chamber of Commerce No.'), '<span class="lat" dir="ltr">842174</span>'],
      [T('الأنشطة المرخّصة', 'Licensed activities'), T('استيراد وتوزيع وتجارة الجملة لمنتجات التجميل الطبي، والأجهزة والمستلزمات الطبية، ومستحضرات التجميل', 'Importation, wholesale distribution and supply of medical aesthetics, ophthalmic devices, and cosmetics')],
      [T('المستودع المعتمد', 'Licensed warehouse'), T('حي المشعل — الرياض (مستودع مركزي معتمد من الهيئة)', 'Al Mash’al district — Riyadh (SFDA-approved central facility)')],
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
  ${darkStrip(T('إشعار التحقق — المستندات متاحة فور الطلب', 'Verification note — documents available on request'),
    T('جميع شهادات التسجيل ومستندات التراخيص وإثباتات سريانها سارية ومتاحة للمنشآت الصحية والجهات الرقابية فور الطلب: السجل التجاري · شهادة التسجيل الضريبي · عضوية الغرفة التجارية · ترخيص منشأة الأجهزة الطبية · ترخيص المستودع المعتمد.',
      'Full documentation, certificates, and licence validity proofs are readily available upon request for accredited medical institutions and regulatory bodies: commercial registration · VAT certificate · Chamber of Commerce membership · medical-device establishment licence · approved warehouse licence.'))}
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
    T('تواصل مع شركة جذور الجمال للتجارة', 'Connect with Beauty Roots Trading Company'),
    T('استفسارات التوريد المباشر، اعتماد العيادات، والدعم الميداني في كافة مناطق المملكة.',
      'Direct sales inquiries, clinic supply coordination, and official representative visits across all Saudi regions.'))}

<section class="section"><div class="container">
  <div class="grid grid-4">
    ${[
      [I.phone(20), T('الجوال / الواتساب', 'Mobile / WhatsApp'), '<span class="lat" dir="ltr">+966 56 201 7170</span>', T('قناة الطلب الأولى — والرد في ساعات العمل', 'The primary ordering channel — replies during working hours')],
      [I.mail(20), T('البريد الإلكتروني', 'Email'), '<span class="lat" dir="ltr">sales@beautyrooots.com</span>', T('للطلبات والمستندات والاستفسارات الفنية', 'For orders, documents and technical enquiries')],
      [I.pin(20), T('العنوان', 'Address'), T('شارع حضرموت، حي الخليج، الرياض 13223', 'Hadhramaut St., Al Khaleej Dist., Riyadh 13223'), T('المملكة العربية السعودية', 'Saudi Arabia')],
      [I.user(20), T('زيارة المندوب', 'Rep visit'), T('تُرتَّب بموعد مسبق', 'Scheduled on-site visits'), T('للأطباء وإدارات العيادات والصيدليات في كافة مناطق المملكة الـ 13', 'For clinics, medical centers, and pharmacies across all 13 administrative regions')],
    ].map(([ic, t, v, d]) => `
    <div class="card">
      <span class="icon-tile" style="margin-bottom:14px">${ic}</span>
      <span style="display:block;font-size:11.5px;font-weight:700;color:var(--muted-2);margin-bottom:5px">${t}</span>
      <b style="display:block;font-family:var(--ff-d);font-size:15px;font-weight:800;line-height:1.7;margin-bottom:6px">${v}</b>
      <p style="font-size:12px">${d}</p>
    </div>`).join('')}
  </div>
  <p class="foot-note">${T('ساعات العمل: الأحد – الخميس، 9:00 صباحًا – 5:00 مساءً.', 'Working hours: Sunday – Thursday, 9:00 AM – 5:00 PM.')}</p>
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
    T('معايير تشغيلية صارمة متوافقة مع اشتراطات الهيئة العامة للغذاء والدواء لضمان مأمونية المنتجات وتتبعها وأعلى درجات الأمان السريري — وتُدار شؤون التسجيل والالتزام داخليًا في «جذور الجمال».',
      'Operating strictly within SFDA frameworks to ensure product authenticity, end-to-end traceability, and patient safety across the Kingdom — with registration and compliance managed in-house at Beauty Roots.'))}

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
        ${listRow(I.doc(17), T('تسجيل ومتابعة التراخيص', 'Active product registration'), T('تسجيل المنتجات والأجهزة الطبية لدى الهيئة العامة للغذاء والدواء وإدارة تجديدها دوريًا.', 'Full product registration with the SFDA and proactive renewal management.'))}
        ${listRow(I.eye(17), T('مراجعة الملصقات التعريفية', 'Artwork & label inspection'), T('تدقيق البيانات والملصقات والنشرات الداخلية والترجمات العربية قبل الطرح للتداول لضمان تطابقها الفني.', 'Rigorous pre-market review of labelling, Arabic translations, and IFUs.'))}
        ${listRow(I.check(17), T('التحقق النظامي عند الاستلام', 'Batch receipt verification'), T('مطابقة الشحنات، وفحص تواريخ الصلاحية، وسلامة الأختام والعبوات فور وصولها.', 'Physical and documentary verification of authenticity and shelf-life upon arrival.'))}
        ${listRow(I.box(17), T('التنسيق مع المصنّع', 'Manufacturer coordination'), T('نقل أي تحديثات أو تغييرات في المواصفات من المصنع إلى العيادة فور صدورها.', 'Relaying any specification updates or changes from the factory to the clinic as soon as they are issued.'))}
      </ul>
    </div>
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17.5px">${T('اليقظة والجاهزية عند المشكلة', 'Vigilance & readiness')}</h3>
      <ul>
        ${listRow(I.phone(17), T('قناة إبلاغ ويقظة مخصّصة', 'A dedicated vigilance channel'), T('مسار تواصل محدد وموّثق بزمن استجابة سريع لرصد أي ملاحظات فنية أو آثار جانبية — عبر الواتساب <span class="lat" dir="ltr">+966 56 201 7170</span> والبريد <span class="lat" dir="ltr">sales@beautyrooots.com</span>.', 'A standardized, documented reporting path with defined response times for adverse events and technical inquiries — via WhatsApp <span class="lat" dir="ltr">+966 56 201 7170</span> and email <span class="lat" dir="ltr">sales@beautyrooots.com</span>.'))}
        ${listRow(I.shield(17), T('إجراء استدعاء معتمد وموثّق', 'Documented recall protocol'), T('آلية عمل قياسية (SOP) جاهزة للتتبع وسحب الشحنات فورًا عند الحاجة التزامًا بتعليمات اليقظة الدوائية.', 'An SOP-driven batch trace and rapid market-withdrawal procedure in accordance with SFDA vigilance directives.'))}
        ${listRow(I.doc(17), T('الإبلاغ للجهات المختصة', 'Reporting to the authorities'), T('رفع تقارير الحوادث إلى الهيئة وفق الأنظمة، بالتنسيق مع المصانع.', 'Filing incident reports with the SFDA per regulations, in coordination with the factories.'))}
        ${listRow(I.thermo(17), T('نقل تعليمات التخزين والاستخدام', 'Passing on storage & use instructions'), T('تعليمات الحفظ والاستخدام الصادرة عن المصنع تصل مرفقة مع كل شحنة.', 'The manufacturer’s storage and usage instructions arrive attached to every shipment.'))}
      </ul>
    </div>
  </div>
</div></section>

<section class="section"><div class="container">
  ${secHead(T('وثيقة أمان العيادة والمريض', 'The clinical safety matrix'), T('القناة النظامية المعتمدة مقابل التوريد غير النظامي', 'Authorized vs. unauthorized supply channels'),
    T('الفرق يظهر في المستندات التي تُطلب من منشأتكم عند أول مراجعة رقابية. مقارنة محايدة بين القناة الرسمية النظامية والقنوات غير النظامية والسوق الموازي — دون ذكر أي منافس بالاسم.',
      'The difference shows in the documents your facility is asked for at its first regulatory inspection — a neutral comparison between the authorized official channel and unofficial grey-market channels, with no competitor named.'))}
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
    T('تعاقد وتوريد مباشر: استيراد حصري من المصانع العالمية الأم دون وسطاء أو أسواق ثانوية — والسلسلة مسار واحد متصل، كل مرحلة فيه موثّقة وقابلة للتتبع.',
      'Direct sourcing: exclusive contracts with verified manufacturers — zero intermediaries or secondary grey-market channels. The chain is one connected, documented, fully traceable path.'))}

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
    T('تسجيل مزدوج للشحنات: يُوثَّق رقم التشغيلة وتاريخ الصلاحية آليًا عند الإدخال للمستودع وعند الصرف للعميل، بما يتيح تتبع أي عبوة وصولًا إلى دفعة الإنتاج ومصنعها في أي وقت. وتصدر كل شحنة بفاتورة ضريبية رسمية، وبيان تسليم معتمد، وتعليمات الحفظ الخاصة بالمصنّع.',
      'Dual-point logging: batch numbers and expiry dates are recorded systematically at warehouse intake and dispatch, enabling instant backward-tracking of any unit to its exact manufacturing batch and production run. Every delivery ships with a certified tax invoice, delivery note, and the manufacturer’s storage instructions.'))}
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
        [I.box(20), T('مستودع مرّخص بالرياض', 'Licensed Riyadh facility'), T('منشأة تخزين مركزية مرخصة للمستلزمات الطبية ومستحضرات التجميل، مطابقة لاشتراطات الهيئة العامة للغذاء والدواء وخاضعة لتفتيشها.', 'A fully compliant, SFDA-inspected central facility for medical and cosmetic storage in Riyadh.')],
        [I.thermo(20), T('بيئة حفظ مراقبة', 'Controlled environment'), T('ضبط ومراقبة مستمرة لدرجات الحرارة والرطوبة، مع فصل وتصنيف دقيق لكل فئة علاجية.', 'Validated temperature and humidity monitoring with strict zoning by product classification.')],
        [I.check(20), T('صرف الأقدم صلاحيةً أولًا (FEFO)', 'FEFO inventory rotation'), T('إدارة مخزون منضبطة تضمن تدوير المنتجات وصرف الأسبق صلاحية أولًا بأول.', 'Strict First-Expired, First-Out dispensing methodology across the inventory.')],
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
      [I.pin(20), T('داخل مدينة الرياض', 'Within Riyadh'), T('أسطول توصيل مباشر ومبرَّد عبر مندوبينا المتخصصين للتسليم للمجمعات الطبية والعيادات.', 'Direct, climate-controlled delivery by our own dedicated fleet and specialised representatives.')],
      [I.truck(20), T('باقي مناطق المملكة', 'The rest of the Kingdom'), T('شبكة نقل وطنية مرخصة ومدققة تغطي كافة المناطق بنظام تتبع فوري لحالة الشحنة وحرارتها.', 'A fully audited, licensed pharma-logistics network covering all regions with real-time GPS and temperature tracking.')],
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
    T('كل اعتماد يُعرض باسمه الكامل وبمعناه العملي كمرجعية جودة موثقة — لا مجرد شعار بلا شرح.',
      'Every certification is backed by verified clinical documentation and transparent regulatory standards — not just symbolic badges.'))}

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
      <h3 style="font-size:19px">${T('الهيئة العامة للغذاء والدواء — المرجعية الأولى للثقة والأمان', 'Saudi Food & Drug Authority — the foundation of clinical trust')}</h3>
      <p>${T('تعمل «جذور الجمال» تحت مظلة رقابية متكاملة بإشراف الهيئة العامة للغذاء والدواء. جميع منتجاتنا من أجهزة ومستلزمات طبية وفيلر الهيالورونيك أسيد ومستحضرات العناية مسجلة ومدرجة رسميًا — وهو الشرط الأساسي والضمان النظامي لتداولها واستخدامها الآمن داخل المنشآت الطبية في المملكة.', 'Beauty Roots operates in full alignment with the Saudi Food and Drug Authority. All imported medical devices, dermal fillers and skincare products hold active, authenticated SFDA registrations — a non-negotiable prerequisite for legal distribution, clinic procurement and patient safety across the Kingdom.')}</p>
      <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
        ${chip(T('ترخيص توزيع الأجهزة الطبية: <span class="lat" dir="ltr">IDL-2024-MD-0095</span>', 'Medical devices distribution licence: <span class="lat" dir="ltr">IDL-2024-MD-0095</span>'), 'dark')}
        ${chip(T('ترخيص مستودع مستحضرات التجميل: <span class="lat" dir="ltr">SWL-2024-CM-0262</span>', 'Cosmetics storage & distribution licence: <span class="lat" dir="ltr">SWL-2024-CM-0262</span>'), 'dark')}
      </div>
    </div>
  </div>
</div></section>

<section class="section section--last"><div class="container">
  ${secHead(T('المستندات والتراخيص — متاحة لعملائنا عند الطلب', 'Local registration & verified documentation — available upon request'), T('قائمة الوثائق المعتمدة', 'The verified document set'))}
  <div class="grid grid-3">
    ${[
      [T('مستندات الشركة النظامية', 'Corporate governance records'), [T('السجل التجاري', 'Commercial Registration (CR)'), T('شهادة التسجيل الضريبي', 'Tax registration (ZATCA)'), T('عضوية الغرفة التجارية بالرياض', 'Riyadh Chamber of Commerce membership'), T('ترخيص منشأة الأجهزة الطبية', 'Medical-device establishment licence'), T('ترخيص المستودع المعتمد من الهيئة', 'SFDA-approved warehouse licence')]],
      [T('ملف وثائق ReMedium®', 'ReMedium® clinical & regulatory dossier'), [T('شهادة CE', 'CE certificate'), T('شهادة ISO 13485', 'ISO 13485 certificate'), T('اعتمادات GMP وMDSAP', 'GMP documentation & MDSAP audit certification'), T('إقرار المطابقة (Declaration of Conformity)', 'Declaration of Conformity (DoC)'), T('شهادة إدراج وتسجيل الهيئة', 'SFDA product registration certificate'), T('الملف الفني المعتمد الكامل', 'Complete technical dossier')]],
      [T('مستندات مستحضرات العناية', 'Cosmetic product compliance'), [T('شهادات إشعار وتسجيل منتجات العناية الكورية الصادرة من الهيئة', 'Official SFDA product listing and notification certificates for all distributed Korean skincare lines'), 'SKIN1004', 'Purito', 'Orjena', 'Herb Earth']],
    ].map(([t, items]) => `
    <div class="card">
      <h4 class="card__title" style="margin-bottom:14px">${t}</h4>
      <ul class="check-list">
        ${items.map((x) => `<li>${I.check(12)}${x}</li>`).join('')}
      </ul>
    </div>`).join('')}
  </div>
  <div style="display:flex;justify-content:center;margin-top:26px">${btn(T('طلب الملف الرقابي والشهادات المعتمدة', 'Request the complete regulatory & audit dossier'), u('company/contact'), 'dark')}</div>
  <p class="foot-note" style="text-align:center">${T('تُحذف من القائمة أي شهادة غير متاحة فعليًا — إدراج وعد غير مؤكد أخطر من عدم ذكره.', 'Any certificate not actually available is removed from the list — an unconfirmed promise is riskier than its absence.')}</p>
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
      [I.search(19), T('الأدلة المخبرية وبروتوكولات الحقن', 'Laboratory evidence & injection protocols'), T('بيانات انسيابية موثقة، دراسات منشورة، وبروتوكولات الحقن المعتمدة من المصنّع.', 'Validated rheological data, published studies, and standardized manufacturer injection protocols.'), u('medical/evidence'), false],
      [I.eye(19), T('معرض النتائج السريرية', 'Clinical results gallery'), T('حالات قبل وبعد خلف بوابة التحقق المهني وبطبقة الحماية.', 'Before/after cases behind the professional verification gate and protection layer.'), u('medical/results'), false],
      [I.shield(19), T('مكتبة التدريب والفيديوهات', 'Training modules & videos'), T('فيديوهات الحقن التوضيحية وإدارة الآثار الجانبية — ضمن صفحة الأدلة المخبرية.', 'Clinical demonstration videos and complication management — within the laboratory evidence page.'), u('medical/evidence') + '#training', false],
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
    T('نموذج الخدمة والشروط التجارية للعيادات', 'Clinic Partnership & Commercial Framework'),
    T('مسار تشغيلي منضبط، وفوترة مؤسسية واضحة، وبروتوكولات توريد مخصصة للمنشآت الصحية المرخصة.',
      'Transparent operational workflows, institutional billing, and structured supply protocols tailored for licensed medical facilities.'))}

<section class="section"><div class="container">
  ${secHead(T('نموذج الخدمة للعيادات', 'The service model for clinics'), T('خطوة بخطوة', 'Step by step'))}
  <div class="grid grid-5" style="gap:14px">
    ${[
      [T('فتح الحساب', 'Account opening'), T('تقديم ترخيص المنشأة الصحية، والسجل التجاري، والشهادة الضريبية، وبيانات التواصل المعتمدة.', 'Submission of the verified health facility licence, Commercial Registration (CR), VAT certificate, and authorized contact information.')],
      [T('الطلب والتسعير', 'Order & formal quote'), T('عبر زيارة المندوب، أو البريد الرسمي، أو واتساب الأعمال — مع عرض سعر رسمي وموثّق.', 'Via a dedicated sales-rep visit, official email, or business WhatsApp — with a formal, documented quotation.')],
      [T('التسليم المضبوط', 'Controlled dispatch'), T('استلام الشحنة مرفقة ببيان التسليم، وبيانات التشغيلة الكاملة، وفاتورة ضريبية نظامية.', 'Delivery receipt, complete batch records, and a certified ZATCA-compliant tax invoice with every dispatch.')],
      [T('التدريب السريري', 'Clinical training'), T('تدريب عملي ميداني للطاقم الطبي وتوفير عينات للتجربة عند أول تعامل.', 'On-site practical application training for the medical team, with trial demonstration units at initial onboarding.')],
      [T('المتابعة المستمرة', 'Consumption follow-up'), T('متابعة دورية لمعدل الاستهلاك لضمان جدولة وإعادة الطلب في وقته دون انقطاع.', 'Proactive stock replenishment monitoring to prevent clinical supply disruption.')],
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
        <li>${I.check(13)}${T('طرق الدفع المعتمدة: تحويل بنكي · مدى · فيزا · الدفع عند الاستلام.', 'Payment methods: corporate bank wire transfer · mada · Visa · cash on delivery (COD).')}</li>
        <li>${I.check(13)}${T('الفوترة: فاتورة ضريبية إلكترونية رسمية ومعتمدة تصدر نظامًا مع كل شحنة.', 'Invoicing: a fully compliant e-invoicing tax receipt issued with each shipment.')}</li>
        <li>${I.check(13)}${T('التسهيلات المؤسسية: خيارات سداد وتسهيلات مخصصة للمجمعات الطبية والمستشفيات بحسب الاتفاق المؤسسي المسبق.', 'Corporate accounts: flexible payment terms for verified healthcare groups and specialized polyclinics per institutional agreement.')}</li>
      </ul>
    </div>
    <div class="card" style="padding:28px 30px">
      <h3 class="card__title" style="font-size:17px;margin-bottom:16px">${T('سياسة الصلاحية والاستبدال', 'Shelf-life & replacement policy')}</h3>
      <ul class="check-list">
        <li>${I.check(13)}${T('الصلاحية المضمونة عند التسليم: التزام بتسليم شحنات بفترة صلاحية ممتدة (لا تقل عن 12 شهرًا) تضمن استقرار المخزون الطبي داخل العيادة.', 'Guaranteed shelf life: a fixed minimum validity threshold on arrival (no less than 12 months), keeping clinic stock stable.')}</li>
        <li>${I.check(13)}${T('استبدال التالف: استبدال مجاني وفوري للوحدات المتضررة من النقل عند الإبلاغ عنها خلال المهلة المحددة (48 ساعة من الاستلام).', 'Defective product replacement: free, immediate replacement of transit-damaged units reported within the defined inspection window (48 hours of receipt).')}</li>
        <li>${I.check(13)}${T('حماية المخزون قريب الانتهاء: آلية واضحة لإدارة وتدوير المخزون قريب الصلاحية داخل المنشأة الطبية بالتنسيق مع مسؤول الحساب.', 'Near-expiry protection: a dedicated inventory exchange policy for slow-moving, near-expiry stock within the client facility, coordinated with your account manager.')}</li>
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
     LABORATORY EVIDENCE & INJECTION PROTOCOLS — medical/evidence
  ============================================================ */
  add('medical/evidence',
    T('الأدلة المخبرية وبروتوكولات الحقن', 'Laboratory Evidence & Injection Protocols'),
    T('بيانات انسيابية وفيزيائية موثقة، دراسات مقارنة منشورة، وتوجيهات الحقن المعتمدة من المصنع للكوادر الطبية.', 'Validated rheological data, published comparative studies, and standardized manufacturer injection techniques for medical practitioners.'),
    'medical', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('المعلومات الطبية', 'Medical Information'), u('medical')], [T('الأدلة المخبرية وبروتوكولات الحقن', 'Laboratory Evidence & Injection Protocols')]],
    T('الأدلة المخبرية وبروتوكولات الحقن السريرية', 'Laboratory Evidence & Injection Protocols'),
    T('بيانات انسيابية وفيزيائية موثقة، دراسات مقارنة منشورة، وتوجيهات الحقن المعتمدة من المصنع للكوادر الطبية.',
      'Validated rheological data, published comparative studies, and standardized manufacturer injection techniques for medical practitioners.'),
    `<div class="page-hero__chips">${chip(T('العلوم والتقنيات السريرية', 'Clinical science & technique'))}${chip(T('للممارسين الصحيين', 'For practitioners'), 'green')}</div>`)}

<section class="section"><div class="container">
  ${secHead(T('الأدلة والبيانات المخبرية', 'Laboratory & rheological evidence'), T('أرقام موثقة خلف كل خاصية', 'Verified data behind every property'))}
  <div class="grid grid-4">
    ${[
      [T('خصائص المرونة واللزوجة (G′ / G″)', 'Viscoelastic characterization (G′ & G″)'), T('قياسات فيزيائية دقيقة تثبت قوة الرفع ومقاومة قوى الضغط الميكانيكي مع الحفاظ على الليونة الطبيعية.', 'Verified rheological measurements showing high elasticity, structural lift capacity, and shear deformation resistance.')],
      [T('ثبات قوة الانبثاق', 'Extrusion force stability'), T('تدفق هلامي سلس ومتوازن عبر الحقنة يضمن للممارس تحكمًا فائقًا في توزيع المادة دون إجهاد لليد.', 'Smooth, consistent plunger force profiles across all product lines for precise micro-droplet placement and minimal hand fatigue.')],
      [T('كفاءة الربط الكيميائي', 'Cross-linking efficiency (MoD)'), T('تقنية ترابط متعددة المراحل تضمن بقاء بقايا عامل الترابط الحر (Unreacted BDDE) دون مستويات الكشف القياسية العالمية.', 'Optimized degree of modification via advanced multi-stage cross-linking — residual unreacted BDDE undetectable under strict ISO/CE thresholds.')],
      [T('جداول الدراسات المنشورة', 'Published research & tables'), T('ملفات بحثية توضح معدلات التحلل الأنزيمي، ومؤشر انتفاخ المادة (Swelling Index)، ومقارنات الأداء مع معايير السوق.', 'Peer-reviewed stability studies, enzymatic degradation curves, and hydrophilic swelling index comparisons.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title" style="font-size:15px">${t}</h4><p style="line-height:1.95">${d}</p></div>`).join('')}
  </div>
</div></section>

<section class="section--mint"><div class="container">
  ${secHead(T('بروتوكولات الحقن المعتمدة من المصنّع', 'Standardized clinical protocols'), T('التقنية والعمق والأداة — لكل منتج', 'Technique, depth and tools — per product'),
    T('كما وردت في ملف المصنّع — والقرار السريري النهائي يعود للطبيب المعالج.', 'As specified by the manufacturer — final clinical judgement rests with the treating physician.'))}
  <div class="grid grid-3">
    ${[
      ['ReMedium® Fine', T('الحقن الخطي المتراجع السطحي (Linear Retrograde) أو الوخز النقطي المتسلسل (Serial Puncture).', 'Serial puncture, linear threading, or superficial micro-papular nappage.'), T('طبقة الأدمة السطحية.', 'Superficial dermis.'), T('إبرة قياس 30G.', '30G needle.')],
      ['ReMedium® Mid', T('الحقن المتشعّب (Fanning) أو الخطوط المتقاطعة وتحديد الحواف.', 'Linear retrograde, cross-hatching, or fanning technique.'), T('طبقة الجلد المتوسطة إلى العميقة / تحت الأنسجة الداخلية للشفاه.', 'Mid to deep dermis / submucosa (lips).'), T('إبرة 27G أو كانيولا 25G/27G.', '27G needle or 25G/27G cannula.')],
      ['ReMedium® Sub-Q', T('الترسيب النقطي العميق (Bolus) فوق السمحاق، أو خطوط الدعم العميق بالكانيولا.', 'Bolus deposition, deep linear retrograde, or supraperiosteal layering.'), T('الطبقة العميقة تحت الجلد وفوق مستوى العظم مباشرة.', 'Deep subcutaneous / supraperiosteal plane.'), T('كانيولا غير حادة (Blunt) 25G/27G أو إبرة 25G.', '25G/27G blunt-tip cannula or 25G needle.')],
    ].map(([n, tech, depth, tools]) => `
    <div class="card">
      <b class="lat" dir="ltr" style="display:block;font-size:16.5px;font-weight:800;margin-bottom:12px">${n}</b>
      <ul class="check-list">
        <li>${I.check(13)}<span><b style="font-family:var(--ff-d)">${T('تقنية الحقن:', 'Technique:')}</b> ${tech}</span></li>
        <li>${I.check(13)}<span><b style="font-family:var(--ff-d)">${T('العمق المستهدف:', 'Target depth:')}</b> ${depth}</span></li>
        <li>${I.check(13)}<span><b style="font-family:var(--ff-d)">${T('الأداة الموصى بها:', 'Recommended tools:')}</b> ${tools}</span></li>
      </ul>
    </div>`).join('')}
  </div>
</div></section>

<section class="section section--last" id="training"><div class="container">
  ${secHead(T('مكتبة التدريب والفيديوهات المعتمدة', 'Practitioner training modules & video resources'), T('فيديوهات الحقن وإدارة الآثار الجانبية', 'Demonstration videos & complication management'))}
  <div class="grid grid-2" style="gap:16px">
    ${[
      [T('فيديوهات توضيحية للحقن', 'Video demonstrations'), T('مقاطع سريرية عالية الدقة توضح تشريح المناطق الحساسة ونقاط الدخول الآمنة وتوزيع الحجم.', 'High-definition clinical videos demonstrating anatomical danger zones, optimal entry points, and bolus distribution.')],
      [T('إدارة الآثار الجانبية', 'Complication management'), T('إرشادات عملية للتعامل مع بروتوكولات التذويب (Hyaluronidase) والوقاية من الانسدادات الوعائية والتدخلات الفورية.', 'Standard clinical protocols for hyaluronidase reversal, vascular occlusion prevention, and immediate safety interventions.')],
    ].map(([t, d]) => `<div class="card"><h4 class="card__title">${t}</h4><p style="line-height:1.95">${d}</p></div>`).join('')}
  </div>
  <div style="margin-top:16px">${noteStrip(T('المواد المرئية قيد التجميع من المصنّع والأطباء الشركاء وتُضاف فور اعتمادها.', 'Video material is being collected from the manufacturer and partner physicians and will be added once approved.'))}</div>
  <div style="display:flex;justify-content:center;margin-top:26px">${btn(T('تحميل الملف العلمي ودراسات المنتج', 'Download the complete clinical dossier & study tables'), u('company/contact'), 'dark')}</div>
</div></section>
`);

  /* ============================================================
     PROTECTED CLINICAL RESULTS GALLERY — medical/results
  ============================================================ */
  add('medical/results',
    T('معرض النتائج السريرية', 'Clinical Results Gallery'),
    T('حالات قبل وبعد موثقة — خلف بوابة التحقق المهني وبطبقة حماية كاملة للخصوصية.', 'Documented before/after cases — behind the professional verification gate with full confidentiality protection.'),
    'medical', `
${pageHero(ctx, [[T('الرئيسية', 'Home'), u('')], [T('المعلومات الطبية', 'Medical Information'), u('medical')], [T('معرض النتائج السريرية', 'Clinical Results Gallery')]],
    T('التحقق المهني وسرية الحالات السريرية', 'Professional Verification & Clinical Confidentiality'),
    T('هذا القسم مخصص حصريًا للكوادر الطبية والممارسين الصحيين المرخصين في المملكة العربية السعودية.',
      'This clinical gallery is strictly restricted to licensed medical practitioners and dermatologists within the Kingdom of Saudi Arabia.'),
    `<div class="page-hero__chips">${chip(T('بوابة مقيدة للممارسين الصحيين', 'Restricted practitioner portal'), 'green')}</div>`)}

<section class="section"><div class="container">
  <div class="dark-panel gate" data-gate>
    <span class="icon-badge">${I.lock(24)}</span>
    <h2>${T('تنبيه مهني وقانوني', 'Professional & legal notice')}</h2>
    <p>${T('يحتوي المعرض على مواد سريرية وصور لحالات علاجية خاضعة لبروتوكولات الخصوصية والموافقة الطبية المستنيرة. تُعرض هذه المواد لغرض التقييم السريري والتدريب الطبي فقط — ويُمنع منعًا باتًا تصوير الشاشة أو حفظ الملفات أو إعادة استخدام الصور في أي وسيلة إعلانية أو منصة تواصل.', 'The following material contains validated clinical cases and procedural imagery subject to formal patient consent protocols. Visual assets are provided solely for clinical evaluation, anatomical review, and product behavior analysis — unauthorized capturing, downloading, screen recording, or external marketing reproduction is strictly prohibited.')}</p>
    <label>
      <input type="checkbox">
      <span>${T('أقر بأنني طبيب أو ممارس صحي مرخص، وأوافق على شروط سرية واستخدام المواد السريرية المعروضة.', 'I confirm that I am a licensed healthcare professional and agree to the clinical data protection and confidentiality terms.')}</span>
    </label>
    <div style="display:flex;justify-content:center">
      <button class="btn btn--green" data-gate-enter disabled>${T('الدخول إلى المعرض السريري', 'Enter the clinical showcase')}<span class="btn__circle">${I.arrow()}</span></button>
    </div>
    <p class="small">${T('يُسجَّل إقرار الدخول بتاريخه ووقته، وتُطبَّق العلامة المائية الديناميكية والتتبع الرقمي على كل المواد.', 'The entry attestation is logged with date and time; dynamic watermarking and digital tracing apply to all material.')}</p>
  </div>
</div></section>

<section class="section section--last gated" hidden><div class="container">
  ${secHead(T('هيكل المعرض', 'Gallery structure'), T('ثلاث فئات — لكل منتج حالاته وبياناته السريرية', 'Three sections — cases and clinical data per product'),
    T('الحالات تُجمع من العيادات الشريكة بموافقة خطية موثقة، وتُنشر مع بياناتها السريرية الكاملة.', 'Cases are collected from partner clinics with documented written consent and published with their full clinical data.'))}
  <div class="grid grid-3">
    ${[
      ['ReMedium® Fine', T('الخطوط السطحية والهالات', 'Superficial lines & tear troughs'), T('لقطات قريبة عالية الدقة لعلاج الهالات (Tear Trough) والخطوط الدقيقة حول الفم والعين — مع الكمية المحقونة، وقياس الإبرة (30G)، وتقنية الحقن، وتوقيت الصورة.', 'High-resolution close-ups of periorbital (tear trough) or perioral fine-line treatments — with total injected volume, needle size (e.g., 30G), technique, and observation timeline.')],
      ['ReMedium® Mid', T('الشفاه والتجاعيد المتوسطة', 'Lips & moderate folds'), T('حالات تحديد وتعبئة الشفاه وعلاج خطوط الابتسامة العميقة — مع الكمية بالملليلتر، ونوع الأداة ومقاسها، وتوقيت الصورة بعد الإجراء.', 'Lip contouring/volumization and nasolabial-fold corrections — with injected volume in mL, tool and gauge, and whether the after photo is immediate or post-edema.')],
      ['ReMedium® Sub-Q', T('النحت والتحديد العميق', 'Deep volumization & contouring'), T('لقطات كاملة للوجه لنحت خط الفك وإبراز الذقن ورفع الوجنتين — مع توزيع الكمية لكل منطقة، ومستوى الحقن، والأداة المستخدمة.', 'Full-face frontal and profile views of jawline definition, chin augmentation, or malar projection — with per-area volume distribution, injection plane, and cannula/needle gauge.')],
    ].map(([n, t, d]) => `
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <b class="lat" dir="ltr" style="font-size:16px;font-weight:800">${n}</b>
        ${chip(T('الحالات قيد التجميع', 'Cases in collection'), 'warn')}
      </div>
      <h4 class="card__title" style="font-size:14.5px">${t}</h4>
      <p style="line-height:1.95">${d}</p>
    </div>`).join('')}
  </div>
  <div style="margin-top:16px">${noteStrip(T('تُعرض الصور بعلامة مائية ديناميكية (وقت الاطلاع ورقم الجلسة) وبصمة رقمية داخل الملف، مع تعطيل التحميل والنسخ — وفق طبقات الحماية الثلاث المعتمدة.', 'Images are shown with a dynamic watermark (view time and session ID) and an embedded digital fingerprint, with download and copying disabled — per the three approved protection layers.'))}</div>
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
    T('طلب عرض سعر — نموذج التوريد الموحد', 'Request a Formal Quotation'),
    T('قناة الاستفسار الرسمية للمنشآت الصحية والصيدليات ومراكز العناية المرخصة في المملكة. مستندات فتح الحساب لا تُطلب هنا — يطلبها الفريق بعد أول تواصل.',
      'The unified direct inquiry channel for licensed healthcare facilities, pharmacies, and aesthetic centers across the Kingdom. Account-opening documents are not requested here — the team asks for them after first contact.'))}

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
              <button type="button" class="cchip is-on">${T('عيادة تجميل', 'Aesthetic clinic')}</button>
              <button type="button" class="cchip">${T('مجمع طبي / مستشفى', 'Polyclinic / hospital')}</button>
              <button type="button" class="cchip">${T('صيدلية', 'Retail pharmacy')}</button>
              <button type="button" class="cchip">${T('مركز عناية', 'Care center')}</button>
            </div>
          </div>
          ${field(T('اسم المنشأة', 'Facility name'), 'facility', T('كما في الترخيص', 'As on the licence'))}
          ${field(T('المدينة', 'City'), 'city', T('الرياض، جدة، الدمام…', 'Riyadh, Jeddah, Dammam…'))}
          ${field(T('رقم الجوال / واتساب', 'Mobile / WhatsApp'), 'phone', '+966 5X XXX XXXX', true, false, 'tel')}
          ${field(T('البريد الإلكتروني', 'Email'), 'email', 'name@clinic.sa', true, false, 'email')}
          <div class="field field--wide">
            <label>${T('المنتجات محل الاهتمام — اختيار متعدد', 'Products of interest — multi-select')} <span class="req">*</span></label>
            <div class="choice-chips" data-multi>
              <button type="button" class="cchip">ReMedium® Fine</button>
              <button type="button" class="cchip">ReMedium® Mid</button>
              <button type="button" class="cchip">ReMedium® Sub-Q</button>
              <button type="button" class="cchip">${T('فيلر جراحات العيون HA', 'HA Ophthalmic')}</button>
              <button type="button" class="cchip">${T('مستحضرات العناية الكورية', 'Korean skincare lines')}</button>
            </div>
          </div>
        </div>
        <h3 style="margin-top:28px">${T('حقول اختيارية', 'Optional fields')}</h3>
        <div class="form-grid">
          <div class="field">
            <label>${T('الكمية التقديرية للطلب الأول', 'Estimated initial volume')}</label>
            <div class="choice-chips">
              <button type="button" class="cchip">${T('طلب تجريبي (١–١٠ عبوات)', 'Trial order (1–10 units)')}</button>
              <button type="button" class="cchip">${T('شريحة متوسطة (١١–٥٠ عبوة)', 'Small batch (11–50 units)')}</button>
              <button type="button" class="cchip">${T('توريد كميات كبرى (+٥٠ عبوة)', 'Bulk supply (50+ units)')}</button>
            </div>
          </div>
          <div class="field">
            <label>${T('هل تتعاملون معنا حاليًا؟', 'Do you already work with us?')}</label>
            <div class="choice-chips">
              <button type="button" class="cchip">${T('نعم', 'Yes')}</button>
              <button type="button" class="cchip">${T('لا', 'No')}</button>
            </div>
          </div>
          <label class="checkbox-row field--wide"><input type="checkbox" name="visit">${T('أود جدولة زيارة ممثل المبيعات للمنشأة', 'Yes, request an in-clinic sales representative visit')}</label>
          ${field(T('ملاحظات', 'Notes'), 'notes', T('أي تفاصيل تودون إضافتها…', 'Anything you would like to add…'), false, true, 'textarea')}
        </div>
        <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px;border-top:1px solid var(--line);padding-top:22px">
          <label class="checkbox-row"><input type="checkbox" data-consent>${T('أوافق على', 'I agree to the')} <a href="${u('legal/privacy')}" style="color:var(--green-600);font-weight:700">${T('سياسة الخصوصية', 'Privacy Policy')}</a> ${T('ومعالجة بيانات المنشأة.', 'and processing of facility data.')}</label>
          <label class="checkbox-row"><input type="checkbox" name="eligibility">${T('أقر بأن المنشأة مرخصة نظامًا، وأن التوريد الطبي مخصص للمنشآت الصحية المعتمدة فقط.', 'I acknowledge that supply and wholesale medical orders are strictly restricted to licensed healthcare entities and accredited facilities.')}</label>
          <div><button type="submit" class="btn btn--green">${T('إرسال الطلب', 'Send request')}<span class="btn__circle">${I.arrow()}</span></button></div>
        </div>
      </div>
      <div class="thanks" data-form-thanks hidden>
        <b>${T('شكرًا لتواصلكم — تم استلام طلبكم بنجاح.', 'Thank you — your request has been received.')}</b>
        <p>${T('سيقوم فريق المبيعات الطبية بمراجعة التفاصيل وإصدار عرض السعر الرسمي خلال 24 ساعة عمل.', 'A Beauty Roots medical sales representative will review your inquiry and provide a formal quotation within 24 business hours.')}</p>
        <p style="margin-top:10px;font-size:11.5px;color:var(--warn-ink)">${T('ملاحظة تقنية: هذا النموذج واجهة فقط حاليًا — الإرسال الفعلي (بريد + جدول طلبات) يُوصل في مرحلة الربط الخلفي.', 'Technical note: this form is front-end only for now — actual submission (email + request log) is wired in the backend phase.')}</p>
      </div>
    </form>
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="dark-strip" style="padding:28px 30px">
        <h3 style="font-size:16px;margin-bottom:14px">${T('بعد الإرسال', 'After you send')}</h3>
        <ul style="display:flex;flex-direction:column;gap:11px">
          ${[
            T('شاشة شكر تؤكد إصدار عرض السعر خلال 24 ساعة عمل.', 'A thank-you screen confirming a formal quotation within 24 business hours.'),
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
      [T('الأنظمة والتراخيص', 'Regulatory'), T('كيف تتحقق المنشأة الصحية من تسجيل الفيلر واعتماده رسميًا لدى الهيئة؟', 'How to Verify That a Dermal Filler Is Fully SFDA-Approved'), T('بقلم فريق الشؤون التنظيمية', 'By the Regulatory Affairs Team'), 'docs.jpg'],
      [T('الجودة والتخزين', 'Storage & Quality'), T('ظروف الحفظ والتخزين: كيف تؤثر درجات الحرارة على أمان الفيلر ونتيجة الحقن؟', 'Storage Conditions: How Temperature Directly Affects Filler Longevity & Safety'), T('بقلم فريق الإمداد واللوجستيات', 'By the Supply Chain Team'), 'warehouse.jpg'],
      [T('العلوم الطبية', 'Clinical Science'), T('جل الهيالورونيك أحادي الطور: كيف تضمن تقنية ReMedium ثباتًا ومظهرًا طبيعيًا؟', 'Monophasic Hyaluronic Acid: The Science Behind ReMedium’s Natural Integration'), T('بقلم الفريق الطبي والسريري', 'By the Medical Advisory Team'), 'inject.jpg'],
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
        <span class="who"><img src="/assets/img/portrait.jpg" alt=""><b>${T('عرض توضيحي — تُنشر المراجعات الموثقة فور توفرها', 'Display sample — verified reviews will be published once available')}</b></span>
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

  const legalSec = (t, d) => `
    <div>
      <h4 style="font-family:var(--ff-d);font-size:15.5px;font-weight:800;color:var(--ink);margin-bottom:8px">${t}</h4>
      <p>${d}</p>
    </div>`;

  add('legal/privacy',
    T('سياسة الخصوصية وحماية البيانات', 'Privacy Policy'),
    T('ممارسات جمع ومعالجة البيانات بما يتوافق مع نظام حماية البيانات الشخصية السعودي ولائحته التنفيذية.', 'Regulatory compliance and data protection practices under the Saudi Personal Data Protection Law (PDPL).'),
    '', legalShell(T('سياسة الخصوصية وحماية البيانات', 'Privacy Policy'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    ${legalSec(T('١. هوية جهة التحكم في البيانات', '1. Data controller identification'),
      T('تُصاغ هذه السياسة وتُطبق باسم <b style="color:var(--ink)">شركة جذور الجمال للتجارة</b> (شركة ذات مسؤولية محدودة، مسجلة بالسجل التجاري في الرياض، المملكة العربية السعودية) بصفتها جهة التحكم المسؤولة عن جمع ومعالجة البيانات عبر هذا الموقع.', 'This Privacy Policy governs the processing of personal and corporate data collected by <b style="color:var(--ink)">Beauty Roots Trading Company, LLC</b> (Commercial Registration: Riyadh, Saudi Arabia), operating as the designated Data Controller.'))}
    <div class="card card--mint" style="border:0">
      <h4 class="card__title">${T('٢. بند الأهلية وحصرية التوريد الطبي للمنشآت (إلزامي ونظامي)', '2. B2B commercial & professional eligibility clause (mandatory)')}</h4>
      <p style="font-size:13px;line-height:2.1">${T('تُورَّد وتُباع منتجات ReMedium® من مستحضرات التجميل الطبي والأجهزة والمستلزمات الطبية للمنشآت الصحية المرخّصة والمصنّفة المعتمدة لدى شركة جذور الجمال فقط، ولا تُباع للأفراد ولا لأي جهة غير مرخّصة. تُستخدم البيانات التي نجمعها عبر نماذج الموقع للتحقق من استيفاء هذه الأهلية النظامية وإتمام إجراءات التوريد والتعاقد الرسمي، وتحتفظ شركة جذور الجمال بالحق الكامل في رفض أي طلب أو إلغاء أي تعامل لا يستوفي التراخيص والاشتراطات المحددة نظامًا.', 'ReMedium® medical aesthetic products and regulated medical devices are exclusively supplied and sold to authorized, SFDA-licensed healthcare facilities verified by Beauty Roots Trading Company. These products are not sold to individual consumers or unlicensed entities. Data collected via website quotation forms, inquiries, and professional verification gates is processed strictly to verify institutional eligibility, validate professional status, and fulfill commercial supply agreements. Beauty Roots reserves the absolute right to reject any inquiry, quotation, or procurement request that fails to fulfill regulatory and licensing prerequisites.')}</p>
    </div>
    ${legalSec(T('٣. البيانات التي يتم جمعها', '3. Categories of data collected'),
      T('بيانات التواصل والمنشأة: الاسم الكامل، والبريد الإلكتروني الرسمي، ورقم الجوال/واتساب، واسم المنشأة الصحية ومدينتها، ونوع النشاط عبر نموذج طلب عرض السعر · إقرارات الصفة المهنية: تسجيل إقرار الممارس الصحي الإلكتروني قبل الاطلاع على أقسام المعلومات والنتائج السريرية · ملفات تعريف الارتباط والبيانات الفنية: ملفات التتبع الأساسية والتحليلية لتحسين تجربة التصفح وحماية جلسات الدخول · الخرائط المضمنة: بيانات الموقع القياسية المتولدة عند التفاعل مع خريطة مقر الشركة (Google Maps).', 'Institutional & contact data: representative full name, official corporate email, phone/WhatsApp number, healthcare facility name, licence category and city submitted via quote requests · Professional self-attestation: digital confirmation logs certifying healthcare-practitioner status prior to accessing gated clinical sections · Technical & analytics data: IP address, browser type, interaction telemetry, and standard essential/analytical cookies · Embedded map services: location interactions via embedded Google Maps for corporate address verification.'))}
    ${legalSec(T('٤. الأغراض والأساس النظامي للمعالجة', '4. Legal basis & purpose of processing'),
      T('التحقق من صفة المنشأة وإصدار عروض الأسعار الرسمية وجدولة التوريد والتدريب · الالتزام بمتطلبات التوثيق الرقابي واليقظة الصادرة عن الهيئة العامة للغذاء والدواء · حماية أمن الموقع والتحقق من الاستخدام المصرح به للمعلومات الطبية المحمية.', 'To process B2B supply requests, price quotations, and contract negotiations · to authenticate commercial licences and SFDA compliance requirements · to optimize technical performance, secure digital assets, and protect confidential clinical media.'))}
    ${legalSec(T('٥. حفظ البيانات وسريتها', '5. Data storage, security & retention'),
      T('تُحفظ البيانات داخل خوادم آمنة ومشفرة، ولا تتم مشاركتها أو بيعها لأي أطراف خارجية، ويقتصر تداولها على الإدارات المختصة لإتمام التعاقد النظامي، ولا يُحتفظ بها إلا للمدد اللازمة نظامًا.', 'All collected records are stored on secured servers adhering to strict encryption protocols, never shared or sold to external parties, and retained only for the periods necessary to fulfill contractual obligations or statutory regulatory mandates within Saudi Arabia.'))}
    ${legalSec(T('٦. حقوق أصحاب البيانات', '6. Data subject rights & inquiries'),
      T('يحق لممثلي المنشآت والمستخدمين وفق نظام حماية البيانات الشخصية طلب مراجعة بياناتهم أو تحديثها أو حذفها عبر التواصل المباشر مع مسؤول الامتثال عبر البريد: <span class="lat" dir="ltr">compliance@beautyroots.sa</span>.', 'In accordance with the PDPL, users may request access, rectification, or erasure of their personal data by contacting the Data Compliance Desk at <span class="lat" dir="ltr">compliance@beautyroots.sa</span>.'))}
  </div>
`));

  add('legal/terms',
    T('شروط وأحكام الاستخدام', 'Terms of Use'),
    T('القواعد المنظمة لاستخدام المنصة، وحقوق الملكية الفكرية، وضوابط سرية المحتوى السريري لشركة جذور الجمال.', 'Rules, intellectual property rights, and clinical data restrictions governing the use of the Beauty Roots platform.'),
    '', legalShell(T('شروط وأحكام الاستخدام', 'Terms of Use'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    ${legalSec(T('١. قبول الشروط والأهلية النظامية', '1. Acceptance of terms & eligibility'),
      T('يخضع استخدام هذا الموقع للشروط والأحكام الموضحة هنا ولجميع الأنظمة واللوائح المعمول بها في المملكة العربية السعودية، ويُعد تصفحك للموقع إقرارًا بالموافقة التامة عليها. يقتصر طلب التوريد التجاري والمنتجات الطبية على المنشآت الصحية المرخصة والممارسين المعتمدين من الهيئة العامة للغذاء والدواء.', 'By accessing this website, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations in the Kingdom of Saudi Arabia. Wholesale procurement and medical supply requests are strictly restricted to verified, SFDA-licensed healthcare institutions and medical professionals.'))}
    ${legalSec(T('٢. حقوق الملكية الفكرية والعلامة التجارية', '2. Intellectual property rights'),
      T('جميع المواد المنشورة على هذا الموقع — بما في ذلك العلامات التجارية، والهوية البصرية، والنصوص التعريفية، والملفات العلمية، والتصاميم، والبرمجيات، والبيانات — ملكية حصرية لشركة جذور الجمال للتجارة وتخضع للحماية بموجب نظام حماية حقوق المؤلف ونظام العلامات التجارية في المملكة. يُمنع منعًا باتًا نسخ أو اقتباس أو إعادة استخدام أي جزء منها دون إذن خطي مسبق.', 'All content published on this platform — including brand trademarks, corporate identity assets, product descriptions, scientific documentation, graphics, interface designs, and code — is the exclusive proprietary property of Beauty Roots Trading Company. Unauthorized reproduction, modification, distribution, or commercial exploitation without prior written consent is strictly prohibited.'))}
    ${legalSec(T('٣. سرية وحماية صور ونتائج الحالات السريرية', '3. Protection & confidentiality of clinical imagery'),
      T('تخضع كافة صور الحالات السريرية (قبل وبعد) والبيانات العلاجية المعروضة في قسم المعلومات الطبية لأعلى معايير الحماية والسرية: تُعرض لغرض التقييم المهني والاطلاع العلمي للكوادر الطبية المرخصة فقط · يُحظر تمامًا تصوير الشاشة أو تحميل الملفات أو إعادة نشر الصور في أي وسيلة إعلانية أو حملة تسويقية أو منصة تواصل اجتماعي · تُطبّق الشركة تقنيات العلامة المائية الديناميكية والتتبع الرقمي لرصد أي تسريب واتخاذ كافة الإجراءات اللازمة.', 'All clinical before-and-after photographs, case studies, and treatment records hosted within the Medical Information section are confidential and protected by law: clinical assets are made available exclusively for verified professional evaluation and educational purposes · capturing, downloading, screenshotting, scraping, or republishing any clinical imagery on external social media, advertising channels, or third-party websites is strictly forbidden · Beauty Roots utilizes dynamic tracking, forensic watermarking, and active scanning protocols to trace and legally pursue unauthorized distribution.'))}
    ${legalSec(T('٤. ضوابط استخدام قسم المعلومات الطبية', '4. Terms of access for the medical information hub'),
      T('يقتضي الدخول إلى معرض النتائج السريرية وحالات قبل وبعد إقرار المستخدم الصريح بصفته المهنية كطبيب أو ممارس صحي مرخص. يُعد أي تحايل رقمي أو تقديم بيانات غير صحيحة للوصول إلى هذه المواد انتهاكًا مباشرًا لاتفاقية الاستخدام.', 'Accessing the clinical before-and-after showcase strictly requires self-attestation of licensed healthcare-practitioner status. Providing false credentials or circumventing digital access controls constitutes a direct breach of these Terms of Use.'))}
    ${legalSec(T('٥. حدود المسؤولية', '5. Limitation of liability'),
      T('تُقدّم جذور الجمال المواصفات الفنية وبروتوكولات المصنّع لأغراض التوريد والتعريف الطبي. وتقع المسؤولية المهنية الكاملة للتشخيص وتحديد ملاءمة المنتج وإجراءات الحقن على عاتق الطبيب المعالج والمنشأة الصحية المشرفة وفق معايير الممارسة الطبية المعتمدة.', 'Beauty Roots provides technical specifications, manufacturer protocols, and product details for informational and procurement purposes. The company accepts no liability for clinical decisions, off-label applications, or treatment outcomes executed by treating practitioners, who retain full professional and statutory responsibility for patient care.'))}
    ${legalSec(T('٦. النظام الحاكم والاختصاص القضائي', '6. Governing law & jurisdiction'),
      T('تخضع هذه الشروط وتُفسر وفقًا للأنظمة واللوائح والتعليمات السارية في المملكة العربية السعودية، وتختص المحاكم واللجان القضائية المختصة في مدينة الرياض حصريًا بالفصل في أي نزاع ينشأ عن استخدام هذا الموقع أو تفسير بنوده.', 'These Terms shall be governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia. Any dispute arising out of or related to the use of this website falls under the exclusive jurisdiction of the competent courts in Riyadh, Saudi Arabia.'))}
  </div>
`));

  add('legal/medical-disclaimer',
    T('إخلاء المسؤولية الطبية والسريرية', 'Medical & Clinical Disclaimer'),
    T('حدود المحتوى المنشور، ونطاق المعلومات الفنية، وضوابط الاستخدام المهني المخصص للممارسين الصحيين.', 'Professional boundaries, clinical scope of information, and restricted practitioner usage guidelines.'),
    '', legalShell(T('إخلاء المسؤولية الطبية والسريرية', 'Medical & Clinical Disclaimer'), `
  <div style="display:flex;flex-direction:column;gap:18px;font-size:14px;line-height:2.1;color:var(--muted)">
    ${legalSec(T('١. طبيعة المعلومات المنشورة على الموقع', '1. Nature of website information'),
      T('تُقدَّم كافة البيانات العلمية، ومواصفات المنتجات، وبروتوكولات الحقن، والنتائج السريرية المنشورة على هذا الموقع لأغراض التعريف المهني والتثقيف الفني والتوريد التجاري المعتمد فقط. لا يُعتبر أي جزء من هذا المحتوى استشارة طبية مباشرة، أو تشخيصًا علاجيًا، أو بديلًا عن التقييم السريري المستقل للمرضى.', 'All scientific data, product profiles, injection protocols, and clinical outcomes published on this website are provided strictly for general informational, educational, and B2B procurement purposes. Nothing on this platform constitutes medical advice, clinical diagnosis, or patient-specific treatment recommendations.'))}
    ${legalSec(T('٢. حصرية الاستخدام بواسطة الممارس الصحي المرخص', '2. Practitioner-only medical use'),
      T('تُصنَّف منتجات ReMedium® من فيلر حمض الهيالورونيك، ومحاليل جراحات العيون، والأجهزة الطبية ذات الصلة كمنتجات ذات استخدام مهني مقيد. يُحظر استخدامها أو حقنها إلا بواسطة أطباء وممارسين صحيين مرخصين ومعتمدين من الهيئة العامة للغذاء والدواء داخل منشآت طبية مرخصة نظامًا.', 'ReMedium® hyaluronic-acid dermal fillers, ophthalmic viscoelastic solutions, and associated medical devices distributed by Beauty Roots are strictly classified for professional use only — administered solely by qualified, SFDA-licensed physicians and healthcare practitioners within accredited medical institutions under Saudi healthcare regulations.'))}
    ${legalSec(T('٣. انتفاء العلاقة العلاجية مع الأفراد', '3. No patient–doctor relationship'),
      T('لا يُنشئ التصفح أو الاطلاع على بروتوكولات الحقن أو التواصل عبر نماذج الموقع أي علاقة طبيب ومريض. يجب على الأفراد الباحثين عن العلاجات التجميلية مراجعة العيادات والمراكز الصحية المعتمدة للحصول على الاستشارة المباشرة من الطبيب المختص.', 'Interacting with this website, reviewing clinical protocols, or submitting an inquiry does not create a physician–patient relationship. Individual patients seeking aesthetic or dermatological treatments must consult a licensed medical specialist at an authorized clinic.'))}
    ${legalSec(T('٤. استقلالية القرار الطبي والمسؤولية السريرية', '4. Clinical decision-making & off-label use'),
      T('تلتزم جذور الجمال بتوفير بيانات المصنّع والدراسات المخبرية المعتمدة، وتظل المسؤولية الطبية والنظامية الكاملة لتقييم الحالات، وتحديد موانع الاستخدام، واختيار تقنية وعمق الحقن، وإدارة أي تفاعلات سريرية على عاتق الطبيب المعالج والمنشأة الطبية المشرفة.', 'While Beauty Roots ensures the accuracy of manufacturer documentation and laboratory studies, treating physicians retain sole clinical responsibility for patient assessment, contraindication screening, injection depth, volumetric dosing, and management of any adverse events.'))}
    <div class="card card--mint" style="border:0">
      <h4 class="card__title">${T('شريط التنبيه الطبي المختصر', 'Persistent medical disclaimer bar')}</h4>
      <p style="font-size:13px;line-height:2.1">${T('«إخلاء مسؤولية طبية: محتوى هذا القسم موجه حصريًا للممارسين الصحيين المرخصين. منتجات ReMedium® تُستخدم وتُحقن بيد طبيب مرخص فقط.» — يظهر هذا السطر مع رابط الصفحة أسفل كل صفحة تحمل محتوى طبيًا.', '“Medical disclaimer notice: content in this section is intended exclusively for licensed healthcare professionals. ReMedium® products must be administered strictly by certified medical practitioners.” — this line, with a link to this page, appears beneath every page carrying clinical content.')}</p>
    </div>
  </div>
`));

  return pages;
}
