class Admin::MediaController < Admin::BaseController
  def index
    @assets = MediaAsset.recent.limit(200)

    respond_to do |format|
      format.html
      format.json { render json: { ok: true, media: @assets.as_json(only: %i[id url filename width height byte_size alt_ar alt_en]) } }
    end
  end

  def create
    result = MediaUploader.new(params[:file], hint: params[:name], user: current_user).call

    if result[:ok]
      render json: result
    else
      render json: result, status: result.delete(:status) || :unprocessable_entity
    end
  end

  def destroy
    asset = MediaAsset.find(params[:id])
    asset.destroy_with_file!
    respond_to do |format|
      format.html { redirect_to admin_media_path, notice: "تم حذف الصورة." }
      format.json { render json: { ok: true } }
    end
  end
end
