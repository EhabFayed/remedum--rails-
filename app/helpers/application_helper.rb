module ApplicationHelper
  # This app has no asset pipeline: the CSS, JS and images are plain files under
  # public/, and Rails serves them with a one-year cache header. Cloudflare
  # honours that, so a deploy that changes a stylesheet would stay invisible for
  # a year unless the URL changes with it.
  #
  # The suffix is the file's own digest, so it changes exactly when the file
  # does and never otherwise.
  def static_asset(path)
    digest = static_asset_digest(path)
    digest ? "#{path}?v=#{digest}" : path
  end

  private

  # Digests are computed once per process in production, where the files cannot
  # change under a running container, and on every call elsewhere so an edit
  # shows up on the next reload.
  def static_asset_digest(path)
    return compute_static_asset_digest(path) unless Rails.env.production?

    ApplicationHelper.digest_cache[path] ||= compute_static_asset_digest(path) || :missing
    ApplicationHelper.digest_cache[path] == :missing ? nil : ApplicationHelper.digest_cache[path]
  end

  def compute_static_asset_digest(path)
    file = Rails.public_path.join(path.to_s.delete_prefix("/"))
    return nil unless file.file?

    Digest::SHA256.file(file).hexdigest.first(10)
  rescue SystemCallError
    nil
  end

  def self.digest_cache
    @digest_cache ||= {}
  end
end
