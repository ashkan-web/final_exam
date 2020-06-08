class Bid < ApplicationRecord
    belongs_to :auction
    validates :amount, presence: true
end
