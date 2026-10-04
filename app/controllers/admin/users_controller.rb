class Admin::UsersController < Admin::BaseController
  before_action :require_admin
  before_action :load_user, only: %i[edit update destroy approve]

  def index
    @pending = User.pending.order(:created_at)
    @users = User.active.ordered
  end

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

  # Approving is the moment the role is decided: the request row sends it.
  def approve
    role = User::ROLES.include?(params[:role].to_s) ? params[:role].to_s : "editor"
    @user.update!(status: "active", role: role)
    redirect_to admin_users_path, notice: "تم تفعيل حساب #{@user.name} بصلاحية #{@user.display_role}."
  end

  def update
    # An empty password field means "leave it alone", not "set it to blank".
    attrs = user_params
    attrs = attrs.except(:password, :password_confirmation) if attrs[:password].blank?
    # An admin cannot lock themselves out, nor suspend the last active admin.
    if attrs[:status] == "pending" && (@user == current_user || last_active_admin?(@user))
      attrs = attrs.except(:status)
      flash[:alert] = "لا يمكن تعليق هذا الحساب."
    end

    if @user.update(attrs)
      redirect_to admin_users_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @user == current_user
      redirect_to admin_users_path, alert: "لا يمكنك حذف حسابك أثناء استخدامه."
    elsif last_active_admin?(@user)
      redirect_to admin_users_path, alert: "لا يمكن حذف آخر مدير."
    else
      @user.destroy!
      redirect_to admin_users_path, notice: (@user.pending? ? "تم رفض طلب #{@user.name}." : "تم حذف المستخدم.")
    end
  end

  private

  def load_user = (@user = User.find(params[:id]))

  def last_active_admin?(user)
    user.admin? && user.active? && User.active.where(role: "admin").count <= 1
  end

  # :role is assignable here on purpose — the whole controller is behind
  # require_admin, so only an admin can hand out or revoke admin.
  def user_params
    params.require(:user).permit(:name, :email, :role, :title_ar, :title_en,
                                 :status, :password, :password_confirmation)
  end
end
