class RemoveCaptionColumnFromImageTable < ActiveRecord::Migration
  def change
    remove_column :images, :caption
  end
end
