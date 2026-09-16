class Product < ApplicationRecord
  STATUSES = %w[draft published].freeze

  belongs_to :brand, optional: true

  before_validation :fill_slug

  validates :name_ar, :name_en, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :status, inclusion: { in: STATUSES }
  validates :duration_from, :duration_to,
            numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 60 },
            allow_nil: true
  validate :duration_reads_forwards

  scope :ordered, -> { order(:position, :id) }
  scope :published, -> { where(status: "published") }

  def published? = status == "published"
  def name_for(locale)        = locale.to_s == "en" ? name_en : name_ar
  def subtitle_for(locale)    = locale.to_s == "en" ? subtitle_en.presence || subtitle_ar : subtitle_ar
  def indications_for(locale) = locale.to_s == "en" ? indications_en.presence || indications_ar : indications_ar

  def duration_label(locale = I18n.locale)
    return nil if duration_from.blank? || duration_to.blank?

    locale.to_s == "en" ? "#{duration_from}–#{duration_to} months" : "#{duration_from} – #{duration_to} شهرًا"
  end

  private

  def fill_slug
    self.slug = Slug.unique(Slug.english(slug.presence || name_en),
                            scope: Product.all, column: :slug, ignore_id: id)
  end

  def duration_reads_forwards
    return if duration_from.blank? || duration_to.blank?

    errors.add(:duration_to, "لا يمكن أن تكون أقل من بداية المدة") if duration_to < duration_from
  end
end
