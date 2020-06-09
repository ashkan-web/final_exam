class Api::V1::PublishingsController < Api::ApplicationController
    def create
      a = Auction.find params[:auction_id]
      a.publish!
      render json: { id: auction.id }
  
    end
  
  end