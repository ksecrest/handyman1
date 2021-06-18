class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.text :description
      t.string :cost
      t.string :availability
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
