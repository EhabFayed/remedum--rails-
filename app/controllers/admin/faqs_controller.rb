# General questions shown on the site, separate from the ones attached to an
# article inside the post editor.
class Admin::FaqsController < Admin::BaseController
  before_action :load_faq, only: %i[edit update destroy]

  def index
    @faqs = Faq.general.ordered
    @faq = Faq.new(published: true)
  end

  def new = (@faq = Faq.new(published: true))

  def create
    @faq = Faq.new(faq_params)
    if @faq.save
      redirect_to admin_faqs_path, notice: "تمت إضافة السؤال."
    else
      @faqs = Faq.general.ordered
      render :index, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @faq.update(faq_params)
      redirect_to admin_faqs_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @faq.destroy!
    redirect_to admin_faqs_path, notice: "تم الحذف."
  end

  private

  def load_faq = (@faq = Faq.find(params[:id]))

  def faq_params
    params.require(:faq).permit(:question_ar, :question_en, :answer_ar, :answer_en, :position, :published)
  end
end
