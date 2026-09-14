# Slugs for a bilingual site: the Arabic slug keeps Arabic letters, the English
# one is transliterated to ASCII. Both end up in the URL, so both are built here
# rather than by a gem that only understands Latin scripts.
module Slug
  # Paths the site already serves — an article that grabbed one of these would
  # be unreachable, so it gets a suffix instead of being buried.
  RESERVED = %w[
    ar en up admin uploads assets api knowledge brands company quality medical
    legal robots.txt favicon.ico sitemap.xml
  ].freeze

  module_function

  def arabic(text)
    s = text.to_s.strip.downcase
             .gsub(/[ً-ْـ]/, "")        # harakat and tatweel
             .gsub(/[^\p{L}\p{N}\s-]/u, "")
             .gsub(/\s+/, "-").gsub(/-+/, "-")
             .delete_prefix("-").delete_suffix("-")
    s.first(90).presence || "مقال"
  end

  def english(text)
    s = ActiveSupport::Inflector.transliterate(text.to_s, "")
                                .downcase
                                .gsub(/[^a-z0-9\s-]/, "")
                                .gsub(/\s+/, "-").gsub(/-+/, "-")
                                .delete_prefix("-").delete_suffix("-")
    s.first(90).presence || "post"
  end

  def reserved?(value)
    RESERVED.include?(value.to_s.downcase)
  end

  # Walks base, base-2, base-3 … until nothing else in `scope` holds it.
  def unique(base, scope:, column:, ignore_id: nil)
    candidate = reserved?(base) ? "#{base}-2" : base
    2.upto(80) do |i|
      taken = scope.where(column => candidate)
      taken = taken.where.not(id: ignore_id) if ignore_id
      return candidate unless taken.exists?

      candidate = "#{base}-#{i}"
    end
    "#{base}-#{SecureRandom.hex(3)}"
  end
end
