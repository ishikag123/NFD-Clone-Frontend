import React from "react";
import "../Styles/Alpha.css";
import img1 from "../Assets/1OPT.webp";
export const AlphaBox = () => {
  return (
    <div className="alpha-box">
      <h1>Find alpha before anyone else with us</h1>
      <div className="alpha-item-container">
        <div
          className="alpha-items"
          style={{ backgroundColor: "rgb(73, 92, 236)" }}
        >
          <h3>Add a list of top Twitter accounts</h3>
        </div>
        <div
          className="alpha-items"
          style={{ backgroundColor: "rgb(255, 117, 76)" }}
        >
          <h3>Follow their new subscriptions.</h3>
        </div>
        <div
          className="alpha-items"
          style={{ backgroundColor: "rgb(73, 92, 236)" }}
        >
          <h3>We'll show you matches on those subscriptions.</h3>
        </div>
      </div>
      <div className="alpha-cont-2">
        <div className="img-box">
          <img src={img1} alt="" />
        </div>
        <div className="cont-2-bottom">
          <div className="bottom-1">
            <h3>Finding Alpha is easy</h3>
            <p>
              Alpha search tool will let you be one of the first people to find
              the most promising alpha by tracking influencers and the most
              hyped projects.
            </p>
          </div>
          <div className="bottom-2">
            <a href="/login">
              <button
                style={{ backgroundColor: "white", color: "rgb(108, 82, 238)" }}
              >
                Try now for free
              </button>
            </a>
            <a href="https://twitter.com/NFD_gg">
              <button style={{ color: "white", background: "none" }}>
                Follow Twitter
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
