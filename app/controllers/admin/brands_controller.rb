class Admin::BrandsController < Admin::BaseController
  before_action :load_brand, only: %i[edit update destroy]

  def index = (@brands = Brand.includes(:products).ordered)

  def new = (@brand = Brand.new(status: "published"))

  def create
    @brand = Brand.new(brand_params)
    if @brand.save
      redirect_to admin_brands_path, notice: "تمت إضافة العلامة."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @brand.update(brand_params)
      redirect_to admin_brands_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @brand.destroy!
    redirect_to admin_brands_path, notice: "تم حذف العلامة ومنتجاتها."
  end

  private

  def load_brand = (@brand = Brand.find(params[:id]))

  def brand_params
    params.require(:brand).permit(:slug, :name_ar, :name_en, :tagline_ar, :tagline_en,
                                  :body_ar, :body_en, :image_url, :image_alt_ar, :image_alt_en,
                                  :page_path, :exclusive, :position, :status)
  end
end
