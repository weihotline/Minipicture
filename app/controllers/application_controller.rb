class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :guest_user, :signed_in?

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def guest_user(with_try = true)
    @cached_guest_user ||= User.find(
      session[:guest_user_id] ||= create_guest_user.id
    )
  rescue ActiveRecord::RecordNotFound
    session[:guest_user_id] = nil
    guest_user if with_try
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def sign_out
    current_user.try(:reset_session_token!)
    session[:token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end

  def require_signed_out!
    redirect_to root_url if signed_in?
  end

  private
    def create_guest_user
      user = User.create(
        username: "Guest_#{Time.now.to_i}#{rand(100)}",
        email: "guest_#{Time.now.to_i}#{rand(100)}@example.com",
        password: 'password'
      )

      user.self_follow
      user.out_follows.new(
        followee_id: User.find_by_username('cherrie').id,
        follower_id: user.id
      )

      user.save!(validate: false)
      session[:guest_user_id] = user.id

      user
    end
end
