# Site search index. The search box (public/assets/js/search.js) loads this
# once per locale and filters it in the browser:
#   products  — config/search_products.json (page entries reuse the page's
#               own title/description from config/locales/content.*.yml)
#   knowledge — published articles, live from the dashboard
class SearchController < ApplicationController
  PRODUCTS = JSON.parse(File.read(Rails.root.join("config/search_products.json")))["products"].freeze

  def index
    loc = I18n.locale.to_s
    expires_in 5.minutes, public: true
    render json: {
      labels: t("site.search"),
      groups: [
        { key: "products", label: t("site.search.products"), items: product_items(loc) },
        { key: "knowledge", label: t("site.search.knowledge"), items: article_items }
      ]
    }
  end

  private

  def product_items(loc)
    PRODUCTS.map do |p|
      if p["page"]
        slug = p["page"].tr("/-", "__")
        title = t("content.#{slug}_title", default: p["page"])
        text  = t("content.#{slug}_description", default: "")
        url   = helpers.locale_path(p["page"])
      else
        title = p.dig("title", loc)
        text  = p.dig("text", loc)
        url   = helpers.locale_path(p["url"])
      end
      { title: title, text: text, url: url, tag: p.dig("tag", loc), keywords: p["keywords"] }
    end
  end

  def article_items
    Post.published.includes(:category).recent.limit(200).map do |post|
      cover = post.cover_for(I18n.locale)
      { title: post.title_for(I18n.locale), text: post.excerpt_for(I18n.locale).to_s,
        url: post.path_for(I18n.locale), tag: post.category&.name_for(I18n.locale),
        image: cover && cover[:url] }
    end
  end
end
