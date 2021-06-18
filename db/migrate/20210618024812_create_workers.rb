class CreateWorkers < ActiveRecord::Migration[6.1]
  def change
    create_table :workers do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :location
      t.integer :experience

      t.timestamps
    end
  end
end
