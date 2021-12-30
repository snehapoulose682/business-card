import React from "react";
import "./Header.css";
import profile from "./profile.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <img src={profile} alt="profile" className="profile-img" />
          <h3 className="profile-name">Laura Smith</h3>
          <h4 className="profile-info">Frontend Developer</h4>
          <h6 className="profile-head">About</h6>

          <p className="body-text">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
          <h6 className="profile-head">Interests</h6>
          <p className="body-text">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
          <footer className="footer-text">
            <div className="footer-icons">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGithubSquare />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Header;
