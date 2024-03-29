import React from "react";
import { useState } from "react";
import cube from "../Assets/cubes.jpg";
import "../Styles/About.css";
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";

export const About = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="about" id="about">
      <div className="text-box">
        <div className="outer-text-box">
          <h1>The first web3 crypto platform</h1>
          <h3>Problem</h3>
          <p>
            Today, even in alpha communities, there's an enormous volume of
            information that members have to wade through for 6-8+ hours a day.
            Cutting through the noise of spam is a real problem even where
            there's something genuinely worth knowing.
          </p>
        </div>
        <div className="inner-text-box">
          <h1>We work to make your life easier</h1>
          <h3>Solution</h3>
          <p>
            NFD.gg heralds a new era in alpha communities, one where they have
            their own platform, which structures and condenses relevant
            information on all these alpha activities, where our team monitors
            any updates on these activities 24/7. No more reading 2000+ discord
            messages a day and tracking twitter day in, day out. Everything you
            ever need to know can be found on NFD.gg.
          </p>
          <div className="bottom-box">
            NFD will save you time and help you earn money in crypto.
          </div>
        </div>
        <div className="hidden-box">
          <h1>The first web3 crypto platform</h1>

          <p>
            Today, even in alpha communities, there's an enormous volume of
            information that members have to wade through for 6-8+ hours a day.
            Cutting through the noise of spam is a real problem even where
            there's something genuinely worth knowing.
          </p>
          <ul>
            <div
              className="list-item"
              onClick={() => {
                setOpen1(!open1);
              }}
            >
              <div className="list-header">
                <div className="list-text-header">
                  <h2>Problem</h2>
                  <p>Crypto infonoise</p>
                </div>
                {!open1 && (
                  <GoArrowDownRight
                    style={{ color: "#6c52ee", fontSize: "32px" }}
                  />
                )}
                {open1 && (
                  <GoArrowUpRight
                    style={{ color: "black", fontSize: "32px" }}
                  />
                )}
              </div>
              {open1 && (
                <div className="list-content">
                  {/* <div className="img-box"> */}
                  <img src={cube} alt="" />
                  {/* </div> */}
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    eos ea molestias aspernatur voluptatibus nisi sapiente
                    quidem sit facere odio?
                  </p>
                </div>
              )}
            </div>
            <div className="list-item" onClick={() => setOpen2(!open2)}>
              <div className="list-header">
                <div className="list-text-header">
                  <h2>Solution</h2>
                  <p>NFD Platform</p>
                </div>
                {!open2 && (
                  <GoArrowDownRight
                    style={{ color: "#6c52ee", fontSize: "32px" }}
                  />
                )}
                {open2 && (
                  <GoArrowUpRight
                    style={{ color: "black", fontSize: "32px" }}
                  />
                )}
              </div>

              {open2 && (
                <div className="list-content">
                  {/* <div className="img-box"> */}
                  <img src={cube} alt="" />
                  {/* </div> */}
                  <h3>Lorem ipsum dolor sit amet.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    eos ea molestias aspernatur voluptatibus nisi sapiente
                    quidem sit facere odio?
                  </p>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
      <div className="img-box">
        <img src={cube} alt="" />
      </div>
    </div>
  );
};
