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
      collection { patch :hide_all; patch :show_all }
    end
    resources :categories, except: :show
    resources :faqs, except: :show
    resources :brands, except: :show
    resources :products, except: :show
    resources :certifications, except: :show
    resources :review_tracks, except: :show do
      member { patch :toggle }
      collection { patch :heading }
    end
    resources :leads, only: %i[index show update destroy] do
      collection { get :export }
    end
    resources :media, only: %i[index create destroy]
    resources :users, except: :show do
      member { patch :approve }
    end
    get  "signup", to: "registrations#new",    as: :signup
    post "signup", to: "registrations#create"
    resource  :settings, only: %i[show update]
  end

  # ------------------------------------------------------------- public forms
  resources :leads, only: :create

  # ---------------------------------------------------- bilingual public site
  # English home at /, Arabic home at /ar/ (locale via route defaults)
  # The dashboard has no language prefix: /ar/admin/posts?x=1 → /admin/posts?x=1
  get ":locale/admin(/*rest)", constraints: { locale: /ar|en/ }, format: false,
      to: redirect { |p, req| [ "/admin", p[:rest] ].compact.join("/") + (req.query_string.present? ? "?#{req.query_string}" : "") }
  get "admin/:locale", constraints: { locale: /ar|en/ }, to: redirect("/admin")

  # Arabic is the default language and its home lives at the bare domain;
  # /ar keeps working for old links. Arabic inner pages stay under /ar/….
  root "pages#home", defaults: { locale: "ar" }
  get "ar", to: redirect("/", status: 301), as: :ar_home
  get "en", to: "pages#home", defaults: { locale: "en" }, as: :en_home

  # Site search index (JSON), matched before the catch-all page route
  get ":locale/search-index", to: "search#index", constraints: { locale: /ar|en/ },
      defaults: { format: :json }, as: :search_index

  # Articles are database-backed and must be matched before the catch-all below,
  # which would otherwise look for a template named knowledge/<slug>.
  get ":locale/knowledge/:slug", to: "articles#show",
      constraints: { locale: /ar|en/, slug: %r{[^/]+} }, as: :article

  # Every other inner page resolves to a per-locale template
  get ":locale/*path", to: "pages#show",
      constraints: { locale: /ar|en/, path: %r{[a-z0-9\-/]+} },
      format: false, as: :page
end
