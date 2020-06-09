import React from "react";
import FormErrors from "./FormErrors/FormErrors";

function NewAuctionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    props.onSubmit({
      title: fd.get("title"),
      description: fd.get("description"),
      reserve_price: fd.get("reserve_price"),
      end_date: fd.get("end_date")
    });

    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Title *</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="product title..."
        />
        <FormErrors forField="title" errors={props.errors} />
      </div>
      <div className="field">
        <label>Description *</label>
        <textarea
          name="description"
          rows="2"
          id="description"
          placeholder="Product description..."
          required
        />
        <FormErrors forField="description" errors={props.errors} />
      </div>
      <div className="field">
        <label>Reserve Price ($) *</label>
        <input
          type="number"
          name="reserve_price"
          id="reserve_price"
          placeholder="1.00"
          required
        />
        <FormErrors forField="reserve_price" errors={props.errors} />
      </div>
      <div className="field">
        <label>End date *</label>
        <input type="date" name="end_date" id="end_date" required />
        <FormErrors forField="end_date" errors={props.errors} />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewAuctionForm;