class Api::V1::ReservingsController < Api::ApplicationController

    def create
      a = Auction.find params[:auction_id]
      a.reserve_minimum!
      render json: { id: auction.id }
    end
    
  end