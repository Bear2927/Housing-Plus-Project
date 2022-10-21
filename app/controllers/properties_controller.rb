class PropertiesController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Property.all, status: :ok
    end

    def show
        property = Property.find(params[:id])
        render json: property, status: :ok
    end

    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    def update
        property = Property.find(params[:id])
        property.update!(property_params)
        render json: property, status: :accepted
    end

    def destroy
        property = Property.find(params[:id])
        property.destroy
        head :no_content
    end

    private

    def property_params
        params.permit(:address, :image_url, :bedrooms, :bathrooms, :price)
    end

    def not_found
        render json: { error: "Property not found" }, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message }, status: :unprocessable_entity
    end
end
