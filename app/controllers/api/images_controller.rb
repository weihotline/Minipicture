module Api
  class ImagesController < ApiController

    def index
      # eventually this will render follower images
      # come back later
      @images = Image.all

      render json: @images
    end

    def create
      @image = current_user.images.new(image_params)

      if @image.save
        respond_to do |format|
          # this render to ajax request in utils/callbacks.js
          # come back later
          format.json { render json: @image }
        end
      else
        render json: @image.errors.full_messages
      end
    end

    def show
      @image = Image.find(params[:id])

      # apply similar logic later:
      # if @board.is_member?(current_user)

      render :show
      # else
      #   render json: ["You aren't a follow of the author of this image"], status: 403
      # end
    end

    private
      def image_params
        params.require(:image).permit(:image_url, :caption)
      end
  end
end