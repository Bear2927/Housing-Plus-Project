class PropertySerializer < ActiveModel::Serializer
  attributes :id, :address, :image_url, :bedrooms, :bathrooms, :price

  has_many :owners
  has_many :reviews
end
