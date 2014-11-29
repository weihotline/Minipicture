class Comment < ActiveRecord::Base
  validates :content, :image, :author, presence: true

  belongs_to :image, inverse_of: :comments
  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )
end
