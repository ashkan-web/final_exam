class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :starting_bid
      t.float :active_bid
      t.float :reserve_price
      t.datetime :end_date
      t.timestamps
    end
  end
end
