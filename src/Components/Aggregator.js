import React from "react";
import { AlphaBox } from "./AlphaBox";
import { SpamBox } from "./SpamBox";
import "../Styles/Aggregator.css";
import img1 from "../Assets/AggContentOPT.webp";
import img2 from "../Assets/AggContent2OPT.webp";

export const Aggregator = () => {
  return (
    <div className="agg-container" id="aggregator">
      <div className="agg-header"></div>
      <div className="agg-box">
        <div className="img-box">
          <img style={{ height: "100%" }} src={img1} alt="" />
          <img
            style={{ height: "100%", position: "absolute", marginTop: "80%" }}
            src={img2}
            alt=""
          />
        </div>
        <div className="text-box">
          <div className="header-text">
            <h3>FIRST WEB3 CRYPTO</h3>
          </div>
          <h1>Keeping track of projects in</h1>
          <h1
            style={{
              color: "rgb(218, 191, 255)",
              padding: "0px",
              marginTop: "0px",
            }}
          >
            one place
          </h1>
          <p>
            The NFD.gg aggregator allows you to create a specific card of any
            project and parse any type of information from Discord, Twitter,
            Dune Analytics, TradingView, Github etc. into your own dashboard.
          </p>
          <div className="btn-box">
            <a href="/login">
              <button>Start Creating</button>
            </a>
            <a href="#roadmap">View Roadmap</a>
          </div>
        </div>
      </div>
      <AlphaBox />
      <SpamBox />
      <div className="agg-footer"></div>
    </div>
  );
};
