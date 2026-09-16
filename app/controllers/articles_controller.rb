# Article pages under /:locale/knowledge/:slug. Separate from PagesController
# because these come from the database, not from a template on disk.
class ArticlesController < ApplicationController
  layout "site"

  def show
    locale = params[:locale].to_s
    @post = Post.published.includes(:sections, :faqs, :category)
                .find_by(locale == "en" ? { slug_en: params[:slug] } : { slug_ar: params[:slug] })

    # A slug typed in the other language should land on the article, not a 404.
    @post ||= Post.published.find_by(slug_ar: params[:slug]) || Post.published.find_by(slug_en: params[:slug])
    raise ActionController::RoutingError, "No such article: #{params[:slug]}" unless @post

    # One article, one URL per language: anything else lands on the canonical
    # path. Both sides are compared decoded because Arabic slugs arrive encoded.
    canonical = @post.path_for(locale)
    unless CGI.unescape(request.path).chomp("/") == CGI.unescape(canonical).chomp("/")
      return redirect_to(canonical, status: :moved_permanently)
    end

    Post.where(id: @post.id).update_all("views = views + 1")
    @related = Post.published.where(category_id: @post.category_id).where.not(id: @post.id)
                   .recent.limit(2)
  end
end
