class ListingSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :owner_id

  belongs_to :property
  belongs_to :owner
end
