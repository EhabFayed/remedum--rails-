class Certification < ApplicationRecord
  # page order (client revisions, Oct 2026): Saudi approvals -> ReMedium -> other brands -> manufacturer
  GROUPS = {
    "saudi" => "اعتمادات المملكة العربية السعودية",
    "remedium" => "شهادات ReMedium",
    "brand" => "شهادات بقية المنتجات",
    "manufacturer" => "اعتمادات الشركة المصنّعة"
  }.freeze
  STATUSES = { "verified" => "مؤكد", "pending" => "قيد المطابقة مع المستندات" }.freeze

  before_validation { self.code = code.to_s.strip.upcase; self.brand_name = brand_name.to_s.strip }

  validates :code, :name_ar, :name_en, presence: true
  validates :code, uniqueness: { scope: %i[group_key brand_name] }
  validates :group_key, inclusion: { in: GROUPS.keys }
  validates :status, inclusion: { in: STATUSES.keys }

  scope :ordered, -> { order(:position, :id) }
  scope :live, -> { where(published: true) }
  scope :in_group, ->(key) { where(group_key: key) }
  # the home strip keeps showing the Saudi + ReMedium marks only, as before the grouping
  scope :home_strip, -> { where(group_key: %w[saudi remedium]) }

  def name_for(locale) = locale.to_s == "en" ? name_en : name_ar
  def meaning_for(locale) = locale.to_s == "en" ? meaning_en.presence || meaning_ar : meaning_ar
  def detailed? = meaning_ar.present? || meaning_en.present?
  def pending? = status == "pending"
end
