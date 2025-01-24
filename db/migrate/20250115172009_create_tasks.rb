class CreateTasks < ActiveRecord::Migration[7.2]
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :status, default: false, null: true

      t.timestamps
    end
  end
end
