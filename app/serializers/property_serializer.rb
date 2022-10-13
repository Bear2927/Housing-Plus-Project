class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :image_url, :bedrooms, :bathrooms, :price
end
