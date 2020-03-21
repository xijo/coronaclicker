class CreateDonations < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :donations, :text
  end
end
