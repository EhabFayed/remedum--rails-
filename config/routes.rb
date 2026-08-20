Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions
  get "up" => "rails/health#show", as: :rails_health_check

  # Bilingual frontend (migrated static site) — English home at /, Arabic at /ar/
  root "pages#home_en"
  get "ar", to: "pages#home_ar", as: :ar_home
  get "en", to: redirect("/")

  # All inner pages: /ar/... and /en/... map to app/views/pages/<locale>/<path>
  get ":locale/*path", to: "pages#show",
      constraints: { locale: /ar|en/, path: %r{[a-z0-9\-/]+} },
      format: false, as: :page
end
