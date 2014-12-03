class Like < ActiveRecord::Base
  validates :user, :image, presence: true
  validates :user, uniqueness: { scope: :image }

  belongs_to :user, inverse_of: :likes
  belongs_to :image, inverse_of: :likes
end
