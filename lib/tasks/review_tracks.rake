# Loads the three review tracks of the knowledge page with the copy the page
# shipped with, so switching the section to the dashboard changes nothing on
# screen. Only creates what is missing — dashboard edits are never overwritten.
#   bin/rails review_tracks:seed
namespace :review_tracks do
  desc "Create the knowledge-page review tracks from the original copy (idempotent)"
  task seed: :environment do
    t = ->(key, loc) { I18n.t("content.#{key}", locale: loc) }
    rows = [
      { position: 1, kind: "quote", keys: %w[pages_371 pages_372 pages_373 pages_374], image_url: "/assets/img/portrait.webp" },
      { position: 2, kind: "rating", keys: %w[pages_375 pages_376 pages_377 nil], link_url: "https://maps.google.com/?q=Beauty+Roots+Trading+Riyadh" },
      { position: 3, kind: "badge", keys: %w[pages_378 pages_379 pages_380 nil] }
    ]
    created = 0
    rows.each do |r|
      title, body, note, caption = r[:keys]
      next if ReviewTrack.exists?(title_ar: t.(title, :ar))

      ReviewTrack.create!(
        title_ar: t.(title, :ar), title_en: t.(title, :en), body_ar: t.(body, :ar), body_en: t.(body, :en),
        kind: r[:kind], note_ar: t.(note, :ar), note_en: t.(note, :en),
        caption_ar: caption == "nil" ? nil : t.(caption, :ar), caption_en: caption == "nil" ? nil : t.(caption, :en),
        link_url: r[:link_url], image_url: r[:image_url], position: r[:position], published: true
      )
      created += 1
    end
    puts "review tracks created: #{created} (total #{ReviewTrack.count})"
  end
end
