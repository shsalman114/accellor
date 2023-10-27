import React from "react";
import './Navbar.scss';
import logo from '../../assets/images/logo.svg';

export default function Navbar() {
  return (
    <nav className="desktop-nav">
      <div className="title-div">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <span className="company-title">
          Start
        </span>
      </div>
      <div className="nav-menu">
        <ul>
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
      </div>
    </nav>
  );
}