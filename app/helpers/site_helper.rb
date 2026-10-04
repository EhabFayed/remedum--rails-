# Shared site chrome: navigation structure and locale-aware paths.
# Labels come from config/locales/site.{ar,en}.yml (t("site.nav.<key>"));
# paths are locale-independent and prefixed by the current locale.
module SiteHelper
  NAV = [
    { key: "home", path: "" },
    { key: "company", path: "company/about", items: [
      %w[company_about company/about],
      %w[company_identity company/identity],
      %w[company_contact company/contact]
    ] },
    { key: "brands", path: "brands", items: [
      %w[brands_all brands],
      %w[brands_remedium brands/remedium],
      %w[brands_subq brands/remedium/sub-q],
      %w[brands_mid brands/remedium/mid],
      %w[brands_fine brands/remedium/fine],
      %w[brands_ha brands/ha-filler],
      %w[brands_hairont brands/hairont],
      %w[brands_gynwell brands/gynwell],
      %w[brands_ovds brands/ovds],
      %w[brands_skincare brands#skincare-external]
    ] },
    { key: "quality", path: "quality/compliance", items: [
      %w[quality_compliance quality/compliance],
      %w[quality_supply quality/supply],
      %w[quality_certifications quality/certifications]
    ] },
    { key: "medical", path: "medical/service-model", items: [
      %w[medical_service medical/service-model],
      %w[medical_evidence medical/evidence],
      %w[medical_results medical/results],
      %w[medical_quote medical/quote]
    ] },
    { key: "knowledge", path: "knowledge" }
  ].freeze

  FOOTER_LINKS = [
    %w[link_about company/about],
    %w[link_remedium brands/remedium],
    %w[link_quality quality/compliance],
    %w[link_certs quality/certifications],
    %w[link_knowledge knowledge],
    %w[link_contact company/contact]
  ].freeze

  WHATSAPP_URL = "https://wa.me/966562017170"

  # Values the client edits in the dashboard. The literal the page shipped with
  # stays as the fallback, so an unfilled setting can never blank out the footer.
  def site_setting(key, fallback = nil)
    Setting[key].presence || fallback
  end

  SOCIAL_ICONS = {
    "facebook_url"  => [ "Facebook",  '<path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.63A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.46-4 4.14V9.9H7.6V13h2.7v8h3.2Z"/>' ],
    "instagram_url" => [ "Instagram", '<path d="M12 7.6A4.4 4.4 0 1 0 16.4 12 4.4 4.4 0 0 0 12 7.6Zm0 7.25A2.85 2.85 0 1 1 14.85 12 2.85 2.85 0 0 1 12 14.85Zm5.6-7.43a1.03 1.03 0 1 1-1.02-1.03 1.03 1.03 0 0 1 1.02 1.03ZM21 7.44a5.1 5.1 0 0 0-1.39-3.6 5.13 5.13 0 0 0-3.6-1.39C14.6 2.37 9.4 2.37 8 2.45a5.12 5.12 0 0 0-3.6 1.39A5.11 5.11 0 0 0 3 7.43c-.08 1.42-.08 6.62 0 8.04a5.1 5.1 0 0 0 1.39 3.6 5.14 5.14 0 0 0 3.6 1.39c1.42.08 6.62.08 8.04 0a5.1 5.1 0 0 0 3.6-1.39 5.13 5.13 0 0 0 1.39-3.6c.08-1.42.08-6.61 0-8.03Zm-1.84 9.56a2.88 2.88 0 0 1-1.62 1.62c-1.13.45-3.8.35-5.04.35s-3.92.1-5.04-.35A2.88 2.88 0 0 1 5.84 17c-.45-1.12-.35-3.8-.35-5.04s-.1-3.92.35-5.04a2.88 2.88 0 0 1 1.62-1.62c1.12-.45 3.8-.35 5.04-.35s3.92-.1 5.04.35A2.88 2.88 0 0 1 19.16 6.96c.45 1.12.35 3.8.35 5.04s.1 3.92-.35 5Z"/>' ],
    "youtube_url"   => [ "YouTube",   '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.75-1.77C18.3 5 12 5 12 5s-6.3 0-7.85.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.75 1.77C5.7 19 12 19 12 19s6.3 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2Z"/>' ],
    "tiktok_url"    => [ "TikTok",    '<path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.1v12.4a2.59 2.59 0 0 1-2.6 2.5 2.6 2.6 0 0 1 0-5.2c.27 0 .53.04.78.12v-3.2a5.84 5.84 0 0 0-.78-.05 5.7 5.7 0 1 0 5.7 5.7V9.42a7.35 7.35 0 0 0 4.3 1.38V7.7a4.29 4.29 0 0 1-3.24-1.88Z"/>' ],
    "linkedin_url"  => [ "LinkedIn",  '<path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 7a1.97 1.97 0 0 0 0-3.94ZM20.44 13.4c0-3.1-1.65-4.55-3.86-4.55a3.33 3.33 0 0 0-3 1.65V8.5h-3.37V20h3.37v-6.05c0-1.6.3-3.14 2.28-3.14 1.95 0 1.98 1.82 1.98 3.24V20h3.38l-.78-6.6Z"/>' ],
    "x_url"         => [ "X",         '<path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z"/>' ]
  }.freeze

  # Footer social icons, in dashboard order; an empty setting hides its icon.
  # The SVG for the first four is taken from the markup the footer already had.
  def social_links
    SOCIAL_ICONS.filter_map do |key, (label, svg)|
      url = Setting[key]
      { key: key, url: url, label: label, svg: svg } if url
    end
  end

  def whatsapp_url
    number = Setting["whatsapp_number"].to_s.gsub(/\D/, "")
    number.present? ? "https://wa.me/#{number}" : WHATSAPP_URL
  end

  # "" → the locale home ("/" for ar — the default language, "/en/" for en).
  # "brands#skincare-external" → "/en/brands/#skincare-external"
  def locale_path(path)
    return I18n.locale == :ar ? "/" : "/en/" if path.blank?

    base, anchor = path.split("#", 2)
    "/#{I18n.locale}/#{base}/#{anchor ? "##{anchor}" : ""}"
  end

  # The same page in the other locale — for the language pill and hreflang.
  def alt_locale_path
    self_path = request.path.end_with?("/") ? request.path : "#{request.path}/"
    return(I18n.locale == :ar ? "/en/" : "/") if self_path == "/" || self_path == "/en/"

    I18n.locale == :ar ? self_path.sub(%r{\A/ar/}, "/en/") : self_path.sub(%r{\A/en/}, "/ar/")
  end

  def self_canonical_path
    request.path.end_with?("/") ? request.path : "#{request.path}/"
  end

  def rtl?
    I18n.locale == :ar
  end
end
