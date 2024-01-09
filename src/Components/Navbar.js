import React from "react";
import { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    setScrolling(true);
  };
  useEffect(() => {
    const handleScroll = () => {
      //   console.log("is scrolled:", scrolling);

      const isScrolled = window.scrollY > 0 || menu;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      !menu && window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="nav">
      <div className={scrolling ? "scrolled-nav" : "navbar"}>
        <h1>NFD</h1>
        <img src="" alt="" />

        <div className="menu">
          <li>
            {/* About */}
            <a href="#about">About</a>
            {/* <Link to="#about">About</Link> */}
          </li>
          <li>
            {/* Aggregator */}
            <a href="#aggregator">Aggregator</a>
            {/* <Link to="#aggregator">Aggregator</Link> */}
          </li>
          <li>
            {/* Features */}
            <a href="#features">Features</a>
            {/* <Link to="#features">Features</Link> */}
          </li>
          <li>
            {/* RoadMap */}
            <a href="#roadmap">RoadMap</a>
            {/* <Link to="#roadmap">RoadMap</Link> */}
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </div>
        <div className="socials">
          <BsDiscord />
          <a href="https://twitter.com/NFD_gg">
            <FaTwitter />
          </a>

          {scrolling ? (
            <div className="nav-button-box">
              <a href="https://combine.nfd.gg/">
                <button>"Combine" software</button>
              </a>
              <a href="/login">
                <button>Platform</button>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
        <button className="hamburger-btn" onClick={() => handleMenu()}>
          <CgMenuLeft />
        </button>
      </div>
      {menu ? (
        <div className="ham-menu">
          <li>About</li>
          <li>Aggregator</li>
          <li>Features</li>
          <li>Roadmap</li>
          <li>Contact us</li>
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
      ) : (
        <></>
      )}
    </div>
  );
};
