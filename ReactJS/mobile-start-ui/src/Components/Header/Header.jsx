import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import groupImage from "../../assets/images/Group.png";
import "./Header.scss";

const Header = () => {
  return (
    <header id="home">
      <div className="wrapper">
        <Navbar />
        <div className="description">
          <div className="description-image">
            <img src={groupImage} alt="collaboration" />
          </div>
          <div className="description-box">
            <div className="desc-inner-box">
              <p className="heading">WELCOME</p>
              <h3 className="sub-heading">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <p className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
            </div>
            <Button className={"button explore-button"}>Explore</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
