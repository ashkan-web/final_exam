import React from "react";
import FormErrors from "./FormErrors/FormErrors";
import { Reserve } from "../requests";

const createReserve = (id, params) => {
  Reserve.create(id, params).then(bid => {
    if (bid.errors) {
      this.setState({ errors: bid.errors });
    }
  });
};

function NewBidForm(props) {
  function handleBidSubmit(event) {
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);
    let value = fd.get("amount");

    if (value >= props.auction.reserve_price) {
      createReserve(props.auction.id, {});
    }
    props.onSubmit(props.auction.id, { amount: fd.get("amount") });

    currentTarget.reset();
  }

  return (
    <form className="ui form" onSubmit={handleBidSubmit}>
      <div className="field">
        <label>Bid Amount</label>
        <input type="number" name="amount" id="amount" />
        <FormErrors forField="amount" errors={props.errors} />
      </div>

      <button className="ui button" type="submit">
        Bid
      </button>
    </form>
  );
}

export default NewBidForm;

