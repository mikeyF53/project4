class CreateLessons < ActiveRecord::Migration[5.2]
  def change
    create_table :lessons do |t|
      t.string :title
      t.string :description
      t.integer :lesson_id
      t.timestamps
    end
  end
end
