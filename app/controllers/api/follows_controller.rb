module Api
  class FollowsController < ApiController
    def create
      @follow = current_user.in_follows.create!(follower_id: params[:follower_id])

      respond_to do |format|
        format.json { render json: @follow }
      end
    end

    def destroy
      @follow = Follow.find(params[:id])
      @follow.destroy!

      respond_to do |format|
        format.json { render json: @follow }
      end
    end

    def index
      @in_follows = current_user.in_follows

      render :index
    end

    private
      def follow_params
        params.require(:follow).permit(:follower_id)
      end
  end
end