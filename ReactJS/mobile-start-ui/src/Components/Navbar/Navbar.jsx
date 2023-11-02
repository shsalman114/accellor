import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/images/logo.svg";
import navButton from "../../assets/images/nav-btn.svg";

function collapse() {}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="title-div">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <span className="company-title">Start</span>
      </div>
      <ul className={isOpen ? 'nav-menu active':"nav-menu"}>
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#f">Portfolio</a>
        </li>
        <li>
          <a href="#e">Services</a>
        </li>
        <li>
          <a href="#s">Contact</a>
        </li>
      </ul>
      <button onClick={handleToggle} className="nav-menu-btn">
        <img src={navButton} alt="nav-button" />
      </button>
    </nav>
  );
}
