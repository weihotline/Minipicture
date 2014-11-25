class SessionsController < ApplicationController
  before_action :require_signed_in!, only: [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to user_url(@user)
    else
      flash.now[:error] ||= []
      flash.now[:error] << "Your username or password was incorrect."
      render :new
    end
  end

  def destroy
    signed_out
    redirect_to new_session_url
  end
end
