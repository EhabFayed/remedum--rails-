# Points stored image URLs (products, brands, post covers, sections, settings…)
# at the WebP copies in public/assets/img. Only a URL whose .webp file exists is
# changed, and the original JPG files stay on disk, so the task is safe to re-run.
#   bin/rails images:webp
namespace :images do
  # The supply-page warehouse photo shares its name with a different WebP
  # graphic already used on the homes, so its copy has its own name.
  RENAMED = { "/assets/img/quality-warehouse.jpg" => "/assets/img/quality-warehouse-photo.webp" }.freeze

  desc "Point stored /assets/img JPG/PNG URLs at their WebP copies"
  task webp: :environment do
    Rails.application.eager_load!
    pattern = %r{/assets/img/[A-Za-z0-9_-]+\.(?:jpe?g|png)\b}
    swap = lambda do |url|
      RENAMED.fetch(url) do
        webp = url.sub(/\.(?:jpe?g|png)\z/, ".webp")
        File.exist?(Rails.public_path.join(webp.delete_prefix("/"))) ? webp : url
      end
    end

    changed = 0
    ApplicationRecord.descendants.each do |model|
      next if model.abstract_class? || !model.table_exists?

      columns = model.columns.select { |c| %i[string text].include?(c.type) }.map(&:name)
      model.find_each do |record|
        updates = columns.each_with_object({}) do |col, h|
          value = record[col]
          next unless value.is_a?(String) && value.match?(pattern)

          replaced = value.gsub(pattern, &swap)
          h[col] = replaced unless replaced == value
        end
        next if updates.empty?

        record.update_columns(updates)
        changed += 1
        puts "#{model.name}##{record.id}: #{updates.keys.join(', ')}"
      end
    end
    puts "#{changed} record(s) updated."
  end
end
