# Serves the bilingual frontend. Content views live as per-locale templates
# (app/views/pages/**.{ar,en}.html.erb) resolved by Rails via I18n.locale;
# the shared chrome is app/views/layouts/site.html.erb driven by
# config/locales/site.{ar,en}.yml. Views are regenerated from
# tools/build-views.mjs; the home pages are hand-maintained full documents.
class PagesController < ApplicationController
  PATH_FORMAT = %r{\A[a-z0-9\-/]+\z}

  def home
    @posts = Post.published.includes(:category).recent.limit(3)
    @certifications = Certification.live.ordered
    render "pages/home", layout: false
  end

  def show
    path = params[:path].to_s.chomp("/")
    template = "pages/#{path}"

    unless path.match?(PATH_FORMAT) && lookup_context.exists?(template)
      raise ActionController::RoutingError, "No such page: #{path}"
    end

    load_page_data(path)
    render template: template, layout: "site"
  end

  private

  # A handful of generated pages now read live rows. Everything else stays a
  # plain template render with no queries at all.
  def load_page_data(path)
    case path
    when "knowledge"
      @posts = Post.published.includes(:category).recent.limit(9)
    when "quality/certifications"
      @certifications = Certification.live.ordered
    end
  end
end
