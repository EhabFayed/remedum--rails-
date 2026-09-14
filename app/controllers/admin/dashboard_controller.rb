class Admin::DashboardController < Admin::BaseController
  def index
    @counts = {
      published_posts: Post.published.count,
      draft_posts: Post.where(status: "draft").count,
      categories: Category.count,
      brands: Brand.count,
      products: Product.count,
      media: MediaAsset.count,
      leads: Lead.count,
      new_leads: Lead.open_requests.count
    }
    @recent_leads = Lead.recent.limit(6)
    @recent_posts = Post.includes(:category).order(updated_at: :desc).limit(5)
    @missing = health_warnings
  end

  private

  # Small nags that are cheap to check and expensive to discover late: an
  # article published without a cover, a setting the footer reads and cannot
  # find, an image with no alt text.
  def health_warnings
    warnings = []

    no_cover = Post.published.where(cover_url_ar: [ nil, "" ]).count
    warnings << { text: "#{no_cover} مقال منشور بلا صورة غلاف", path: admin_posts_path } if no_cover.positive?

    no_alt = PostSection.where.not(image_url_ar: [ nil, "" ]).where(alt_ar: [ nil, "" ]).count
    warnings << { text: "#{no_alt} صورة داخل المقالات بلا نص بديل", path: admin_posts_path } if no_alt.positive?

    empty_settings = Setting::KEYS - Setting.map.reject { |_, v| v.blank? }.keys
    if empty_settings.any?
      warnings << { text: "#{empty_settings.size} إعداد موقع لم يُملأ بعد", path: admin_settings_path }
    end

    warnings
  end
end
