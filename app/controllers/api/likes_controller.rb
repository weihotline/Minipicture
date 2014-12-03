module Api
  class LikesController < ApiController
    def create
      @like = current_user.likes.create!(
        image_id: params[:image_id]
      )

      render json: @like
    end

    def destroy
      @like = Like.find(params[:id])
      @like.destroy!

      render json: @like
    end

    def index
      @likes = current_user.likes

      render :index
    end
  end
end
