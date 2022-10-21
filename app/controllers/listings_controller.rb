class ListingsController < ApplicationController

    def index
        render json: Listing.all, status: :ok
    end

    def create
        listing = Listing.create!(listing_params)
        render json: listing, status: :created
    end 

    private

    def listing_params
        params.permit(:property_id, :owner_id)
    end
end
