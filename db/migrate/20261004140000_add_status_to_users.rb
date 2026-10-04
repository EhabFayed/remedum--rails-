# Accounts created from the public sign-up page wait for an admin to approve
# them and pick their role. Everyone who already has an account stays active.
class AddStatusToUsers < ActiveRecord::Migration[8.0]
  def change
    add_column :users, :status, :string, null: false, default: "active"
    add_index :users, :status
  end
end
