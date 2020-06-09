
import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function AuctionDetails(props) {
  return (
    <div>
      <h2>
        Auction Product: <br />
        {props.title}
      </h2>
      <p> </p>
      <h3>
        Product Description: <br />
        {props.description}
      </h3>
      <br />
      Sold by: {props.author && props.author.full_name}
      <p>Ends at: {props.end_date}</p>
      <p>Auction Reserve price: ${props.reserve_price}</p>
      <p>Auction State: {props.aasm_state}</p>
      <p>
        <CreatedAtShow created_at={props.created_at} />
      </p>
    </div>
  );
}

export default AuctionDetails;