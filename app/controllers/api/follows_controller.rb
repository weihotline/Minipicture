module Api
  class FollowsController < ApiController
    def create
      @follow = current_user.out_follows.create!(followee_id: params[:followee_id])

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
      @out_follows = current_user.out_follows

      render :index
    end

    private
      def follow_params
        params.require(:follow).permit(:followee_id)
      end
  end
end