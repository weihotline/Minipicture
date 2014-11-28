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
          # this render to ajax request in utils/helper_func.js
          # come back later
          format.json { render json: @image }
        end
      else
        render json: @image.errors.full_messages
      end
    end

    private
      def image_params
        params.require(:image).permit(:image_url)
      end
  end
end