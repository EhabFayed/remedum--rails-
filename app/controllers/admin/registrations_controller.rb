# Public sign-up for the dashboard. The account is created pending, with the
# lowest role; it cannot log in until an admin approves it and sets the role.
class Admin::RegistrationsController < Admin::BaseController
  layout "admin_plain"
  skip_before_action :require_login

  rate_limit to: 5, within: 1.hour, only: :create,
             with: -> { redirect_to admin_signup_path, alert: "محاولات كثيرة. حاول لاحقًا." }

  def new
    redirect_to admin_root_path and return if current_user
    @user = User.new
  end

  def create
    @user = User.new(signup_params.merge(role: "editor", status: "pending"))
    if @user.save
      redirect_to admin_login_path, notice: "تم إرسال طلبك. سيتمكن حسابك من الدخول بعد موافقة المدير وتحديد صلاحيتك."
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def signup_params
    params.require(:user).permit(:name, :email, :title_ar, :title_en, :password, :password_confirmation)
  end
end
