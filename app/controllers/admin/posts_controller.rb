class Admin::PostsController < Admin::BaseController
  before_action :load_post, only: %i[edit update destroy toggle_status]

  def index
    @status = params[:status].to_s
    @posts = Post.includes(:category, :author).by_status(@status).order(updated_at: :desc)
    @counts = { all: Post.count, published: Post.published.count, draft: Post.where(status: "draft").count }
  end

  def new
    # One empty section is already there: the intro is written in every article,
    # so making the editor click "add section" first buys nothing.
    @post = Post.new(status: "draft", medically_reviewed: true)
    @post.sections.build(position: 0)
  end

  def create
    @post = Post.new(post_params)
    @post.author ||= current_user

    if @post.save
      prune_empty_sections
      redirect_to edit_admin_post_path(@post), notice: "تم إنشاء المقال."
    else
      ensure_one_section
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    ensure_one_section
  end

  def update
    if @post.update(post_params)
      prune_empty_sections
      redirect_to edit_admin_post_path(@post), notice: "تم الحفظ."
    else
      ensure_one_section
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy!
    redirect_to admin_posts_path, notice: "تم حذف المقال."
  end

  def toggle_status
    @post.update!(status: @post.published? ? "draft" : "published")
    back_or admin_posts_path
  end

  private

  def load_post
    @post = Post.includes(:sections, :faqs).find(params[:id])
  end

  def ensure_one_section
    @post.sections.build(position: 0) if @post.sections.reject(&:marked_for_destruction?).empty?
  end

  # A section the editor added and never filled would otherwise render as a gap
  # on the public page.
  def prune_empty_sections
    @post.sections.reload.select(&:empty?).each(&:destroy)
    @post.sections.reload.each_with_index { |s, i| s.update_column(:position, i) }
  end

  def post_params
    params.require(:post).permit(
      :title_ar, :title_en, :slug_ar, :slug_en, :excerpt_ar, :excerpt_en,
      :cover_url_ar, :cover_width_ar, :cover_height_ar,
      :cover_url_en, :cover_width_en, :cover_height_en,
      :cover_alt_ar, :cover_alt_en,
      :meta_title_ar, :meta_title_en, :meta_description_ar, :meta_description_en,
      :status, :category_id, :medically_reviewed, :byline_ar, :byline_en,
      sections_attributes: %i[
        id _destroy position title_ar title_en body_ar body_en
        image_url_ar image_width_ar image_height_ar
        image_url_en image_width_en image_height_en
        alt_ar alt_en caption_ar caption_en
      ],
      faqs_attributes: %i[id _destroy position question_ar question_en answer_ar answer_en published]
    )
  end
end
