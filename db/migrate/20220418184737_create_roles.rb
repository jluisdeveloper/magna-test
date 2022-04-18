class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.string :name, null: false
      t.string :slug, null: false
    end
    add_index :roles, :slug,      unique: true
  end
end
