import React from "react";

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="Welcome">
        <h1>
          Going Once. Going Twice.
          <br />
          Sold to Biddr!
        </h1>
      </main>
    );
  }
}