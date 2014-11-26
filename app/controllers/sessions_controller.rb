class SessionsController < ApplicationController
  before_action :require_signed_in!, only: [:destroy]
  before_action :require_signed_out!, only: [:new, :create]

  def index
    redirect_to root_url
  end

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to root_url
    else
      @user = User.new(username: params[:user][:username])
      flash.now[:errors] ||= []
      flash.now[:errors] << "Your username or password was incorrect."
      render :new
    end
  end

  def destroy
    sign_out
    redirect_to new_session_url
  end
end
