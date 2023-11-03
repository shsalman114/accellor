import React from "react";
import pImg1 from "../../assets/images/partner1.svg";
import pImg2 from "../../assets/images/partner2.svg";
import pImg3 from "../../assets/images/partner3.svg";
import pImg4 from "../../assets/images/partner4.svg";
import pImg5 from "../../assets/images/partner5.svg";
import Button from "../Button/Button";
import "./Clients.scss";

const Clients = () => {
  return (
    <section className="wrapper">
      <div id="clients" className="section-two">
        <div className="partners-box">
          <p className="pb-title">PARTNERS</p>
          <p className="pb-subtitle">Lorem Ipsum Dolor</p>
          <p className="pb-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="partner-images">
          <img src={pImg1} alt="partners" />
          <img src={pImg2} alt="partners" />
          <img src={pImg3} alt="partners" />
          <img src={pImg4} alt="partners" />
          <img src={pImg5} alt="partners" />
        </div>
        <Button className={"button partners-button"}>Learn More</Button>
      </div>
    </section>
  );
};

export default Clients;
