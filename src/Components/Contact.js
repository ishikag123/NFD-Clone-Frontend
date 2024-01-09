import React from "react";
import "../Styles/Contact.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Team } from "./Team";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      {/* <Team /> */}
      <div className="header"></div>
      <h1>Join our community</h1>
      <div className="btn-box">
        <div className="discord">
          <BsDiscord />
          Join discord
        </div>
        <div className="twitter">
          <a href="https://twitter.com/NFD_gg">
            <FaTwitter />
          </a>
          Follow Twitter
        </div>
      </div>
      <a href="https://docs.nfd.gg/main/eng-nfd.gg-platform/what-is-nfd.gg">
        Read our white paper
      </a>
    </div>
  );
};
