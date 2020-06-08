class Auction < ApplicationRecord
    has_many(:bids, dependent: :destroy)
    validates(:title, presence: true, uniqueness: true)
    validates :description, presence:{message:"must exist"}, length: {minimum: 2}
end
