class Api::ImagesController < ApplicationController
  def index
    @images = current_user.images

    render json: @images
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

  private
    def image_params
      params.require(:image).permit(:image_url)
    end
end