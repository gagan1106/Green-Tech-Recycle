import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const NavBar = () => {
  return (
    <nav className="navigation-container">
      <div className="logo-container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" height={65} width={75} />
          </Link>
        </div>
      </div>
      <ul className="nav-items-container">
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/services"} className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link">
            Contact Us
          </Link>
        </li>
        {/*}
        <li className="nav-item">
          <a className="nav-link" href="#solutions">
            Solutions
          </a>
        </li>
  */}
        <li className="nav-item">
          <Link to={"/login"} className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/signup"} className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
