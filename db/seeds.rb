# Idempotent: safe to run on an existing database. Everything here mirrors what
# the static site already publishes, so the first run changes nothing visible —
# it only moves the content to where the dashboard can edit it.

# ---------------------------------------------------------------- people
admin = User.find_or_initialize_by(email: "mrefaie@milaknights.com")
if admin.new_record?
  password = ENV["SEED_ADMIN_PASSWORD"]
  if password.blank?
    # Outside development an unset password would quietly install a publicly
    # known one, which is a backdoor with a friendly name.
    raise "SEED_ADMIN_PASSWORD is required outside development" unless Rails.env.development?

    password = "ChangeMe-2026!"
    puts "!! no SEED_ADMIN_PASSWORD given — the admin account uses the development placeholder"
  end

  admin.assign_attributes(name: "محمد الرفاعي", role: "admin", password: password)
  admin.save!
end

# ---------------------------------------------------------------- settings
Setting.write_all(
  "contact_phone" => "+966 56 201 7170",
  "contact_email" => "sales@beautyrooots.com",
  "whatsapp_number" => "966562017170",
  "address_ar" => "شارع حضرموت، حي الخليج، الرياض 13223 — المملكة العربية السعودية",
  "address_en" => "Hadhramaut St., Al Khaleej Dist., Riyadh 13223 — Saudi Arabia",
  "working_hours_ar" => "الأحد إلى الخميس · 9 صباحًا – 5 مساءً",
  "working_hours_en" => "Sunday to Thursday · 9am – 5pm",
  "company_name_ar" => "شركة جذور الجمال للتجارة",
  "company_name_en" => "Beauty Roots Trading Co.",
  "cr_number" => "1010909714",
  "vat_number" => "311755763600003",
  "maps_url" => "https://maps.google.com/?q=Beauty+Roots+Trading+Riyadh",
  "quote_sla_ar" => "يراجع فريق المبيعات الطبية التفاصيل ويصدر عرض السعر خلال 24 ساعة عمل.",
  "quote_sla_en" => "The medical sales team reviews the details and issues a formal quotation within 24 business hours."
)

# --------------------------------------------------------- certifications
[
  [ "SFDA", "تسجيل الغذاء والدواء السعودية", "Saudi Food & Drug Authority registration",
    "Saudi Food & Drug Authority",
    "تسجيل المنتج لدى الهيئة العامة للغذاء والدواء — شرط تداوله داخل المملكة، لا شهادة تكميلية.",
    "Registration with the Saudi FDA — the condition for circulating the product in the Kingdom, not a supplementary certificate." ],
  [ "MFDS", "اعتماد الرقابة الكورية", "Korean MFDS approval",
    "Ministry of Food and Drug Safety — formerly KFDA",
    "ترخيص الجهة الرقابية الكورية في بلد المنشأ — أي أن المنتج معتمد للتداول في موطن تصنيعه.",
    "The Korean regulator's licence in the country of origin — the product is approved where it is made." ],
  [ "GMP", "ممارسات التصنيع الجيد", "Good Manufacturing Practice",
    "Good Manufacturing Practice",
    "اشتراطات تضمن ثبات جودة الإنتاج من دفعة إلى أخرى.",
    "Requirements that keep production quality consistent from batch to batch." ],
  [ "MDSAP", "التدقيق الدولي الموحد", "Medical Device Single Audit Program",
    "Medical Device Single Audit Program",
    "برنامج تدقيق موحّد تقبله جهات رقابية في عدة دول بتدقيق واحد — أي خضوع المصنع لرقابة متعددة الجهات.",
    "A single audit accepted by regulators in several countries — the factory answers to multiple authorities at once." ],
  [ "ISO 13485", "إدارة جودة الأجهزة الطبية", "Medical device quality management",
    "Medical Devices — Quality Management Systems",
    "المواصفة الدولية لنظام إدارة الجودة الخاص بتصنيع الأجهزة الطبية — تضمن انضباط عمليات التصنيع والتوثيق.",
    "The international standard for medical-device quality management — disciplined manufacturing and documentation." ],
  [ "CE", "المطابقة الأوروبية", "European conformity",
    "European Conformity",
    "علامة المطابقة الأوروبية: تفيد استيفاء المنتج لمتطلبات السلامة والأداء المعمول بها في السوق الأوروبي.",
    "The European conformity mark: the product meets the safety and performance requirements of the European market." ]
].each_with_index do |(code, ar, en, full, m_ar, m_en), i|
  Certification.find_or_initialize_by(code: code)
               .update!(name_ar: ar, name_en: en, full_name: full,
                        meaning_ar: m_ar, meaning_en: m_en, position: i, published: true)
