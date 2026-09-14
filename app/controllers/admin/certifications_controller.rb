class Admin::CertificationsController < Admin::BaseController
  before_action :load_certification, only: %i[edit update destroy]

  def index
    @certifications = Certification.ordered
    @certification = Certification.new(published: true)
  end

  def new = (@certification = Certification.new(published: true))

  def create
    @certification = Certification.new(certification_params)
    if @certification.save
      redirect_to admin_certifications_path, notice: "تمت إضافة الاعتماد."
    else
      @certifications = Certification.ordered
      render :index, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @certification.update(certification_params)
      redirect_to admin_certifications_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @certification.destroy!
    redirect_to admin_certifications_path, notice: "تم الحذف."
  end

  private

  def load_certification = (@certification = Certification.find(params[:id]))

  def certification_params
    params.require(:certification).permit(:code, :name_ar, :name_en, :full_name,
                                          :meaning_ar, :meaning_en, :position, :published)
  end
end
