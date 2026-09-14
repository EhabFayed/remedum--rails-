class Admin::CategoriesController < Admin::BaseController
  before_action :load_category, only: %i[edit update destroy]

  def index
    @categories = Category.ordered
    @category = Category.new
  end

  def new = (@category = Category.new)

  def create
    @category = Category.new(category_params)
    if @category.save
      redirect_to admin_categories_path, notice: "تمت إضافة التصنيف."
    else
      @categories = Category.ordered
      render :index, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @category.update(category_params)
      redirect_to admin_categories_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @category.destroy!
    redirect_to admin_categories_path, notice: "تم حذف التصنيف. المقالات بقيت بلا تصنيف."
  end

  private

  def load_category = (@category = Category.find(params[:id]))

  def category_params
    params.require(:category).permit(:name_ar, :name_en, :slug_ar, :slug_en,
                                     :description_ar, :description_en, :position)
  end
end
