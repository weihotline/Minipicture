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
    @user = User.find(params[:id])

    # if @user.update_attributes(user_params)
    # else
    #   render json: @user.errors.full_messages,
    # end
  end

  # def search
  #   if params[:query].present?
  #     @users = User.where("username ~ ?", params[:query])
  #   else
  #     @users = User.none
  #   end

  #   respond_to do |format|
  #     format.html { render :search }
  #     format.json { render :search }
  #   end
  # end

  private
    def user_params
      params.require(:user).permit(:username, :email, :password)
    end
end