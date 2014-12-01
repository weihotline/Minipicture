class User < ActiveRecord::Base
  attr_reader :password

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence:   true,
                    format:     { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :session_token, :username, uniqueness: true

  after_initialize :ensure_session_token


  has_many :in_follows, class_name: "Follow", foreign_key: :followee_id
  has_many :out_follows, class_name: "Follow", foreign_key: :follower_id
  has_many :followers, through: :in_follows, source: :follower
  has_many :followees, through: :out_follows, source: :followee
  has_many :images, inverse_of: :user
  has_many :comments, class_name: "Comment", foreign_key: :author_id

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user.try(:is_password?, password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def follows?(user)
    out_follows.exists?(followee_id: user.id)
  end

  private
    def ensure_session_token
      self.session_token ||= self.class.generate_session_token
    end
end
