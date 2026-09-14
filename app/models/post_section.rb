# One section of an article: an optional heading, formatted text per language,
# and an image per language. The first section usually has no heading and acts
# as the intro.
class PostSection < ApplicationRecord
  belongs_to :post

  before_validation :clean_bodies

  scope :ordered, -> { order(:position, :id) }

  def title_for(locale) = locale.to_s == "en" ? title_en.presence || title_ar : title_ar
  def body_for(locale)  = locale.to_s == "en" ? body_en.presence || body_ar : body_ar

  def image_for(locale)
    if locale.to_s == "en" && image_url_en.present?
      { url: image_url_en, width: image_width_en, height: image_height_en,
        alt: (alt_en.presence || alt_ar).to_s, caption: caption_en.presence || caption_ar }
    elsif image_url_ar.present?
      { url: image_url_ar, width: image_width_ar, height: image_height_ar,
        alt: (locale.to_s == "en" ? alt_en.presence || alt_ar : alt_ar).to_s,
        caption: locale.to_s == "en" ? caption_en.presence || caption_ar : caption_ar }
    end
  end

  def empty?
    title_ar.blank? && title_en.blank? && image_url_ar.blank? && image_url_en.blank? &&
      RichText.blank?(body_ar) && RichText.blank?(body_en)
  end

  private

  def clean_bodies
    self.body_ar = RichText.sanitize(body_ar)
    self.body_en = RichText.sanitize(body_en)
  end
end
