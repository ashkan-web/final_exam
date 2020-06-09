import React from "react";
import { NavLink /* Link */ } from "react-router-dom";

function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui pointing menu">
      <NavLink to="/" className="item">
        <img
          src="https://bootstraplogos.com/wp-content/uploads/edd/2018/10/logo-4.png"
          height="30px"
        />
      </NavLink>

      <div className="right menu">
        <NavLink to="/" className="item">
          Home
        </NavLink>
        <NavLink to="/auctions" className="item">
          Auctions
        </NavLink>
        {currentUser ? (
          <>
            <NavLink exact to="/auctions/new" className="item">
              Create an Auction
            </NavLink>
            <NavLink to="/auctions" onClick={onSignOut} className="item">
              Sign Out
            </NavLink>
            <span className="item" style={{ color: "green" }}>
              Welcome {currentUser.full_name}
            </span>
          </>
        ) : (
          <React.Fragment>
            <NavLink exact to="/sign_in" className="item">
              Sign In
            </NavLink>
            <NavLink exact to="/sign_up" className="item">
              Sign Up
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default NavBar;