json.extract! @comment, :id, :content, :created_at, :updated_at
json.author @comment.author.username