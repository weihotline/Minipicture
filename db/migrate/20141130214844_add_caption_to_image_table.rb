class AddCaptionToImageTable < ActiveRecord::Migration
  def change
    add_column :images, :caption, :text, null: false
  end
end
