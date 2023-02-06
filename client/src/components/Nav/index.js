import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-1">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup" className="profile-button">Signup</Link>
          </li>
          <li className="mx-1" >
            <Link to="/login" className="profile-button">Login</Link>
          </li>
          <li className="mx-1">
            <Link to="/cart" className="profile-button">Cart</Link>
          </li>
          <li className="mx-1">
            <Link to="/about" className="profile-button">About</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <h1>
        <Link to="/">
          {/* <span role="img" aria-label="shopping bag">🛍️</span> */
          /*need to add a logo here*/}
          {/* <img className="logo" src="/images/logo.jpg" alt="Logo" /> */}
          <div className="name">Clubhouse Caddie</div>
        </Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
