class AddTitleColumnToImageTable < ActiveRecord::Migration
  def change
    add_column :images, :title, :string, null: false
  end
end
