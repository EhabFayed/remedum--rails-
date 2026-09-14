# Everything under /admin hangs off this: a session, the dashboard chrome, and
# no indexing. Public controllers deliberately do not inherit from it.
class Admin::BaseController < ApplicationController
  layout "admin"

  before_action :require_login
  before_action :no_index
  skip_around_action :switch_locale

  helper_method :current_user

  private

  def current_user
    return @current_user if defined?(@current_user)

    @current_user = session[:user_id] && User.find_by(id: session[:user_id])
  end

  def require_login
    return if current_user

    session[:return_to] = request.fullpath if request.get? || request.head?
    redirect_to admin_login_path, alert: "سجّل الدخول للمتابعة."
  end

  def require_admin
    return if current_user&.admin?

    redirect_to admin_root_path, alert: "هذا القسم للمديرين فقط."
  end

  def no_index
    response.set_header("X-Robots-Tag", "noindex, nofollow")
  end

  # Dashboard lists are edited in place; after a write we return to where the
  # editor was rather than to a canonical index they did not ask for.
  def back_or(default)
    redirect_back fallback_location: default
  end
end
