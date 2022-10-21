class OwnersController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index
        render json: Owner.all, status: :ok
    end

    def show
        owner = Owner.find(params[:id])
        render json: owner, status: :ok
    end

    def create
        owner = Owner.create!(owner_params)
        render json: owner, status: :created
    end

    def update
        owner = Owner.find(params[:id])
        owner.update!(owner_params)
        render json: property, status: :accepted
    end

    def destroy
        owner = Owner.find(params[:id])
        owner.destroy
        head :no_content
    end

    private

    def owner_params
        params.permit(:name, :email, :phone_number, :image_url)
    end

    def not_found
        render json: { error: "Owner not found" }, status: :not_found
    end

    def invalid(error)
        render json: { error: error.message }, status: :unprocessable_entity
    end
end
