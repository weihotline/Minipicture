class Image < ActiveRecord::Base
  validates :image_url, :caption, :user, presence: true

  belongs_to :user, inverse_of: :images
  has_many :comments, inverse_of: :image
end
