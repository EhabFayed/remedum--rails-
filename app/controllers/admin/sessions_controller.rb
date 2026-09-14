class Admin::SessionsController < Admin::BaseController
  layout "admin_plain"

  skip_before_action :require_login, only: %i[new create]

  # Rails' own throttle: the login form is the one unauthenticated write in the
  # dashboard, so it is the one that needs a ceiling.
  rate_limit to: 10, within: 15.minutes, only: :create,
             with: -> { redirect_to admin_login_path, alert: "محاولات كثيرة. انتظر ربع ساعة." }

  def new
    redirect_to admin_root_path and return if current_user

    @email = ""
  end

  def create
    user = User.find_by(email: params[:email].to_s.downcase.strip)

    if user&.authenticate(params[:password].to_s)
      reset_session
      session[:user_id] = user.id
      user.update_column(:last_login_at, Time.current)
      redirect_to session.delete(:return_to) || admin_root_path, notice: "أهلًا #{user.name}."
    else
      @email = params[:email].to_s
      flash.now[:alert] = "البريد أو كلمة المرور غير صحيحة."
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    reset_session
    redirect_to admin_login_path, notice: "تم تسجيل الخروج."
  end
end