end

# ---------------------------------------------------------------- brands
brands = {
  "remedium" => {
    name_ar: "ReMedium®", name_en: "ReMedium®", exclusive: true, page_path: "brands/remedium",
    tagline_ar: "وكالتنا الحصرية — فيلر هيالورونيك أسيد كوري أحادي الطور",
    tagline_en: "Our exclusive agency — Korean monophasic hyaluronic-acid filler",
    body_ar: "فيلر «ReMedium» لهيالورونيك أسيد — فياكروس عالي النقاء من إنتاج Forever 18 INTERNATIONAL في سيول، مصنّع بتقنية MDM المبتكرة ووفق معايير التصنيع الجيد GMP.",
    body_en: "ReMedium hyaluronic-acid filler — high-purity crosslinked gel produced by Forever 18 INTERNATIONAL in Seoul, manufactured with MDM technology under GMP.",
    image_url: "/assets/img/brand-remedium.jpg", position: 0
  },
  "ha-filler" => {
    name_ar: "HA Filler", name_en: "HA Filler", page_path: "brands/ha-filler",
    tagline_ar: "حمض هيالورونيك للاستخدامات الطبية المتخصصة",
    tagline_en: "Hyaluronic acid for specialised medical use", position: 1
  },
  "hairont" => {
    name_ar: "Hairont", name_en: "Hairont", exclusive: true, page_path: "brands/hairont",
    tagline_ar: "حل طبي مضاد للالتصاقات", tagline_en: "An anti-adhesion medical solution", position: 2
  },
  "gynwell" => {
    name_ar: "GynWell", name_en: "GynWell", exclusive: true, page_path: "brands/gynwell",
    tagline_ar: "خط نسائي متخصص", tagline_en: "A specialised women's health line", position: 3
  },
  "ovds" => {
    name_ar: "OVDs", name_en: "OVDs", exclusive: true, page_path: "brands/ovds",
    tagline_ar: "محاليل لزجة مرنة لجراحات العيون",
    tagline_en: "Ophthalmic viscosurgical devices", position: 4
  },
  "korean-skincare" => {
    name_ar: "مستحضرات العناية الكورية", name_en: "Korean skincare lines", page_path: "brands",
    tagline_ar: "تشكيلات مختارة من أبرز علامات العناية الكورية",
    tagline_en: "Curated lines from leading Korean skincare brands",
    image_url: "/assets/img/brand-skincare.jpg", position: 5
  }
}
brands.each do |slug, attrs|
  Brand.find_or_initialize_by(slug: slug).update!(attrs.merge(status: "published"))
end

