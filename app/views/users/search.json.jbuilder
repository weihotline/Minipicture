json.array!(@users) do |user|
  json.extract! user, :username
end

json.array!(@images) do |image|
  json.extract! image, :image_url
  json.author image.user.username
end