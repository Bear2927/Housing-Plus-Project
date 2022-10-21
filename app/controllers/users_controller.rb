class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    
    def show
        render json: @current_user
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    private

    def user_params
        params.permit(:username, :password, :admin?)
    end

    def invalid(error)
        render json: { error: error.message }, status: :unprocessable_entity
    end
end
