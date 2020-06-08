class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :starting_bid,
    :active_bid,
    :reserve_price,
    :end_date,
    :created_at,
    :updated_at
    )
    has_many :bids
     
end
