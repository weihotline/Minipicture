module Api
  class ImageCollectionsController < ApiController
    def index
      @image_collection = current_user.image_collection

      render :index
    end
  end
end
