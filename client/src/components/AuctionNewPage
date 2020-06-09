import React, { Component } from "react";

import { Auction } from "../requests";
import NewAuctionForm from "./NewAuctionForm";

export default class AuctionNewPage extends Component {
  state = {
    errors: []
  };
  createAuction = params => {
    Auction.create(params).then(auction => {
      if (auction.errors) {
        this.setState({ errors: auction.errors });
      } else {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="header">
          <h1>Create an Auction</h1>
        </div>
        <NewAuctionForm
          key={this.state.id}
          onSubmit={this.createAuction}
          errors={this.state.errors}
        />
      </main>
    );
  }
}