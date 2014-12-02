module Api
  class ImagesController < ApiController

    def index
      @images = Image.order(:created_at).reverse_order.page(params[:page])
      # @images = current_user.followee_images.page(params[:page])

      params[:page] = 1 if params[:page].nil?
      render :json => {
        :models => @images,
        :page => params[:page],
        :total_pages => @images.total_pages
      }
    end

    def create
      @image = current_user.images.new(image_params)

      if @image.save
        respond_to do |format|
          format.json { render json: @image }
        end
      else
        render json: @image.errors.full_messages
      end
    end

    def show
      @image = Image.find(params[:id])

      if @image
        render :show
      else
        render json: ["You aren't a follower of the author of this image"], status: 403
      end
    end

    private
      def image_params
        params.require(:image).permit(:image_url, :caption)
      end
  end
end