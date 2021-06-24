class RenameNameToFullName < ActiveRecord::Migration[6.1]
  def change
    rename_column :workers, :name, :fullname
  end
end
