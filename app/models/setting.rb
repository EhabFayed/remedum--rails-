# Site-wide values the client edits without a deploy: phone numbers, addresses,
# registration numbers, social links. Read through Setting.map so a page render
# costs one query, not one per key.
class Setting < ApplicationRecord
  self.primary_key = :key

  CACHE_KEY = "settings/map".freeze

  DEFINITIONS = [
    { group: "التواصل", key: "contact_phone",    label: "رقم الجوال / واتساب",       ltr: true },
    { group: "التواصل", key: "contact_email",    label: "البريد الإلكتروني للمبيعات", ltr: true },
    { group: "التواصل", key: "whatsapp_number",  label: "رقم واتساب بالصيغة الدولية بدون +", ltr: true,
      hint: "يبني رابط زر واتساب في الهيدر والفوتر." },
    { group: "التواصل", key: "address_ar",       label: "العنوان (عربي)" },
    { group: "التواصل", key: "address_en",       label: "Address (English)", ltr: true },
    { group: "التواصل", key: "working_hours_ar", label: "أوقات العمل (عربي)" },
    { group: "التواصل", key: "working_hours_en", label: "Working hours (English)", ltr: true },

    { group: "بيانات الشركة", key: "company_name_ar", label: "اسم الشركة (عربي)" },
    { group: "بيانات الشركة", key: "company_name_en", label: "Company name (English)", ltr: true },
    { group: "بيانات الشركة", key: "cr_number",       label: "رقم السجل التجاري", ltr: true },
    { group: "بيانات الشركة", key: "vat_number",      label: "الرقم الضريبي", ltr: true },

    { group: "روابط", key: "instagram_url", label: "إنستجرام", ltr: true },
    { group: "روابط", key: "linkedin_url",  label: "لينكدإن", ltr: true },
    { group: "روابط", key: "x_url",         label: "إكس (تويتر)", ltr: true },
    { group: "روابط", key: "facebook_url",  label: "فيسبوك", ltr: true },
    { group: "روابط", key: "maps_url",      label: "رابط الموقع على خرائط جوجل", ltr: true },

    { group: "الطلبات", key: "leads_notify_email", label: "بريد إشعار الطلبات الجديدة", ltr: true,
      hint: "كل طلب جديد يصل هنا إضافة إلى ظهوره في الداشبورد." },
    { group: "الطلبات", key: "quote_sla_ar", label: "وعد الرد على الطلب (عربي)" },
    { group: "الطلبات", key: "quote_sla_en", label: "Response promise (English)", ltr: true }
  ].freeze

  KEYS = DEFINITIONS.map { |d| d[:key] }.freeze

  def self.map
    Rails.cache.fetch(CACHE_KEY, expires_in: 5.minutes) { pluck(:key, :value).to_h }
  end

  def self.[](key)
    map[key.to_s].presence
  end

  def self.write_all(attrs)
    now = Time.current
    rows = attrs.slice(*KEYS).map { |k, v| { key: k, value: v.to_s.strip, updated_at: now } }
    upsert_all(rows, unique_by: :key) if rows.any?
    Rails.cache.delete(CACHE_KEY)
  end

  def self.grouped_definitions
    DEFINITIONS.group_by { |d| d[:group] }
  end
end
