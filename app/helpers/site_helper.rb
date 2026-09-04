# Shared site chrome: navigation structure and locale-aware paths.
# Labels come from config/locales/site.{ar,en}.yml (t("site.nav.<key>"));
# paths are locale-independent and prefixed by the current locale.
module SiteHelper
  NAV = [
    { key: "home", path: "" },
    { key: "company", path: "company/about", items: [
      %w[company_about company/about],
      %w[company_identity company/identity],
      %w[company_contact company/contact],
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
      %w[brands_skincare brands#skincare-external],
    ] },
    { key: "quality", path: "quality/compliance", items: [
      %w[quality_compliance quality/compliance],
      %w[quality_supply quality/supply],
      %w[quality_certifications quality/certifications],
    ] },
    { key: "medical", path: "medical/service-model", items: [
      %w[medical_service medical/service-model],
      %w[medical_evidence medical/evidence],
      %w[medical_results medical/results],
      %w[medical_quote medical/quote],
    ] },
    { key: "knowledge", path: "knowledge" },
  ].freeze

  FOOTER_LINKS = [
    %w[link_about company/about],
    %w[link_remedium brands/remedium],
    %w[link_quality quality/compliance],
    %w[link_certs quality/certifications],
    %w[link_knowledge knowledge],
    %w[link_contact company/contact],
  ].freeze

  WHATSAPP_URL = "https://wa.me/966562017170"

  # "" → the locale home ("/" for en — the landing, "/ar/" for ar).
  # "brands#skincare-external" → "/en/brands/#skincare-external"
  def locale_path(path)
    return I18n.locale == :ar ? "/ar/" : "/" if path.blank?

    base, anchor = path.split("#", 2)
    "/#{I18n.locale}/#{base}/#{anchor ? "##{anchor}" : ""}"
  end

  # The same page in the other locale — for the language pill and hreflang.
  def alt_locale_path
    self_path = request.path.end_with?("/") ? request.path : "#{request.path}/"
    if I18n.locale == :ar
      self_path == "/ar/" ? "/" : self_path.sub(%r{\A/ar/}, "/en/")
    else
      self_path == "/" ? "/ar/" : self_path.sub(%r{\A/en/}, "/ar/")
    end
  end

  def self_canonical_path
    request.path.end_with?("/") ? request.path : "#{request.path}/"
  end

  def rtl?
    I18n.locale == :ar
  end
end
