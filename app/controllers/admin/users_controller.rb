class Admin::UsersController < Admin::BaseController
  before_action :require_admin
  before_action :load_user, only: %i[edit update destroy]

  def index = (@users = User.ordered)

  def new = (@user = User.new(role: "editor"))

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to admin_users_path, notice: "تمت إضافة المستخدم."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    # An empty password field means "leave it alone", not "set it to blank".
    attrs = user_params
    attrs = attrs.except(:password, :password_confirmation) if attrs[:password].blank?

    if @user.update(attrs)
      redirect_to admin_users_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @user == current_user
      redirect_to admin_users_path, alert: "لا يمكنك حذف حسابك أثناء استخدامه."
    elsif User.where(role: "admin").count <= 1 && @user.admin?
      redirect_to admin_users_path, alert: "لا يمكن حذف آخر مدير."
    else
      @user.destroy!
      redirect_to admin_users_path, notice: "تم حذف المستخدم."
    end
  end

  private

  def load_user = (@user = User.find(params[:id]))

  # :role is assignable here on purpose — the whole controller is behind
  # require_admin, so only an admin can hand out or revoke admin.
  def user_params
    params.require(:user).permit(:name, :email, :role, :title_ar, :title_en,
                                 :password, :password_confirmation)
  end
end
