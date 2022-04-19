# frozen_string_literal: true

class DeviseCreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      t.string :first_name, null: false, default: ""
      t.string :last_name, null: false, default: ""
      t.string :dni, null: false, default: ""
      t.string :code, null: false, default: ""
      t.string :phone
      t.string :avatar
      t.references  :role, null: true, foreign_key: true

      t.timestamps null: false
    end

    add_index :admins, :dni,                  unique: true
    add_index :admins, :code,                 unique: true
    add_index :admins, :email,                unique: true
    add_index :admins, :reset_password_token, unique: true
    # add_index :admins, :confirmation_token,   unique: true
    # add_index :admins, :unlock_token,         unique: true
  end
end
