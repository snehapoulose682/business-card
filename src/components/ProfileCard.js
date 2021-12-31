import React from "react";
import "./ProfileCard.css";
import About from "./About";
import Interests from "./Interests";
import profile from "./profile.png";
import Socialmedialinks from "./SocialMediaLinks";
const Profilecard = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={profile} alt="profile" className="profile-img" />
          <h3 className="profile-name">Laura Smith</h3>
          <h4 className="profile-info">Frontend Developer</h4>
          <About />
          <Interests />
          <Socialmedialinks />
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
