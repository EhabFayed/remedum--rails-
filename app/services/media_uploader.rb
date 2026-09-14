# Takes an uploaded file, converts it to WebP at a sane size, writes it under
# public/uploads and records it in the media library.
#
# The filename is built from a description rather than random bytes: an image
# filename is a search signal, and "a7f3b2.webp" throws it away.
class MediaUploader
  MAX_BYTES = 12.megabytes
  MAX_WIDTH = 1600
  ALLOWED = %w[image/jpeg image/png image/webp image/avif image/gif].freeze

  Result = Struct.new(:ok, :payload)

  def initialize(file, hint: nil, user: nil)
    @file = file
    @hint = hint.to_s
    @user = user
  end

  def call
    return error("no_file", "لم يصل أي ملف.", :bad_request) unless @file.respond_to?(:tempfile)
    return error("too_large", "الملف أكبر من ١٢ ميجابايت.", :payload_too_large) if @file.size > MAX_BYTES

    image = Vips::Image.new_from_file(@file.tempfile.path, access: :sequential)
    return error("unsupported", "صيغة غير مدعومة.", :unsupported_media_type) unless allowed?

    name = build_filename
    path = uploads_dir.join(name)
    write_webp(image, path)

    record(name, path)
  rescue Vips::Error
    error("not_an_image", "الملف ليس صورة صالحة (JPEG · PNG · WebP · AVIF · GIF).", :unsupported_media_type)
  rescue StandardError => e
    Rails.logger.error("[MediaUploader] #{e.class}: #{e.message}")
    error("failed", "تعذّر الرفع. حاول مرة أخرى.", :internal_server_error)
  end

  private

  # The declared content type comes from the browser and can be anything, so the
  # real check is that libvips could open it at all; this only rejects the
  # obvious mismatches early.
  def allowed?
    ALLOWED.include?(@file.content_type.to_s) || @file.content_type.blank?
  end

  def uploads_dir
    @uploads_dir ||= Rails.public_path.join("uploads").tap { |d| FileUtils.mkdir_p(d) }
  end

  def build_filename
    source = @hint.presence || File.basename(@file.original_filename.to_s, ".*")
    base = Slug.english(source).first(60).presence || "image"
    "#{base}-#{SecureRandom.hex(3)}.webp"
  end

  def write_webp(image, path)
    image = image.autorot
    image = image.resize(MAX_WIDTH.to_f / image.width) if image.width > MAX_WIDTH
    image = image.colourspace(:srgb) if image.bands > 3 ? false : image.bands < 3
    image.write_to_file("#{path}[Q=82,strip=true]")
  end

  def record(name, path)
    written = Vips::Image.new_from_file(path.to_s)
    asset = MediaAsset.create!(
      url: "/uploads/#{name}", filename: name, content_type: "image/webp",
      byte_size: File.size(path), width: written.width, height: written.height, user: @user
    )
    { ok: true, id: asset.id, url: asset.url, width: asset.width, height: asset.height, size: asset.byte_size }
  end

  def error(code, message, status)
    { ok: false, error: code, message: message, status: status }
  end
end
