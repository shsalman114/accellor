import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import navButton from "../../assets/images/nav-btn.svg";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <div className="title-div">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <span className="company-title">Start</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#clients">Portfolio</a>
          </li>
          <li>
            <a href="#info">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={() => setIsActive(!isActive)} className="nav-menu-btn">
          <img src={navButton} alt="nav-button" />
        </button>
      </nav>
      <div className={`mobile-nav-container ${isActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#clients">Portfolio</a>
          </li>
          <li>
            <a href="#info">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}
