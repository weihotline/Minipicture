class Image < ActiveRecord::Base
  validates :image_url, :caption, :user, presence: true
  paginates_per 3

  belongs_to :user, inverse_of: :images
  has_many :comments, inverse_of: :image
end
