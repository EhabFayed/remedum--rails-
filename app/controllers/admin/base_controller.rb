# Everything under /admin hangs off this: a session, the dashboard chrome, and
# no indexing. Public controllers deliberately do not inherit from it.
class Admin::BaseController < ApplicationController
  layout "admin"

  # Sections parked until a public page reads from them: their data is kept,
  # but the client cannot reach an editor whose changes would not show anywhere.
  # Remove a name here to bring the section back.
  HIDDEN_SECTIONS = %w[brands products faqs].freeze

  before_action :require_login
  before_action :park_hidden_section
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

  def park_hidden_section
    return unless HIDDEN_SECTIONS.include?(controller_name)

    redirect_to admin_root_path, notice: "هذا القسم غير مفعّل حاليًا على الموقع."
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
