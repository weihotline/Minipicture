class Photo < ActiveRecord::Base
  belongs_to :user, inverse_of: :photos
end
