class ChangeGame < ActiveRecord::Migration[6.0]
  def change
    enable_extension 'pgcrypto'

    drop_table :games
    drop_table :sessions

    create_table :games, id: :uuid do |t|
      t.integer :counter, default: 0
      t.text :donations
    end
  end
end
