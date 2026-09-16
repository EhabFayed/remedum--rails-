# The certifications page shows each accreditation by its full name and what it
# actually means; the home strip shows only the code. Same rows, two depths.
class AddDetailToCertifications < ActiveRecord::Migration[8.0]
  def change
    add_column :certifications, :full_name, :string
    add_column :certifications, :meaning_ar, :text
    add_column :certifications, :meaning_en, :text
  end
end
