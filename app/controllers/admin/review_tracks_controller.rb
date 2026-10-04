class Admin::ReviewTracksController < Admin::BaseController
  before_action :load_track, only: %i[edit update destroy toggle]

  def index
    @tracks = ReviewTrack.ordered
    @track = ReviewTrack.new(published: true, kind: "plain", position: (ReviewTrack.maximum(:position) || 0) + 1)
  end

  def new = (@track = ReviewTrack.new(published: true, kind: "plain"))

  def create
    @track = ReviewTrack.new(track_params)
    if @track.save
      redirect_to admin_review_tracks_path, notice: "تمت إضافة المسار."
    else
      @tracks = ReviewTrack.ordered
      render :index, status: :unprocessable_entity
    end
  end

  def edit; end

  def update
    if @track.update(track_params)
      redirect_to admin_review_tracks_path, notice: "تم الحفظ."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @track.destroy!
    redirect_to admin_review_tracks_path, notice: "تم الحذف."
  end

  def toggle
    @track.update!(published: !@track.published)
    redirect_to admin_review_tracks_path
  end

  def heading
    ReviewTrack.write_heading(params.fetch(:heading, {}).permit(*ReviewTrack::HEADING_KEYS))
    redirect_to admin_review_tracks_path, notice: "تم حفظ عنوان القسم."
  end

  private

  def load_track = (@track = ReviewTrack.find(params[:id]))

  def track_params
    params.require(:review_track).permit(:title_ar, :title_en, :body_ar, :body_en, :kind, :note_ar, :note_en,
                                         :caption_ar, :caption_en, :link_url, :image_url, :position, :published)
  end
end
