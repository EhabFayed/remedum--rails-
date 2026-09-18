# Updates only the knowledge-post cover images — no other seeded rows are
# touched, so dashboard edits elsewhere survive. Safe to re-run.
#   bin/rails covers:refresh
namespace :covers do
  COVERS = {
    "monophasic-hyaluronic-acid-science" => {
      url: "/assets/img/knowledge-science.webp", w: 1600, h: 1067,
      alt_ar: "مختصة مختبر تفحص عيّنة داخل معمل تحاليل",
      alt_en: "A laboratory specialist examining a sample"
    }
  }.freeze

  desc "Point knowledge posts at their current cover images"
  task refresh: :environment do
    COVERS.each do |slug, c|
      post = Post.find_by(slug_en: slug)
      next puts("skip: no post #{slug}") unless post
      post.update!(
        cover_url_ar: c[:url], cover_url_en: c[:url],
        cover_width_ar: c[:w], cover_height_ar: c[:h],
        cover_width_en: c[:w], cover_height_en: c[:h],
        cover_alt_ar: c[:alt_ar], cover_alt_en: c[:alt_en]
      )
      puts "updated: #{slug} -> #{c[:url]}"
    end
  end
end
