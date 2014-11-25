class UsersController < ApplicationController
  before_action :require_signed_in!, only: [:show]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      signed_in(@user)
      redirect_to user_url(@user)
    else
      flash.now[:error] = @user.error.full_messages
      render :new
    end
  end

  def show
    render json: @user
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
