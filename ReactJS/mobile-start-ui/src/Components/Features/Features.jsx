import React from "react";
import Button from "../Button/Button";
import image from '../../assets/images/section-three-image.svg';
import './Features.scss';

const Features = () => {
  return (
    <section className="wrapper">
      <div className="section-three features">
        
          <img src={image} alt="section-three" />
        <div className="sec-box">
          <p className="sub-heading sb-title">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="content sb-description">
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
