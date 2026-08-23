# Serves the bilingual frontend. Content views live as per-locale templates
# (app/views/pages/**.{ar,en}.html.erb) resolved by Rails via I18n.locale;
# the shared chrome is app/views/layouts/site.html.erb driven by
# config/locales/site.{ar,en}.yml. Views are regenerated from
# tools/build-views.mjs; the home pages are hand-maintained full documents.
class PagesController < ApplicationController
  PATH_FORMAT = %r{\A[a-z0-9\-/]+\z}

  def home
    render "pages/home", layout: false
  end

  def show
    path = params[:path].to_s.chomp("/")
    template = "pages/#{path}"

    unless path.match?(PATH_FORMAT) && lookup_context.exists?(template)
      raise ActionController::RoutingError, "No such page: #{path}"
    end

    render template: template, layout: "site"
  end
end
