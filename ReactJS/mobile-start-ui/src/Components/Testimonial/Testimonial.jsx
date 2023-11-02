import React from "react";
import profile1 from "../../assets/images/profile-one.svg";
import profile2 from "../../assets/images/person-two.svg";
import profile3 from "../../assets/images/person-three.svg";
import profile4 from "../../assets/images/person-four.svg";
import Profile from "../Profile/Profile";
import Button from "../Button/Button";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <section className="section-five testimonial">
      <div className="partners-box">
        <p className="heading pb-title">TEAM</p>
        <p className="sub-heading pb-subtitle">Our Talents</p>
        <p className="content pb-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="partner-images">
        <Profile imageURL={profile1} name={"Peg Legge"} designation={"CEO"} />
        <Profile
          imageURL={profile2}
          name={"Richard Guerra"}
          designation={"CTO"}
        />
        <Profile
          imageURL={profile3}
          name={"Alexandra Stolz"}
          designation={"DESIGNER"}
        />
        <Profile
          imageURL={profile4}
          name={"Janet Bray"}
          designation={"DEVELOPER"}
        />
      </div>
      <Button className={"button people-button"}>View Team</Button>
    </section>
  );
};

export default Testimonial;
