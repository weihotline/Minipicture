class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content, null: false
      t.integer :author_id, null: false
      t.integer :image_id, null: false

      t.timestamps
    end

    add_index :comments, :image_id
  end
end
