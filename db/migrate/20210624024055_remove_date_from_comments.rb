class RemoveDateFromComments < ActiveRecord::Migration[6.1]
  def change
    remove_column :comments, :date, :date
  end
end
