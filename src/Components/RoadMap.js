import React from "react";
import "../Styles/Roadmap.css";

export const RoadMap = () => {
  return (
    <div className="rm-container" id="roadmap">
      <div className="rm-header"></div>
      <h1>NFD - game changing crypto platform</h1>
      <div className="status-container">
        <li className="done">
          <span>Done</span>
        </li>
        <li className="working">
          <span>In work</span>
        </li>
        <li>
          <span>Upcoming</span>
        </li>
      </div>

      <div className="list-container">
        <ul>
          <h2>Stage 1</h2>
          <li className="done">
            <span>Development</span>
          </li>
          <li className="done">
            <span>Activities and Aggregator</span>
          </li>
          <li className="done">
            <span>Alpha test</span>
          </li>
          <li className="done">
            <span>Alpha search tool</span>
          </li>
          <li className="working">
            <span>Beta test</span>
          </li>
        </ul>
        <ul>
          <h2>Stage 2</h2>
          <li className="working">
            <span>ROI scanner</span>
          </li>
          <li className="working">
            <span>Aggregator “Summary”</span>
          </li>
          <li className="working">
            <span>Twitter Scanner tool</span>
          </li>
          <li>
            <span>Whale's analysis</span>
          </li>
          <li className="working">
            <span>Blocks in Aggregator</span>
          </li>
        </ul>
        <ul>
          <h2>Stage 3</h2>
          <li className="working">
            <span>New sections in “Activities”</span>
          </li>
          <li>
            <span>Launching NFD DAO</span>
          </li>
          <li>
            <span>Expanding the calendar</span>
          </li>
          <li>
            <span>Token vesting tool</span>
          </li>
          <li>
            <span>NFD labs incubator</span>
          </li>
        </ul>
        <ul>
          <h2>Stage 4</h2>
          <li>
            <span>Crypto arbitrage scanner</span>
          </li>
          <li>
            <span>Alpha search AI developing based on data collected</span>
          </li>
          <li>
            <span>Adding any services based on NFD DAO votes</span>
          </li>
        </ul>
        <ul>
          <h2>Stage 5</h2>
          <li>
            <span>
              The launch of Project “X” by NFD labs, which will change the
              culture of crypto investment
            </span>
          </li>
        </ul>
      </div>
      <div className="rm-footer"></div>
    </div>
  );
};
