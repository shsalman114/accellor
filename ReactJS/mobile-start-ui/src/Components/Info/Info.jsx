import React from "react";
import image from '../../assets/images/section-four-image.svg';
import './Info.scss';
import Button from "../Button/Button";

const Info = () => {
  return (
    <section className="wrapper">
      <div className="section-four info">
        <img src={image} alt="section-four" />
        <div className="sec-box">
          <p className="sub-heading sb-title">
            Lorem ipsum dolor sit amet consectetur
          </p>
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

export default Info;
