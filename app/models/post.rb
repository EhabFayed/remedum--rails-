class Post < ApplicationRecord
  STATUSES = %w[draft published].freeze

  belongs_to :category, optional: true
  belongs_to :author, class_name: "User", optional: true
  has_many :sections, -> { order(:position) }, class_name: "PostSection",
                                               dependent: :destroy, inverse_of: :post
  has_many :faqs, -> { order(:position) }, dependent: :destroy, inverse_of: :post

  accepts_nested_attributes_for :sections, allow_destroy: true
  accepts_nested_attributes_for :faqs, allow_destroy: true

  before_validation :fill_slugs
  before_save :stamp_publication
  before_save :recalculate_reading_time

  validates :title_ar, :title_en, presence: true, length: { minimum: 3, maximum: 200 }
  validates :slug_ar, :slug_en, presence: true, uniqueness: true
  validates :status, inclusion: { in: STATUSES }

  scope :published, -> { where(status: "published").where.not(published_at: nil) }
  scope :recent, -> { order(Arel.sql("COALESCE(published_at, created_at) DESC")) }
  scope :by_status, ->(s) { STATUSES.include?(s.to_s) ? where(status: s) : all }

  def published? = status == "published"

  def title_for(locale)  = locale.to_s == "en" ? title_en.presence || title_ar : title_ar
  def slug_for(locale)   = locale.to_s == "en" ? slug_en : slug_ar
  def excerpt_for(locale) = locale.to_s == "en" ? excerpt_en.presence || excerpt_ar : excerpt_ar
  def byline_for(locale) = locale.to_s == "en" ? byline_en.presence || byline_ar : byline_ar

  def meta_title_for(locale)
    (locale.to_s == "en" ? meta_title_en : meta_title_ar).presence || title_for(locale)
  end

  def meta_description_for(locale)
    (locale.to_s == "en" ? meta_description_en : meta_description_ar).presence ||
      excerpt_for(locale).presence ||
      RichText.plain(sections.first&.body_for(locale)).truncate(160)
  end

  # The English cover falls back to the Arabic one: a photograph without text
  # works in both, and most covers are photographs.
  def cover_for(locale)
    if locale.to_s == "en" && cover_url_en.present?
      { url: cover_url_en, width: cover_width_en, height: cover_height_en, alt: cover_alt_en.to_s }
    elsif cover_url_ar.present?
      { url: cover_url_ar, width: cover_width_ar, height: cover_height_ar,
        alt: (locale.to_s == "en" ? cover_alt_en.presence || cover_alt_ar : cover_alt_ar).to_s }
    end
  end

  # Arabic slugs have to be percent-encoded here: request.path arrives encoded,
  # and an unencoded UTF-8 path also trips Rails' open-redirect guard.
  def path_for(locale)
    "/#{locale}/knowledge/#{ERB::Util.url_encode(slug_for(locale))}/"
  end

  def display_date(locale = I18n.locale)
    (published_at || created_at).in_time_zone.strftime(locale.to_s == "en" ? "%d %b %Y" : "%d %B %Y")
  end

  private

  def fill_slugs
    self.slug_ar = Slug.unique(Slug.arabic(slug_ar.presence || title_ar),
                               scope: Post.all, column: :slug_ar, ignore_id: id)
    self.slug_en = Slug.unique(Slug.english(slug_en.presence || title_en),
                               scope: Post.all, column: :slug_en, ignore_id: id)
  end

  # The publication date is set once, on first publish. Re-saving a live article
  # must not push it back to the top of the list.
  def stamp_publication
    if published?
      self.published_at ||= Time.current
    else
      self.published_at = nil
    end
  end

  def recalculate_reading_time
    ar = sections.reject(&:marked_for_destruction?).map { |s| "#{s.title_ar} #{RichText.plain(s.body_ar)}" }.join(" ")
    en = sections.reject(&:marked_for_destruction?).map { |s| "#{s.title_en} #{RichText.plain(s.body_en)}" }.join(" ")
    self.read_minutes = [ RichText.reading_minutes(ar), RichText.reading_minutes(en) ].max
  end
end
