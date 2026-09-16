class Brand < ApplicationRecord
  STATUSES = %w[draft published].freeze

  has_many :products, -> { order(:position) }, dependent: :destroy, inverse_of: :brand

  before_validation :fill_slug

  validates :name_ar, :name_en, presence: true
  validates :slug, presence: true, uniqueness: true
  validates :status, inclusion: { in: STATUSES }

  scope :ordered, -> { order(:position, :id) }
  scope :published, -> { where(status: "published") }

  def published? = status == "published"
  def name_for(locale)    = locale.to_s == "en" ? name_en : name_ar
  def tagline_for(locale) = locale.to_s == "en" ? tagline_en.presence || tagline_ar : tagline_ar
  def body_for(locale)    = locale.to_s == "en" ? body_en.presence || body_ar : body_ar
  def alt_for(locale)     = locale.to_s == "en" ? image_alt_en.presence || image_alt_ar : image_alt_ar

  private

  def fill_slug
    self.slug = Slug.unique(Slug.english(slug.presence || name_en),
                            scope: Brand.all, column: :slug, ignore_id: id)
  end
end
