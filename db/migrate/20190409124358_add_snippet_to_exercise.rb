class AddSnippetToExercise < ActiveRecord::Migration[5.2]
  def change
    add_column :exercises, :snippet, :string
  end
end
