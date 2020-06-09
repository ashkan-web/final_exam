import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import { BidList } from "./BidList";
import { Auction, Bid, Publish, Reserve } from "../requests";
import Spinner from "./Spinner";
import NewBidForm from "./NewBidForm";
import PublishForm from "./PublishForm";

class AuctionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it props
    super(props);

    this.state = {
      auction: null,
      isLoading: true,
      errors: []
    };
  }

  createBid = (id, params) => {
    Bid.create(id, params).then(bid => {
      if (bid.errors) {
        this.setState({ errors: bid.errors });
      }
    });
  };

  createPublish = (id, params) => {
    Publish.create(id, params).then(bid => {
      if (bid.errors) {
        this.setState({ errors: bid.errors });
      }
    });
  };

  componentDidMount() {
    Auction.one(this.props.match.params.id).then(auction => {
      this.setState({
        auction: auction,
        isLoading: false
      });
    });
  }

  deleteAuction() {
    this.setState({
      auction: null
    });
  }

  deleteBid(id) {
    this.setState({
      auction: {
        ...this.state.auction,
        bids: this.state.auction.bids.filter(a => a.id !== id)
      }
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }

    const currentUser = this.props.currentUser;
    const { bids = [] } = this.state.auction;

    const userIsOwner = () => {
      if (currentUser.id == this.state.auction.author.id) {
        return (
          <PublishForm
            auction={this.state.auction}
            onSubmit={this.createPublish}
            errors={this.state.errors}
          />
        );
      }
    };

    return (
      <main>
        <AuctionDetails {...this.state.auction} />

        <h2>Previous Bids {userIsOwner()}</h2>

        {currentUser ? (
          <>
            <NewBidForm
              auction={this.state.auction}
              onSubmit={this.createBid}
              errors={this.state.errors}
            />
          </>
        ) : (
          <React.Fragment></React.Fragment>
        )}

        <BidList bids={bids} onBidDeleteClick={id => this.deleteBid(id)} />
      </main>
    );
  }
}

export default AuctionShowPage;