class UsersController < ApplicationController
  before_action :require_signed_in!, only: [:show]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end
