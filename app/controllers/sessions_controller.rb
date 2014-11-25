class SessionsController < ApplicationController
  before_action :require_signed_in!, only: [:destroy]
  before_action :require_signed_out!, only: [:new, :create]

  def new
  end

  def create
    sleep 10
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to user_url(@user)
    else
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
