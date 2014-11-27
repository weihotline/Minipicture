class Image < ActiveRecord::Base
  validates :image_url, presence: true
  belongs_to :user, inverse_of: :images
end
