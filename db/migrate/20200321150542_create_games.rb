class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :session_id, null: false
      t.integer :counter, default: 0
    end

    add_index :games, :session_id
  end
end
