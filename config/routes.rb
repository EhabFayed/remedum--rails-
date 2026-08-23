Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions
  get "up" => "rails/health#show", as: :rails_health_check

  # Bilingual frontend — English home at /, Arabic at /ar/ (locale via defaults)
  root "pages#home", defaults: { locale: "en" }
  get "ar", to: "pages#home", defaults: { locale: "ar" }, as: :ar_home
  get "en", to: redirect("/")

  # All inner pages: /ar/... and /en/... resolve per-locale templates
  get ":locale/*path", to: "pages#show",
      constraints: { locale: /ar|en/, path: %r{[a-z0-9\-/]+} },
      format: false, as: :page
end
