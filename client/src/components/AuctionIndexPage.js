import React from "react";
import { Link } from "react-router-dom";

import AuctionNewPage from "./AuctionNewPage";
import { Auction } from "../requests";
import Spinner from "./Spinner";

export class AuctionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initially the list of the auctions is empty until
      // we fetch them from server
      auctions: [],
      // Initially, before we have fetched the auctions
      // from the server, we will display some loading
      // indicator to the user.
      // but, once we have fetched the auctions, we will change
      // the i  sLoading property to 'false'
      // and display the regular list of auctions
      isLoading: true
    };
  }

  componentDidMount() {
    Auction.all().then(auctions => {
      // console.log(auctions);
      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  }

  deleteAuction(id) {
    Auction.destroy(id).then(() => {
      this.setState({
        auctions: this.state.auctions.filter(q => q.id !== id)
      });
    });
    // this.setState({
    //   auctions: this.state.auctions.filter(q => q.id !== id)
    // });
  }
  render() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    const { showAll = false } = this.props;
    // const showAll = this.props.showAll || true;
    const filteredAuction = this.state.auctions.filter((q, index) => {
      if (showAll || index < 50) {
        return true;
      }
      return false;
    });
    return (
      <main className="AuctionIndexPage">
        {/* <AuctionNewPage /> */}
        <h2>Auctions</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredAuction.map(auction => (
            <li className="ui segment" key={auction.id}>
              <Link to={`/auctions/${auction.id}`} className="item" href="">
                {auction.title}
              </Link>
              <p>Posted on {auction.created_at}</p>

              {/* <button
                className="ui right floated red small button"
                onClick={() => this.deleteAuction(auction.id)}
              >
                Delete
              </button> */}
            </li>
          ))}
        </div>
      </main>
    );
  }
}