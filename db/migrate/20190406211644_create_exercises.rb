class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :title, null: false
      t.integer :lesson_id
      t.timestamps
    end
  end
end
