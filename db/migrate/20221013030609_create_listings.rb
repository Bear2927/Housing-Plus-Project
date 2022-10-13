class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.integer :property_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
