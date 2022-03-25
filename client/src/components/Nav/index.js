import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bayleeslogo from "../../assets/bayleeslogo.png";

function Navigation() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="">
        <ul className="flex-row">
          <li className="mx-1 navbar">
            <Link className="links" to="/boards">
              Boards
            </Link>
            <Link className="links" to="/orderHistory">
              Order History
            </Link>
            <Link className="links" to="/contact">
              Contact
            </Link>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="links" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <div className="">
        <ul className="flex-row">
          <li className="mx-1 navbar">
            <Link className="links" to="/boards">
              Boards
            </Link>
            <Link className="links" to="/signup">
              Signup
            </Link>
            <Link className="links" to="/login">
              Login
            </Link>
              <Link className="links" to="/contact">
                Contact
              </Link>
            </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row navContainer sticky">
      <h1>
        <Link className="nostyle fonts" to="/">
          Baylee's Boards
        </Link>
      </h1>

      <nav className="ml-auto">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Navigation;