# -------------------------------------------------------------- products
# Durations match what the public site currently shows. The 2026 company
# profile states a shorter range for all three (Fine 6–9, Mid 9–12, Sub-Q
# 12–18); that discrepancy needs the client's word before either is changed.
remedium = Brand.find_by(slug: "remedium")
[
  { slug: "remedium-fine", name_ar: "ReMedium Fine", name_en: "ReMedium Fine",
    subtitle_ar: "للخطوط الدقيقة والسطحية", subtitle_en: "For delicate superficial lines",
    indications_ar: "حول العين، خطوط الجبهة، خطوط الرقبة",
    indications_en: "Around the eyes, forehead lines, neck lines",
    duration_from: 9, duration_to: 12, accent_color: "#4FD3A5",
    image_url: "/assets/img/brand-fine.jpg", page_path: "brands/remedium/fine", position: 0 },
  { slug: "remedium-mid", name_ar: "ReMedium Mid", name_en: "ReMedium Mid",
    subtitle_ar: "للطبقات المتوسطة والشفاه", subtitle_en: "For mid-dermal volume and lips",
    indications_ar: "الشفاه، تحديد الذقن، خطوط الابتسامة",
    indications_en: "Lips, chin definition, nasolabial folds",
    duration_from: 12, duration_to: 18, accent_color: "#1CA97C",
    image_url: "/assets/img/brand-mid.jpg", page_path: "brands/remedium/mid", position: 1 },
  { slug: "remedium-sub-q", name_ar: "ReMedium Sub-Q", name_en: "ReMedium Sub-Q",
    subtitle_ar: "للبناء الحجمي العميق والنحت", subtitle_en: "For deep volume and contouring",
    indications_ar: "الوجنتان، الصدغان، استعادة حجم الذقن، تحت خط الفك",
    indications_en: "Cheeks, temples, chin augmentation, jawline",
    duration_from: 18, duration_to: 24, accent_color: "#0B4432",
    image_url: "/assets/img/brand-subq.jpg", page_path: "brands/remedium/sub-q", position: 2 }
].each do |attrs|
  Product.find_or_initialize_by(slug: attrs[:slug]).update!(attrs.merge(brand: remedium, status: "published"))
end

# ------------------------------------------------------------ categories
cats = {
  "regulatory" => [ "الأنظمة والتراخيص", "Regulatory", "كل ما يخص تسجيل المنتجات الطبية واعتمادها لدى الجهات الرقابية.", "Everything about registering medical products and clearing them with the regulator." ],
  "storage-quality" => [ "الجودة والتخزين", "Storage & Quality", "ظروف الحفظ وسلسلة التوريد وأثرها على المنتج.", "Storage conditions, the supply chain, and what they do to the product." ],
  "clinical-science" => [ "العلوم الطبية", "Clinical Science", "الخلفية العلمية خلف تقنيات الفيلر ومكوناته.", "The science behind filler technology and its components." ]
}
cats.each_with_index do |(slug, (ar, en, dar, den)), i|
  Category.find_or_initialize_by(slug_en: slug)
          .update!(name_ar: ar, name_en: en, slug_ar: Slug.arabic(ar),
                   description_ar: dar, description_en: den, position: i)
end

