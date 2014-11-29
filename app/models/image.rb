class Image < ActiveRecord::Base
  validates :image_url, :title, :user, presence: true
  belongs_to :user, inverse_of: :images

  has_many :comments, inverse_of: :image
end
