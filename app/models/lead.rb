# A request coming off the public site: the quote form under Medical
# Information, or the contact page.
class Lead < ApplicationRecord
  STATUSES = %w[new contacted closed].freeze
  SOURCES  = %w[quote contact].freeze

  STATUS_LABELS = { "new" => "جديد", "contacted" => "تم التواصل", "closed" => "مغلق" }.freeze

  before_validation :normalise

  validates :name, presence: true, length: { maximum: 160 }
  validates :status, inclusion: { in: STATUSES }
  validates :source, inclusion: { in: SOURCES }
  validates :locale, inclusion: { in: %w[ar en] }
  validate  :some_way_to_reply

  scope :recent, -> { order(created_at: :desc) }
  scope :by_status, ->(s) { STATUSES.include?(s.to_s) ? where(status: s) : all }
  scope :open_requests, -> { where(status: "new") }

  def status_label = STATUS_LABELS.fetch(status, status)
  def new_request? = status == "new"

  def to_csv_row
    [ created_at.strftime("%Y-%m-%d %H:%M"), status_label, name, facility, facility_type, city,
      phone, email, products.join(" | "), volume,
      (visit_requested ? "نعم" : "لا"), (existing_client ? "نعم" : "لا"),
      message.to_s.gsub(/\s+/, " "), source, source_path ].freeze
  end

  def self.csv_headers
    %w[التاريخ الحالة الاسم المنشأة النوع المدينة الجوال البريد المنتجات الكمية زيارة عميل\ حالي ملاحظات المصدر الصفحة]
  end

  private

  def normalise
    self.name = name.to_s.strip
    self.email = email.to_s.strip.downcase.presence
    self.phone = phone.to_s.strip.presence
    self.products = Array(products).map { |p| p.to_s.strip }.reject(&:empty?).uniq.first(20)
  end

  # A request nobody can answer is not a request. The public form asks for both,
  # but only one is needed for the record to be useful.
  def some_way_to_reply
    return if phone.present? || email.present?

    errors.add(:base, "نحتاج رقم جوال أو بريدًا إلكترونيًا للرد")
  end
end
