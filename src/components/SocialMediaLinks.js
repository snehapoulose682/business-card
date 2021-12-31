import React from "react";
import "./ProfileCard.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Socialmedialinks = () => {
  return (
    <div>
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
  );
};

export default Socialmedialinks;
