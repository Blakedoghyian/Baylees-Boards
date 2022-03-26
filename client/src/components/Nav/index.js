import React, {useState, useEffect} from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import bayleeslogo from "../../assets/bayleeslogo.png";


function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        
        <ul className="flex-row">
          {(toggleMenu || screenWidth > 500) && (
          <li className="mx-1 navbar list">
            <Link className="links items" to="/boards">
              Boards
            </Link>
            <Link className="links items" to="/orderHistory">
              Order History
            </Link>
            <Link className="links items" to="/contact">
              Contact
            </Link>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a className="links items" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          )}
            <button onClick={toggleNav} className="navbtn">MENU</button>
        </ul>
        
      );
    } else {

      return (

        
        <ul className="flex-row">
          {(toggleMenu || screenWidth > 500) && (
          <li className="mx-1 navbar list">
            <Link className="links items" to="/boards">
              Boards
            </Link>
            <Link className="links items" to="/signup">
              Signup
            </Link>
            <Link className="links items" to="/login">
              Login
            </Link>
              <Link className="links items" to="/contact">
                Contact
              </Link>
            </li>
          )}
            <button onClick={toggleNav} className="navbtn">MENU</button>
        </ul>
        
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
