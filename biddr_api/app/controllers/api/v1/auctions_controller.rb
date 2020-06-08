class Api::V1::AuctionsController <ApplicationController

    def index
        auctions = Auction.order(created_at: :desc)
        render(json: auctions)
    end

    def show
        if @auction
            render(json: @auction,
            include:[:author, {bids:[:author]}])

        else
            render(json:{error: 'Auction Not Found'})
        end
    end

        def create
            auction = Auction.new auction_params
            auction.save!
            render json: {id: auction.id}
        end

        def edit
        end 

        def update
            if @auction.update auction_params
                render json: {id: @auction.id}
            else
                render(json:{errors: auction.errors},
                status: 422)
            end

        end

        def destroy
            @auction.destroy
            render(json: {status:200}, status: 200)
        end

        private

        def find_auction
            @auction ||= Auction.find params[:id]
        end

        def auction_params
            params.require(:auction).permit(:title, :description, :end_date, :reserve_price )
        end

        def record_not_found
            render(
                json: {status:422,errors: {msg: 'Record Not Found'}},
                status: 422
            )
        end

        def record_invalid(error)
            invalid_record = error.record_invalid
            errors = invalid_record.errors.map do |field, message|{
                type:error.class.to_s,
                record_type: invalid_record.class.to_s,
                field: field,
                message: message
            }
        end
        render(
            json: {status:422, errors: errors})
     end
    end