# ---------------------------------------------------------------- posts
# The three articles the knowledge centre already advertises, written out so the
# links stop pointing at "#".
ARTICLES = [
  {
    slug_en: "verify-sfda-approved-dermal-filler",
    category: "regulatory",
    cover: "/assets/img/knowledge-regulations.jpg",
    title_ar: "كيف تتحقق المنشأة الصحية من تسجيل الفيلر واعتماده رسميًا لدى الهيئة؟",
    title_en: "How to Verify That a Dermal Filler Is Fully SFDA-Approved",
    byline_ar: "بقلم فريق الشؤون التنظيمية", byline_en: "By the Regulatory Affairs Team",
    excerpt_ar: "خطوات عملية تتأكد بها المنشأة أن كل عبوة تصلها مسجّلة نظاميًا وقابلة للتتبّع حتى مصدرها.",
    excerpt_en: "Practical steps a facility can follow to confirm that every unit it receives is registered and traceable to its source.",
    alt_ar: "مراجعة مستندات تسجيل منتج طبي", alt_en: "Reviewing the registration file of a medical product",
    sections: [
      [ nil, nil,
       "<p>تسجيل المنتج الطبي لدى الهيئة العامة للغذاء والدواء ليس ورقة تُطلب عند الحاجة، بل شرط لتداوله أصلًا داخل المملكة. المنشأة التي تتعامل مع مورّد نظامي تحصل على الملف كاملًا مع الشحنة، لا بعد المطالبة به.</p>",
       "<p>Registration with the Saudi Food &amp; Drug Authority is not a document you request when something goes wrong; it is the condition for the product circulating in the Kingdom at all. A facility dealing with a compliant supplier receives the file with the shipment, not after chasing it.</p>" ],
      [ "ما الذي تطلبه المنشأة قبل أول طلب؟", "What to ask for before the first order",
       "<ul><li>شهادة تسجيل المنتج سارية باسم المنتج ورقمه.</li><li>ترخيص المنشأة المورّدة من الهيئة.</li><li>إثبات الوكالة أو التفويض من المصنّع.</li><li>بيان بلد المنشأ واسم المصنع.</li></ul>",
       "<ul><li>A valid product registration certificate naming the product and its number.</li><li>The supplier's own SFDA establishment licence.</li><li>Proof of agency or authorisation from the manufacturer.</li><li>Country of origin and the name of the manufacturing site.</li></ul>" ],
      [ "تتبّع التشغيلة عند الاستلام", "Batch traceability at delivery",
       "<p>كل عبوة تحمل رقم تشغيلة وتاريخ صلاحية. الرقم الذي لا يقابله سجل عند المورّد لا يمكن تتبّعه، وبالتالي لا يمكن استدعاؤه إن ظهر خلل لاحقًا. تحقّق من تطابق أرقام التشغيلة بين العبوة والفاتورة وبيان الشحنة قبل توقيع الاستلام.</p>",
       "<p>Every unit carries a batch number and an expiry date. A number the supplier cannot match to a record cannot be traced, and therefore cannot be recalled if a defect appears later. Check that the batch numbers agree across the unit, the invoice and the delivery note before signing for the shipment.</p>" ],
      [ "علامات التوريد غير النظامي", "Signs of an unregulated supply",
       "<ul><li>غياب الفاتورة الضريبية أو صدورها باسم مختلف عن المورّد.</li><li>عبوات بلا نشرة عربية أو ببيانات ملصقة فوق الأصل.</li><li>رفض تزويد المنشأة بشهادة التسجيل.</li><li>سعر يقل كثيرًا عن السوق بلا سبب معلن.</li></ul>",
       "<ul><li>No tax invoice, or one issued under a different name than the supplier.</li><li>Units with no Arabic leaflet, or with data stuck over the original label.</li><li>Refusal to provide the registration certificate.</li><li>A price far below market with no stated reason.</li></ul>" ]
    ],
    faqs: [
      [ "هل يكفي أن يكون المورّد مرخّصًا دون تسجيل المنتج؟",
       "Is a licensed supplier enough without the product being registered?",
       "لا. ترخيص المنشأة وتسجيل المنتج شرطان منفصلان؛ يلزم توافرهما معًا لتداول المنتج نظاميًا.",
       "No. The establishment licence and the product registration are two separate requirements, and both are needed for the product to circulate lawfully." ],
      [ "كم تستغرق مراجعة ملف التسجيل عادة؟", "How long does a registration review usually take?",
       "تختلف المدة باختلاف تصنيف المنتج واكتمال الملف. الملف المكتمل من أول مرة هو أقصر الطرق.",
       "It varies with the product classification and how complete the file is. A file that is complete the first time is the shortest route." ]
    ]
  },
  {
    slug_en: "storage-conditions-filler-safety",
    category: "storage-quality",
    cover: "/assets/img/knowledge-storage.jpg",
    title_ar: "ظروف الحفظ والتخزين: كيف تؤثر درجات الحرارة على أمان الفيلر ونتيجة الحقن؟",
    title_en: "Storage Conditions: How Temperature Affects Filler Safety and Outcome",
    byline_ar: "بقلم فريق الإمداد واللوجستيات", byline_en: "By the Supply Chain Team",
    excerpt_ar: "ما الذي يحدث للجل خارج نطاق حرارته، ولماذا يبدأ ضمان النتيجة من المستودع لا من العيادة.",
    excerpt_en: "What happens to the gel outside its temperature range, and why the outcome starts in the warehouse rather than the clinic.",
    alt_ar: "مستودع مرخّص بدرجة حرارة مضبوطة", alt_en: "Licensed temperature-controlled warehouse",
    sections: [
      [ nil, nil,
       "<p>الجل الذي يصل العيادة مرّ بسلسلة كاملة: مصنع، شحن، تخليص، مستودع، ثم توصيل. كل حلقة فيها قابلة لأن تُفسد المنتج دون أن يظهر ذلك على العبوة.</p>",
       "<p>The gel that reaches the clinic has travelled a full chain: factory, freight, customs, warehouse, delivery. Any link in it can spoil the product without the packaging showing a thing.</p>" ],
      [ "نطاق الحرارة ولماذا يهم", "The temperature range and why it matters",
       "<p>تُحفظ منتجات ReMedium في درجة حرارة أقل من 25 درجة مئوية ولا تحتاج سلسلة تبريد. الخروج المتكرر عن النطاق لا يظهر بالعين، لكنه يغيّر خصائص الجل الفيزيائية، وهي الخصائص نفسها التي يعتمد عليها الطبيب في تقدير الكمية والعمق.</p>",
       "<p>ReMedium products are held below 25°C and need no cold chain. Repeated excursions outside the range are invisible to the eye, yet they change the physical properties of the gel — the same properties the physician relies on when judging volume and depth.</p>" ],
      [ "ما الذي يوثَّق في المستودع النظامي؟", "What a compliant warehouse documents",
       "<ul><li>مراقبة حرارية رقمية على مدار الساعة مع سجلات حفظ دورية.</li><li>فصل المخزون السليم عن المرتجع أو الموقوف.</li><li>صرف وفق الأقدم صلاحية أولًا.</li><li>ربط كل صرف برقم تشغيلة وفاتورة.</li></ul>",
       "<ul><li>Round-the-clock digital temperature monitoring with periodic records.</li><li>Sound stock kept apart from returns and quarantined goods.</li><li>Release by earliest expiry first.</li><li>Every release tied to a batch number and an invoice.</li></ul>" ]
    ],
    faqs: [
      [ "هل يحتاج ReMedium إلى ثلاجة؟", "Does ReMedium need refrigeration?",
       "لا. يُحفظ في درجة حرارة أقل من 25 مئوية ولا يحتاج سلسلة تبريد، لكنه يحتاج تخزينًا مراقَبًا.",
       "No. It is stored below 25°C and needs no cold chain, but it does need monitored storage." ]
    ]
  },
  {
    slug_en: "monophasic-hyaluronic-acid-science",
    category: "clinical-science",
    cover: "/assets/img/knowledge-science.jpg",
    title_ar: "جل الهيالورونيك أحادي الطور: كيف تضمن تقنية ReMedium ثباتًا ومظهرًا طبيعيًا؟",
    title_en: "Monophasic Hyaluronic Acid: The Science Behind ReMedium's Natural Integration",
    byline_ar: "بقلم الفريق الطبي والسريري", byline_en: "By the Medical Advisory Team",
    excerpt_ar: "الفرق بين الجل أحادي الطور ومتعدد الأطوار، وما الذي تضيفه تقنية التشبيك في الاندماج مع الأنسجة.",
    excerpt_en: "The difference between monophasic and biphasic gels, and what the cross-linking technology adds to tissue integration.",
    alt_ar: "الفريق الطبي داخل المختبر", alt_en: "The medical team in the laboratory",
    sections: [
      [ nil, nil,
       "<p>«أحادي الطور» وصف لبنية الجل لا شعار تسويقي: كتلة متجانسة واحدة بدل جسيمات معلّقة في سائل حامل. هذا الفارق البنيوي هو ما ينعكس على ملمس النتيجة وانسيابها تحت الجلد.</p>",
       "<p>\"Monophasic\" describes the structure of the gel rather than a marketing claim: a single homogeneous mass instead of particles suspended in a carrier fluid. That structural difference is what shows up in how the result feels and flows under the skin.</p>" ],
      [ "التشبيك ودوره في ثبات النتيجة", "Cross-linking and result longevity",
       "<p>تحدد درجة التشبيك مقاومة الجل للتحلل الإنزيمي الطبيعي. التشبيك الأعلى يعني ثباتًا أطول ومقاومة أكبر للانزياح، والأقل يعني انسيابية أعلى تناسب المناطق الرقيقة. تعدد الكثافات في التشكيلة ليس تنويعًا تجاريًا، بل مطابقة لعمق الحقن المستهدف.</p>",
       "<p>The degree of cross-linking determines how the gel resists natural enzymatic breakdown. More cross-linking means longer persistence and greater resistance to migration; less means the higher flow that delicate areas need. The range of densities is not commercial variety — it matches the intended depth of injection.</p>" ],
      [ "نقاء المادة", "Purity of the material",
       "<p>تُنتج المادة الخام بالتخمير الحيوي وتمر بمراحل تنقية متعددة لخفض بقايا التشبيك إلى أدنى حد ممكن. النقاء هنا مسألة تحمّل نسيجي قبل أن يكون رقمًا في نشرة.</p>",
       "<p>The raw material is produced by biofermentation and passes through multiple purification stages to reduce residual cross-linker as far as possible. Purity here is a question of tissue tolerance before it is a number on a leaflet.</p>" ]
    ],
    faqs: [
      [ "ما الفرق العملي بين الكثافات الثلاث؟", "What is the practical difference between the three densities?",
       "الاختلاف في عمق الحقن المستهدف: السطحي للخطوط الدقيقة، والمتوسط للشفاه والطيات، والعميق للبناء الحجمي. يحدد الطبيب المعالج المنتج المناسب.",
       "They target different injection depths: superficial for fine lines, mid-dermal for lips and folds, deep for volume. The treating physician selects the appropriate product." ]
    ]
  }
].freeze

