class CreatePhotosOwners < ActiveRecord::Migration
  def change
    create_table :photos_owners do |t|
      t.integer :user_id, null: false
      t.integer :photo_id, null: false

      t.timestamps null: false
    end
  end
end
