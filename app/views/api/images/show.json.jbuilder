json.author @image.user.username

json.extract! @image, :id, :caption, :created_at, :updated_at

json.comments @image.comments do |comment|
  json.extract! comment, :id, :content, :created_at, :updated_at
  json.author comment.author.username
end