json.array!(@users) do |user|
  json.extract! user, :id, :username
  json.follows current_user.follows?(user)
end

json.array!(@images) do |image|
  json.extract! image, :image_url, :user_id
  json.username image.user.username
end