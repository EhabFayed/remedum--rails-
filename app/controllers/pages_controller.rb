# Serves the migrated static frontend (Arabic + English) until sections of
# the site are made dynamic. Views live under app/views/pages/{ar,en}/ and
# are regenerated from tools/build-views.mjs; the two home pages are
# standalone hand-maintained documents (rendered without a layout).
class PagesController < ApplicationController
  ALLOWED_LOCALES = %w[ar en].freeze
  PATH_FORMAT = %r{\A[a-z0-9\-/]+\z}

  def home_en
    render "pages/en/home", layout: false
  end

  def home_ar
    render "pages/ar/home", layout: false
  end

  def show
    locale = params[:locale]
    path   = params[:path].to_s.chomp("/")
    template = "pages/#{locale}/#{path}"

    unless ALLOWED_LOCALES.include?(locale) && path.match?(PATH_FORMAT) && lookup_context.exists?(template)
      raise ActionController::RoutingError, "No such page: #{locale}/#{path}"
    end

    render template: template, layout: "site_#{locale}"
  end
end