ARTICLES.each_with_index do |a, idx|
  post = Post.find_or_initialize_by(slug_en: a[:slug_en])
  post.assign_attributes(
    title_ar: a[:title_ar], title_en: a[:title_en],
    slug_ar: post.slug_ar.presence || Slug.arabic(a[:title_ar]),
    excerpt_ar: a[:excerpt_ar], excerpt_en: a[:excerpt_en],
    byline_ar: a[:byline_ar], byline_en: a[:byline_en],
    cover_url_ar: a[:cover], cover_alt_ar: a[:alt_ar], cover_alt_en: a[:alt_en],
    category: Category.find_by(slug_en: a[:category]),
    author: admin, status: "published", medically_reviewed: true,
    published_at: post.published_at || (Time.current - (idx * 6).days)
  )
  post.save!

  post.sections.destroy_all
  a[:sections].each_with_index do |(t_ar, t_en, b_ar, b_en), i|
    post.sections.create!(position: i, title_ar: t_ar, title_en: t_en, body_ar: b_ar, body_en: b_en)
  end

  post.faqs.destroy_all
  a[:faqs].each_with_index do |(q_ar, q_en, an_ar, an_en), i|
    post.faqs.create!(position: i, question_ar: q_ar, question_en: q_en,
                      answer_ar: an_ar, answer_en: an_en, published: true)
  end
  post.save! # refresh the reading time now that the sections exist
end

puts "seeded: #{User.count} users · #{Category.count} categories · #{Post.count} posts · " \
     "#{Brand.count} brands · #{Product.count} products · #{Certification.count} certifications · " \
     "#{Setting.count} settings"
