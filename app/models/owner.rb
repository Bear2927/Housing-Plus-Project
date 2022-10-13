class Owner < ApplicationRecord
    has_many :listings
    has_many :properties, through: :listings
end
