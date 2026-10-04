class ReviewTrack < ApplicationRecord
  KINDS = %w[quote rating badge plain].freeze
  KIND_LABELS = { "quote" => "اقتباس مع صورة", "rating" => "نجوم مع رابط", "badge" => "شارة", "plain" => "بدون إضافة" }.freeze

  # Section heading above the cards; stored as plain Setting rows so the client
  # edits it from the same screen. Falls back to the original copy when empty.
  HEADING_KEYS = %w[reviews_eyebrow_ar reviews_eyebrow_en reviews_title_ar reviews_title_en].freeze

  validates :title_ar, :title_en, presence: true
  validates :kind, inclusion: { in: KINDS }
  validates :link_url, format: { with: %r{\Ahttps?://}i, message: "يجب أن يبدأ بـ http:// أو https://" }, allow_blank: true

  scope :ordered, -> { order(:position, :id) }
  scope :live, -> { where(published: true) }

  def title_for(locale)   = locale.to_s == "en" ? title_en : title_ar
  def body_for(locale)    = locale.to_s == "en" ? body_en.presence || body_ar : body_ar
  def note_for(locale)    = locale.to_s == "en" ? note_en.presence || note_ar : note_ar
  def caption_for(locale) = locale.to_s == "en" ? caption_en.presence || caption_ar : caption_ar

  def self.heading(part, locale)
    Setting["reviews_#{part}_#{locale == :en || locale.to_s == 'en' ? 'en' : 'ar'}"]
  end

  def self.write_heading(attrs)
    now = Time.current
    rows = attrs.to_h.slice(*HEADING_KEYS).map { |k, v| { key: k, value: v.to_s.strip, updated_at: now } }
    Setting.upsert_all(rows, unique_by: :key) if rows.any?
    Rails.cache.delete(Setting::CACHE_KEY)
  end
end
