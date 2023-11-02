import React from "react";
import "./Profile.scss";

const Profile = ({ imageURL, name, designation }) => {
  return (
    <div className="people">
      <div className="people-frame">
        <img src={imageURL} alt="persons" />
      </div>
      <div className="title">
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
      </div>
    </div>
  );
};

export default Profile;
