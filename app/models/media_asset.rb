# A file uploaded through the dashboard. Files live on disk under
# public/uploads and are served straight by the web server; the row exists so
# the library can list them and so an alt text can travel with the image.
class MediaAsset < ApplicationRecord
  belongs_to :user, optional: true

  validates :url, :filename, :content_type, presence: true
  validates :url, uniqueness: true

  scope :recent, -> { order(created_at: :desc) }

  def dimensions = width && height ? "#{width}×#{height}" : nil

  def human_size
    ActiveSupport::NumberHelper.number_to_human_size(byte_size, precision: 2)
  end

  def disk_path
    Rails.public_path.join(url.delete_prefix("/"))
  end

  # Deleting the row without deleting the file leaves orphans on disk that
  # nothing can ever reach again.
  def destroy_with_file!
    path = disk_path
    destroy!
    File.delete(path) if File.exist?(path) && path.to_s.start_with?(Rails.public_path.join("uploads").to_s)
  end
end
