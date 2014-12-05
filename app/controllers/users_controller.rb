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

  def edit
    render :edit
  end

  def update
    if current_user.update_attributes(user_params)

    else

    end
  end

  def search
    if params[:query].present?
      @users = User.where("UPPER(username) ~ ?", params[:query].upcase)
      @images = Image.where("UPPER(caption) ~ ?", params[:query].upcase)
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