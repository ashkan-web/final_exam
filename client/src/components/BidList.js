import React from "react";
import BidDetails from "./BidDetails";

export function BidList(props) {
  const { bids } = props; // const bids = props.bids;
  return (
    <ul>
      {bids.map(bid => (
        <li key={bid.id}>
          {/* <BidDetails
            body={bid.body}
            author={bid.author}
            created_at={bid.created_at}
          /> */}
          {/* In JSX, you use spread operator
                to pass properties of an object as props to the react element
             */}
          <p> </p>

          <BidDetails {...bid} onDeleteClick={props.onBidDeleteClick} />
          <br />
        </li>
      ))}
    </ul>
  );
}