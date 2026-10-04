# The three review tracks on the knowledge page ("ثلاثة مسارات — مرتبة حسب قوة
# المصداقية"). Each card has a title and a line of text plus one optional
# decoration, picked by `kind`:
#   quote  — a quote box: note = the quote, caption = who said it, image_url = portrait
#   rating — five stars and a link: note = link label, link_url = where it goes
#   badge  — a single chip: note = chip text
#   plain  — nothing under the text
class CreateReviewTracks < ActiveRecord::Migration[8.0]
  def change
    create_table :review_tracks do |t|
      t.string  :title_ar, null: false
      t.string  :title_en, null: false
      t.text    :body_ar
      t.text    :body_en
      t.string  :kind, null: false, default: "plain"
      t.text    :note_ar
      t.text    :note_en
      t.string  :caption_ar
      t.string  :caption_en
      t.string  :link_url
      t.string  :image_url
      t.integer :position, null: false, default: 0
      t.boolean :published, null: false, default: true
      t.timestamps
    end
    add_index :review_tracks, :position
  end
end
