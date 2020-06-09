class AddUserReferences < ActiveRecord::Migration[6.0]
  def change
    add_reference :auctions, :user, null: true, foreign_key: true
    add_reference :bids, :user, null: true, foreign_key: true
    add_column :auctions, :aasm_state, :string
  end
end
