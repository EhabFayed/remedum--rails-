# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2026_09_14_110000) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "brands", force: :cascade do |t|
    t.string "slug", null: false
    t.string "name_ar", null: false
    t.string "name_en", null: false
    t.string "tagline_ar"
    t.string "tagline_en"
    t.text "body_ar"
    t.text "body_en"
    t.string "image_url"
    t.string "image_alt_ar"
    t.string "image_alt_en"
    t.string "page_path"
    t.boolean "exclusive", default: false, null: false
    t.integer "position", default: 0, null: false
    t.string "status", default: "published", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_brands_on_slug", unique: true
  end

  create_table "categories", force: :cascade do |t|
    t.string "name_ar", null: false
    t.string "name_en", null: false
    t.string "slug_ar", null: false
    t.string "slug_en", null: false
    t.text "description_ar"
    t.text "description_en"
    t.integer "position", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug_ar"], name: "index_categories_on_slug_ar", unique: true
    t.index ["slug_en"], name: "index_categories_on_slug_en", unique: true
  end

  create_table "certifications", force: :cascade do |t|
    t.string "code", null: false
    t.string "name_ar", null: false
    t.string "name_en", null: false
    t.integer "position", default: 0, null: false
    t.boolean "published", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "full_name"
    t.text "meaning_ar"
    t.text "meaning_en"
    t.index ["code"], name: "index_certifications_on_code", unique: true
  end

  create_table "faqs", force: :cascade do |t|
    t.bigint "post_id"
    t.string "question_ar", null: false
    t.string "question_en", null: false
    t.text "answer_ar", null: false
    t.text "answer_en", null: false
    t.integer "position", default: 0, null: false
    t.boolean "published", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_faqs_on_post_id"
  end

  create_table "leads", force: :cascade do |t|
    t.string "name", null: false
    t.string "facility"
    t.string "facility_type"
    t.string "city"
    t.string "phone"
    t.string "email"
    t.string "products", default: [], null: false, array: true
    t.string "volume"
    t.boolean "existing_client", default: false, null: false
    t.boolean "visit_requested", default: false, null: false
    t.boolean "eligibility_ack", default: false, null: false
    t.text "message"
    t.string "locale", default: "ar", null: false
    t.string "source", default: "quote", null: false
    t.string "source_path"
    t.string "status", default: "new", null: false
    t.text "admin_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["status", "created_at"], name: "index_leads_on_status_and_created_at"
  end

  create_table "media_assets", force: :cascade do |t|
    t.string "url", null: false
    t.string "filename", null: false
    t.string "content_type", null: false
    t.integer "byte_size", default: 0, null: false
    t.integer "width"
    t.integer "height"
    t.string "alt_ar"
    t.string "alt_en"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["url"], name: "index_media_assets_on_url", unique: true
    t.index ["user_id"], name: "index_media_assets_on_user_id"
  end

  create_table "post_sections", force: :cascade do |t|
    t.bigint "post_id", null: false
    t.integer "position", default: 0, null: false
    t.string "title_ar"
    t.string "title_en"
    t.text "body_ar"
    t.text "body_en"
    t.string "image_url_ar"
    t.string "image_url_en"
    t.integer "image_width_ar"
    t.integer "image_height_ar"
    t.integer "image_width_en"
    t.integer "image_height_en"
    t.string "alt_ar"
    t.string "alt_en"
    t.string "caption_ar"
    t.string "caption_en"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id", "position"], name: "index_post_sections_on_post_id_and_position"
    t.index ["post_id"], name: "index_post_sections_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title_ar", null: false
    t.string "title_en", null: false
    t.string "slug_ar", null: false
    t.string "slug_en", null: false
    t.text "excerpt_ar"
    t.text "excerpt_en"
    t.string "cover_url_ar"
    t.integer "cover_width_ar"
    t.integer "cover_height_ar"
    t.string "cover_url_en"
    t.integer "cover_width_en"
    t.integer "cover_height_en"
    t.string "cover_alt_ar"
    t.string "cover_alt_en"
    t.string "meta_title_ar"
    t.string "meta_title_en"
    t.text "meta_description_ar"
    t.text "meta_description_en"
    t.string "status", default: "draft", null: false
    t.datetime "published_at"
    t.integer "read_minutes", default: 3, null: false
    t.integer "views", default: 0, null: false
    t.boolean "medically_reviewed", default: true, null: false
    t.string "byline_ar"
    t.string "byline_en"
    t.bigint "category_id"
    t.bigint "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_posts_on_author_id"
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["slug_ar"], name: "index_posts_on_slug_ar", unique: true
    t.index ["slug_en"], name: "index_posts_on_slug_en", unique: true
    t.index ["status", "published_at"], name: "index_posts_on_status_and_published_at"
  end

  create_table "products", force: :cascade do |t|
    t.bigint "brand_id"
    t.string "slug", null: false
    t.string "name_ar", null: false
    t.string "name_en", null: false
    t.string "subtitle_ar"
    t.string "subtitle_en"
    t.text "indications_ar"
    t.text "indications_en"
    t.integer "duration_from"
    t.integer "duration_to"
    t.string "accent_color"
    t.string "image_url"
    t.string "page_path"
    t.integer "position", default: 0, null: false
    t.string "status", default: "published", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_products_on_brand_id"
    t.index ["slug"], name: "index_products_on_slug", unique: true
  end

  create_table "settings", primary_key: "key", id: :string, force: :cascade do |t|
    t.text "value"
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "role", default: "editor", null: false
    t.string "title_ar"
    t.string "title_en"
    t.datetime "last_login_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "faqs", "posts", on_delete: :cascade
  add_foreign_key "media_assets", "users", on_delete: :nullify
  add_foreign_key "post_sections", "posts", on_delete: :cascade
  add_foreign_key "posts", "categories", on_delete: :nullify
  add_foreign_key "posts", "users", column: "author_id", on_delete: :nullify
  add_foreign_key "products", "brands", on_delete: :cascade
end
