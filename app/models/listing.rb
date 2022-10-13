class Listing < ApplicationRecord
    belongs_to :property
    belongs_to :owner
end
