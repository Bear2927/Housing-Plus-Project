class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :rating, :property_id, :user_id



  has_one :property
end
