# The whole dashboard schema in one migration: the app had no tables at all, so
# splitting it per model would only add ceremony without adding history.
class CreateDashboardSchema < ActiveRecord::Migration[8.0]
  def change
    # ---------- people ----------
    create_table :users do |t|
      t.string  :name,            null: false
      t.string  :email,           null: false
      t.string  :password_digest, null: false
      t.string  :role,            null: false, default: "editor"
      t.string  :title_ar
      t.string  :title_en
      t.datetime :last_login_at
      t.timestamps
    end
    add_index :users, :email, unique: true

    # ---------- knowledge centre ----------
    create_table :categories do |t|
      t.string  :name_ar, null: false
      t.string  :name_en, null: false
      t.string  :slug_ar, null: false
      t.string  :slug_en, null: false
      t.text    :description_ar
      t.text    :description_en
      t.integer :position, null: false, default: 0
      t.timestamps
    end
    add_index :categories, :slug_ar, unique: true
    add_index :categories, :slug_en, unique: true

    create_table :posts do |t|
      t.string  :title_ar, null: false
      t.string  :title_en, null: false
      t.string  :slug_ar,  null: false
      t.string  :slug_en,  null: false
      t.text    :excerpt_ar
      t.text    :excerpt_en

      # Covers are per locale: an image carrying Arabic text is wrong on the
      # English page. The English cover falls back to the Arabic one.
      t.string  :cover_url_ar
      t.integer :cover_width_ar
      t.integer :cover_height_ar
      t.string  :cover_url_en
      t.integer :cover_width_en
      t.integer :cover_height_en
      t.string  :cover_alt_ar
      t.string  :cover_alt_en

      t.string  :meta_title_ar
      t.string  :meta_title_en
      t.text    :meta_description_ar
      t.text    :meta_description_en

      t.string   :status, null: false, default: "draft"
      t.datetime :published_at
      t.integer  :read_minutes, null: false, default: 3
      t.integer  :views,        null: false, default: 0
      t.boolean  :medically_reviewed, null: false, default: true
      t.string   :byline_ar
      t.string   :byline_en

      t.references :category, foreign_key: { on_delete: :nullify }
      t.references :author, foreign_key: { to_table: :users, on_delete: :nullify }
      t.timestamps
    end
    add_index :posts, :slug_ar, unique: true
    add_index :posts, :slug_en, unique: true
    add_index :posts, [ :status, :published_at ]

    create_table :post_sections do |t|
      t.references :post, null: false, foreign_key: { on_delete: :cascade }
      t.integer :position, null: false, default: 0
      t.string  :title_ar
      t.string  :title_en
      t.text    :body_ar   # sanitised HTML from the rich editor
      t.text    :body_en
      t.string  :image_url_ar
      t.string  :image_url_en
      t.integer :image_width_ar
      t.integer :image_height_ar
      t.integer :image_width_en
      t.integer :image_height_en
      t.string  :alt_ar
      t.string  :alt_en
      t.string  :caption_ar
      t.string  :caption_en
      t.timestamps
    end
    add_index :post_sections, [ :post_id, :position ]

    create_table :faqs do |t|
      t.references :post, foreign_key: { on_delete: :cascade }
      t.string  :question_ar, null: false
      t.string  :question_en, null: false
      t.text    :answer_ar,   null: false
      t.text    :answer_en,   null: false
      t.integer :position, null: false, default: 0
      t.boolean :published, null: false, default: true
      t.timestamps
    end

    # ---------- catalogue ----------
    create_table :brands do |t|
      t.string  :slug, null: false
      t.string  :name_ar, null: false
      t.string  :name_en, null: false
      t.string  :tagline_ar
      t.string  :tagline_en
      t.text    :body_ar
      t.text    :body_en
      t.string  :image_url
      t.string  :image_alt_ar
      t.string  :image_alt_en
      t.string  :page_path          # where the site already publishes this brand
      t.boolean :exclusive, null: false, default: false
      t.integer :position,  null: false, default: 0
      t.string  :status,    null: false, default: "published"
      t.timestamps
    end
    add_index :brands, :slug, unique: true

    create_table :products do |t|
      t.references :brand, foreign_key: { on_delete: :cascade }
      t.string  :slug, null: false
      t.string  :name_ar, null: false
      t.string  :name_en, null: false
      t.string  :subtitle_ar
      t.string  :subtitle_en
      t.text    :indications_ar
      t.text    :indications_en
      t.integer :duration_from      # months the result typically lasts
      t.integer :duration_to
      t.string  :accent_color
      t.string  :image_url
      t.string  :page_path
      t.integer :position, null: false, default: 0
      t.string  :status,   null: false, default: "published"
      t.timestamps
    end
    add_index :products, :slug, unique: true

    create_table :certifications do |t|
      t.string  :code, null: false
      t.string  :name_ar, null: false
      t.string  :name_en, null: false
      t.integer :position, null: false, default: 0
      t.boolean :published, null: false, default: true
      t.timestamps
    end
    add_index :certifications, :code, unique: true

    # ---------- inbound ----------
    create_table :leads do |t|
      t.string  :name,    null: false
      t.string  :facility
      t.string  :facility_type
      t.string  :city
      t.string  :phone
      t.string  :email
      t.string  :products, array: true, null: false, default: []
      t.string  :volume
      t.boolean :existing_client,  null: false, default: false
      t.boolean :visit_requested,  null: false, default: false
      t.boolean :eligibility_ack,  null: false, default: false
      t.text    :message
      t.string  :locale, null: false, default: "ar"
      t.string  :source, null: false, default: "quote"
      t.string  :source_path
      t.string  :status, null: false, default: "new"
      t.text    :admin_notes
      t.timestamps
    end
    add_index :leads, [ :status, :created_at ]

    # ---------- media & settings ----------
    create_table :media_assets do |t|
      t.string  :url,      null: false
      t.string  :filename, null: false
      t.string  :content_type, null: false
      t.integer :byte_size, null: false, default: 0
      t.integer :width
      t.integer :height
      t.string  :alt_ar
      t.string  :alt_en
      t.references :user, foreign_key: { on_delete: :nullify }
      t.timestamps
    end
    add_index :media_assets, :url, unique: true

    create_table :settings, id: false do |t|
      t.string   :key, null: false, primary_key: true
      t.text     :value
      t.datetime :updated_at, null: false
    end
  end
end
