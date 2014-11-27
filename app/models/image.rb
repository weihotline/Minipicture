class Image < ActiveRecord::Base
  validates :image_url, :user, presence: true
  belongs_to :user, inverse_of: :images
end
