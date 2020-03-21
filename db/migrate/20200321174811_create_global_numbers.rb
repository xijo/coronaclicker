class CreateGlobalNumbers < ActiveRecord::Migration[6.0]
  def change
    create_table :global_numbers do |t|
      t.integer :confirmed, default: 0
      t.integer :recovered, default: 0
      t.integer :deaths, default: 0
      t.integer :received_cents, default: 0
      t.timestamps
    end
  end
end
