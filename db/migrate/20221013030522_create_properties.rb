class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :address
      t.string :image_url
      t.string :bedrooms
      t.string :bathrooms
      t.integer :price

      t.timestamps
    end
  end
end
