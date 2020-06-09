import React from "react";

import { AuctionIndexPage } from "./AuctionIndexPage";
import AuctionShowPage from "./AuctionShowPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import { User, Session } from "../requests";
import SignInPage from "./SignInPage";
import AuctionNewPage from "./AuctionNewPage";
import AuthRoute from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";
import NotFoundPage from "./NotFoundPage";
import { Welcome } from "./Welcome";

// In React application, we create a component that acts
// as the 'root' or the entry point to all of our other
// components. This is the one that should be rendered
// with 'ReactDOM.render()'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true
    };
  }

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <div />;
    }
    return (
      // We need to wrap all component that are imported from
      // 'react-router-dom' inside of a 'Router' component
      // in this case, we are using 'BrowerRouter'
      // What this does, is allow all descendants of the
      // 'BrowserRouter' to use any and all components that
      // come with 'react-router-dom'
      <BrowserRouter>
        <div className="ui container App">
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />
          {/* 
            The Route component has many props it uses
            to determine which component to render and when 
            to render that component.
  
            - path: when the path prop matches the path in the url, 
              the component given to the component prop will be displayed
            - component: this prop is used to tell the Route which component
              should be rendered when the path matches the url
            - exact: the exact prop requires the path to exactly mathch
              the url as opposed to the default behaviour of a Route which 
              is to match the beginning of the url 
  
              Swithch only allows for one Route component to render its component prop
              if there are multiple components that could mathc that path, then
              the first one that matches is the one that wins 
              what this mean is, the order of your routes matters
              when using switch
          */}
          <Switch>
            <Route path="/" exact component={Welcome} />

            <Route path="/auctions" exact component={AuctionIndexPage} />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/auctions/new"
              component={AuctionNewPage}
            />
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
            <Route
              path="/auctions/:id"
              render={routeProps => (
                <AuctionShowPage {...routeProps} currentUser={currentUser} />
              )}
            />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// module.exports = App;
export default App;