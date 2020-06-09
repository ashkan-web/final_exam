import React, { Component } from "react";
import { Session } from "../requests";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    Session.create({
      email: fd.get("email"),
      password: fd.get("password")
    }).then(data => {
      if (data.status === 404) {
        this.setState({
          errors: [{ message: "Wrong email or password" }]
        });
      } else {
        this.setState({
          errors: []
        });
        this.props.history.push("/");

        if (typeof this.props.onSignIn === "function") {
          this.props.onSignIn();
        }
      }
    });
  }
  render() {
    const { errors } = this.state;
    return (
      <main>
        <div className="ui header">Sign In</div>
        <form className="ui form" onSubmit={this.createSession}>
          {errors.length > 0 ? (
            <div className="ui negative message FormErrors">
              <div className="header">Error Signing in...</div>
              <p>{errors.map(err => err.message).join(",")}</p>
            </div>
          ) : null}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@domain.ext"
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
            />
          </div>
          <button className="ui blue button" type="submit">
            Sign In
          </button>
        </form>
      </main>
    );
  }
}

export default SignInPage;