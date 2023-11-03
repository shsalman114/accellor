import React from "react";
import Button from "../Button/Button";
import image from "../../assets/images/section-three-image.svg";
import "./Features.scss";

const Features = () => {
  return (
    <section className="wrapper">
      <div id="info" className="section-three">
        <div>
          <img src={image} alt="section-three" />
        </div>
        <div className="sec-box">
          <p className="sb-title">Lorem ipsum dolor sit amet consectetur</p>
          <p className="sb-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <Button className={"button partners-button"}>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
