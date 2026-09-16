# Everything the rich editor produces passes through here before it is stored.
# The editor is a convenience, never a security boundary: editors paste from
# Word, Google Docs and random sites, and that paste carries markup and inline
# styles we do not want in the page.
module RichText
  TAGS = %w[
    h2 h3 p br strong em u s a ul ol li blockquote pre code img figure figcaption hr span
  ].freeze

  ATTRIBUTES = %w[href target rel src alt width height loading dir].freeze

  SAFE_HREF = %r{\A(?:https?://|mailto:|tel:|/|#)}i
  SAFE_SRC  = %r{\A(?:https?://|/)}i

  module_function

  def sanitize(html)
    return "" if html.blank?

    doc = Nokogiri::HTML5.fragment(html.to_s)

    # Dropped whole, content included. Rails' sanitizer keeps the inner text of
    # a tag it removes, which would paste a script body into the article.
    doc.css("script, style, iframe, object, embed, form, input, button, svg, noscript").each(&:remove)
    doc.css("*").each { |n| n.remove_attribute("style") }

    # Pasted headings step down: the page already owns its single h1.
    doc.css("h1").each { |n| n.name = "h2" }
    doc.css("h4, h5, h6").each { |n| n.name = "h3" }
    doc.css("b").each { |n| n.name = "strong" }
    doc.css("i").each { |n| n.name = "em" }

    doc.css("a").each do |a|
      href = a["href"].to_s
      next a.replace(a.children) unless href.match?(SAFE_HREF)

      a.attributes.each_key { |k| a.remove_attribute(k) unless k == "href" }
      if href.start_with?("http")
        a["target"] = "_blank"
        a["rel"] = "noopener noreferrer"
      end
    end

    doc.css("img").each do |img|
      src = img["src"].to_s
      next img.remove unless src.match?(SAFE_SRC)

      alt = img["alt"].to_s
      w = img["width"]
      h = img["height"]
      img.attributes.each_key { |k| img.remove_attribute(k) }
      img["src"] = src
      img["alt"] = alt
      img["loading"] = "lazy"
      img["width"] = w if w.present?
      img["height"] = h if h.present?
    end

    cleaned = ActionController::Base.helpers.sanitize(
      doc.to_html, tags: TAGS, attributes: ATTRIBUTES
    )

    # The editor leaves empty paragraphs behind whenever a block is deleted.
    frag = Nokogiri::HTML5.fragment(cleaned)
    frag.css("p, span").each do |n|
      n.remove if n.text.strip.empty? && n.css("img, br").empty?
    end
    frag.to_html.strip
  end

  def plain(html)
    return "" if html.blank?

    Nokogiri::HTML5.fragment(html.to_s).text.gsub(/\s+/, " ").strip
  end

  def blank?(html)
    plain(html).empty? && !html.to_s.match?(/<img/i)
  end

  # Arabic and English read at different speeds, but not differently enough to
  # justify two constants; 200 words a minute is the usual editorial figure.
  def reading_minutes(text)
    words = text.to_s.split(/\s+/).size
    [ (words / 200.0).ceil, 1 ].max
  end
end
