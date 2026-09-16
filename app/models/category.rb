class Category < ApplicationRecord
  has_many :posts, dependent: :nullify

  before_validation :fill_slugs

  validates :name_ar, :name_en, presence: true
  validates :slug_ar, :slug_en, presence: true, uniqueness: true

  scope :ordered, -> { order(:position, :id) }

  def name_for(locale) = locale.to_s == "en" ? name_en : name_ar
  def slug_for(locale) = locale.to_s == "en" ? slug_en : slug_ar

  private

  def fill_slugs
    self.slug_ar = Slug.unique(Slug.arabic(slug_ar.presence || name_ar),
                               scope: Category.all, column: :slug_ar, ignore_id: id)
    self.slug_en = Slug.unique(Slug.english(slug_en.presence || name_en),
                               scope: Category.all, column: :slug_en, ignore_id: id)
  end
end
