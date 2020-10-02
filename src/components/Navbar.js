import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [isNavToggled, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const toggleNav = () => setClick(!isNavToggled);
  const closeMobileView = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="javascipt:;" className="navbar-logo" onClick={closeMobileView}>
            TRVL
          </a>
          <div className="menu-icon" onClick={toggleNav}>
            <i className={isNavToggled ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
          <ul className={isNavToggled ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="javascipt:;" className="nav-links" onClick={closeMobileView}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="javascipt:;" className="nav-links" onClick={closeMobileView}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="javascipt:;" className="nav-links" onClick={closeMobileView}>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="javascipt:;" className="nav-links-mobile" onClick={closeMobileView}>
                Sign Up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
