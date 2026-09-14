module AdminHelper
  NAV = [
    { path: :admin_root_path,           label: "نظرة عامة", icon: "grid", exact: true },
    { path: :admin_posts_path,          label: "المقالات", icon: "doc" },
    { path: :admin_categories_path,     label: "التصنيفات", icon: "tag" },
    { path: :admin_faqs_path,           label: "الأسئلة الشائعة", icon: "help" },
    { path: :admin_brands_path,         label: "العلامات", icon: "leaf" },
    { path: :admin_products_path,       label: "المنتجات", icon: "box" },
    { path: :admin_certifications_path, label: "الاعتمادات", icon: "shield" },
    { path: :admin_leads_path,          label: "الطلبات", icon: "inbox", badge: :new_leads },
    { path: :admin_media_path,          label: "مكتبة الصور", icon: "image" },
    { path: :admin_users_path,          label: "المستخدمون", icon: "user", admin_only: true },
    { path: :admin_settings_path,       label: "إعدادات الموقع", icon: "cog" }
  ].freeze

  def nav_items
    NAV.reject { |i| i[:admin_only] && !current_user&.admin? }
  end

  def nav_active?(item)
    target = send(item[:path])
    item[:exact] ? request.path == target : request.path.start_with?(target)
  end

  ICONS = {
    "grid" => '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    "doc" => '<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 12h6M9 16h6"/>',
    "tag" => '<path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    "help" => '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7"/><path d="M12 17h.01"/>',
    "leaf" => '<path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15z"/><path d="M5 19c3-6 6-9 10-11"/>',
    "box" => '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    "shield" => '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
    "inbox" => '<path d="M3 13h5l2 3h4l2-3h5"/><path d="M5 5h14l2 8v6H3v-6z"/>',
    "image" => '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="M4 17l5-5 4 4 3-2 4 4"/>',
    "user" => '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    "cog" => '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/>'
  }.freeze

  def admin_icon(name, size: 17)
    raw %(<svg width="#{size}" height="#{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" ) +
        raw(%(stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">)) +
        raw(ICONS.fetch(name, "")) + raw("</svg>")
  end

  def status_pill(status)
    map = {
      "published" => [ "منشور", "pill--on" ],
      "draft" => [ "مسوّدة", "pill--off" ],
      "new" => [ "جديد", "pill--hot" ],
      "contacted" => [ "تم التواصل", "pill--on" ],
      "closed" => [ "مغلق", "pill--off" ]
    }
    label, klass = map.fetch(status.to_s, [ status.to_s, "pill--off" ])
    tag.span label, class: "pill #{klass}"
  end

  def admin_date(time)
    return "—" if time.blank?

    l(time.in_time_zone, format: "%Y/%m/%d")
  end

  # Two fields that only differ by language sit side by side everywhere in this
  # dashboard; the English one always carries dir="ltr" so mixed text does not
  # reorder itself while being typed.
  def bilingual_row(&block)
    tag.div(class: "grid-2", &block)
  end

  def page_header(title, subtitle = nil, &actions)
    render "admin/shared/page_header", title: title, subtitle: subtitle, actions: (block_given? ? capture(&actions) : nil)
  end
end
