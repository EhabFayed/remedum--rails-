class ApplicationController < ActionController::Base
  # CSRF protection for the HTML frontend. API controllers (when added)
  # should inherit from ActionController::API instead.
  protect_from_forgery with: :exception

  around_action :switch_locale

  private

  # Locale comes from the URL: /ar/... and /en/... set params[:locale];
  # the two home routes set it via route defaults. Rails template lookup
  # then resolves the per-locale views (page.ar.html.erb / page.en.html.erb).
  def switch_locale(&action)
    locale = params[:locale].presence_in(I18n.available_locales.map(&:to_s)) || I18n.default_locale
    I18n.with_locale(locale, &action)
  end
end
