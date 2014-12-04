class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      @user.self_follow
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def search
    if params[:query].present?
      @users = User.where("username ~ ?", params[:query])
      @images = Image.where("caption ~ ?", params[:query])
    else
      @users = User.none
      @images = Image.none
    end

    render :search
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end