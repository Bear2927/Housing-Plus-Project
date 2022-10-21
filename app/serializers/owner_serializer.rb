class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :image_url

  has_many :properties
end
