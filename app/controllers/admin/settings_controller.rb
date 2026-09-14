class Admin::SettingsController < Admin::BaseController
  def show
    @values = Setting.map
  end

  def update
    # Named keys rather than permit!: the model slices to KEYS anyway, but the
    # allowlist belongs where the parameters are read.
    Setting.write_all(params.fetch(:settings, {}).permit(*Setting::KEYS).to_h)
    redirect_to admin_settings_path, notice: "تم حفظ الإعدادات."
  end
end
