Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions
  get "up" => "rails/health#show", as: :rails_health_check

  # ---------------------------------------------------------------- dashboard
  namespace :admin do
    root "dashboard#index"

    get    "login",  to: "sessions#new",     as: :login
    post   "login",  to: "sessions#create"
    delete "logout", to: "sessions#destroy", as: :logout

    resources :posts do
      member { patch :toggle_status }
    end
    resources :categories, except: :show
    resources :faqs, except: :show
    resources :brands, except: :show
    resources :products, except: :show
    resources :certifications, except: :show
    resources :leads, only: %i[index show update destroy] do
      collection { get :export }
    end
    resources :media, only: %i[index create destroy]
    resources :users, except: :show
    resource  :settings, only: %i[show update]
  end

  # ------------------------------------------------------------- public forms
  resources :leads, only: :create

  # ---------------------------------------------------- bilingual public site
  # English home at /, Arabic home at /ar/ (locale via route defaults)
  root "pages#home", defaults: { locale: "en" }
  get "ar", to: "pages#home", defaults: { locale: "ar" }, as: :ar_home
  get "en", to: redirect("/")

  # Articles are database-backed and must be matched before the catch-all below,
  # which would otherwise look for a template named knowledge/<slug>.
  get ":locale/knowledge/:slug", to: "articles#show",
      constraints: { locale: /ar|en/, slug: %r{[^/]+} }, as: :article

  # Every other inner page resolves to a per-locale template
  get ":locale/*path", to: "pages#show",
      constraints: { locale: /ar|en/, path: %r{[a-z0-9\-/]+} },
      format: false, as: :page
end
