class RemoveCaptionColumnFromImageTableAgain < ActiveRecord::Migration
  def change
    remove_column :images, :caption
  end
end
