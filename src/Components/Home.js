import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { CiGrid42 } from "react-icons/ci";
import { RiDoorLockLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaWindows, FaApple } from "react-icons/fa";
import { PiHandsClappingLight } from "react-icons/pi";
import { About } from "./About";
import { Aggregator } from "./Aggregator";
import { Features } from "./Features";
import { RoadMap } from "./RoadMap";
import { Navbar } from "./Navbar";
import { Team } from "./Team";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="box1">
          {/* <img src="" alt="" /> */}
          <h1>NFD platform</h1>
          <h1 style={{ color: "rgb(132, 138, 255)" }}>"NFD.gg"</h1>
          <h3>
            An Alpha community 2.0 with its own platform for participating,
            searching, and tracking any crypto related information.
          </h3>
          <div className="tool-box">
            <div className="tool">
              <CiGrid42 />
              <p>Info in one place</p>
            </div>
            <div className="tool">
              <RiDoorLockLine />
              <p>Private tools</p>
            </div>
            <div className="tool">
              <IoSettingsOutline />
              <p>Wide functionality</p>
            </div>
          </div>
          <div className="home-buttonBox">
            <a href="/login">
              <button className="other-button">Try platform</button>
            </a>
            <button className="pc-button">Only PC version</button>

            <a href="#aggregator">How it works?</a>
          </div>
          {/* <div className="bottom-style-box"></div> */}
        </div>
        <div className="box2">
          {/* <div className="top-style-box"></div> */}
          <div className="box2-roundBox">
            <PiHandsClappingLight />
            <p>Software by NFD</p>
          </div>
          <h1 style={{ color: "silver" }}>NFD software</h1>
          <h1
            style={{
              color: "rgb(132, 138, 255)",
            }}
          >
            "Combine"
          </h1>
          <h3>
            Handle your crypto-wallets, farm activities and retrodrops on a
            single app.
          </h3>
          <div className="os-box">
            <div className="os" tabIndex="0">
              <FaApple />
              <p> macOs</p>
            </div>
            <div className="os" tabindex="0">
              <FaWindows />
              <p> Windows</p>
            </div>
          </div>
          <div className="home-buttonBox">
            <button className="other-button">Download</button>
            <button className="pc-button">Only PC version</button>
            {/* <Link to="#">How it works?</Link> */}
            <a href="https://docs.nfd.gg/main/eng-combine-software/what-is-combine">
              How it works?
            </a>
          </div>
        </div>
      </div>
      <About />
      <Aggregator />
      <Features />
      <RoadMap />
      <Team />
      <Contact />
      {/* <div id="about" className="box1">
        <About />
      </div>
      <div id="aggregator" className="box2">
        <Aggregator />
      </div>
      <div id="features" className="box3">
        <Features />
      </div>
      <div id="roadmap" className="box4">
        <RoadMap />
      </div> */}
    </>
  );
};
