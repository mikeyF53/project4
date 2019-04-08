class CreateProgresses < ActiveRecord::Migration[5.2]
  def change
    create_table :progresses do |t|
      t.string :title
      t.boolean :completion
      t.integer :progress_id
      t.timestamps
    end
  end
end
