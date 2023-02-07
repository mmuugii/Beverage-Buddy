import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="mx-1">
            <Link to="/signup" className="profile-button">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login" className="profile-button">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/cart" className="profile-button">
              Cart
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/about" className="profile-button">
              About
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
          </div>
          </div>
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
