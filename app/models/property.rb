class Property < ApplicationRecord
    has_many :listings
    has_many :owners, through: :listings
    has_many :reviews
    has_many :users, through: :reviews
end
