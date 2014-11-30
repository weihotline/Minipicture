module Api
  class CommentsController < ApiController

    def create
      comment = current_user.comments.new(comment_params)

      if comment.save
    end

    private
      def comment_params
        params.require(:comment).permit(:image_id, :content)
      end
  end
end
