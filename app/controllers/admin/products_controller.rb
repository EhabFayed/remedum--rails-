class Admin::ProductsController < Admin::BaseController
  before_action :load_product, only: %i[edit update destroy]
  before_action :load_brands, only: %i[new create edit update]

  def index = (@products = Product.includes(:brand).ordered)

  def new = (@product = Product.new(status: "published", brand_id: params[:brand_id]))

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to admin_products_path, notice: "تمت إضافة المنتج."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @product.update(product_params)
      redirect_to admin_products_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy!
    redirect_to admin_products_path, notice: "تم حذف المنتج."
  end

  private

  def load_product = (@product = Product.find(params[:id]))
  def load_brands  = (@brands = Brand.ordered)

  def product_params
    params.require(:product).permit(:brand_id, :slug, :name_ar, :name_en, :subtitle_ar, :subtitle_en,
                                    :indications_ar, :indications_en, :duration_from, :duration_to,
                                    :accent_color, :image_url, :page_path, :position, :status)
  end
end
