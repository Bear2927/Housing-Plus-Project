class FixAdminColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :admin?, :admin
  end
end
