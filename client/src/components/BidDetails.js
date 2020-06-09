import React from "react";

import CreatedAtShow from "./CreatedAtShow";

function BidDetails(props) {
  {
    /*
      Using the 'style' property on a base HTML component
      will modify in the style attribute (inline styles.)
     */
  }
  return (
    <div
      style={{
        color: "white",
        fontStyle: "italic",
        backgroundColor: "teal"
      }}
    >
      {props.author.first_name} {props.author.last_name} bid ${props.amount} on{" "}
      {props.created_at}
      {/* <button
          className="ui right floated red small button"
          onClick={() => props.onDeleteClick(props.id)}
        >
          Delete
        </button> */}
    </div>
  );
}

export default BidDetails;