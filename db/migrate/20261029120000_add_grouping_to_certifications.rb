# The certifications page is grouped (client revisions, Oct 2026): Saudi approvals -> ReMedium -> the other
# brands -> the manufacturer. The same mark (CE, MDSAP...) can now belong to several groups/brands, and a
# record can be flagged "pending" until it is matched against the documents.
class AddGroupingToCertifications < ActiveRecord::Migration[8.0]
  def change
    add_column :certifications, :group_key, :string, null: false, default: "remedium"
    add_column :certifications, :brand_name, :string, null: false, default: ""
    add_column :certifications, :status, :string, null: false, default: "verified"
    add_column :certifications, :logo_path, :string
    remove_index :certifications, :code, unique: true
    add_index :certifications, %i[group_key brand_name code], unique: true
  end
end
