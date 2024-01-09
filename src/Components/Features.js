import React from "react";
import { useState } from "react";
import img1 from "../Assets/f1.webp";
import img2 from "../Assets/f2.webp";
import img3 from "../Assets/f3.webp";
import img4 from "../Assets/f4.webp";
import img5 from "../Assets/f5.webp";
import "../Styles/Features.css";

export const Features = () => {
  // const [title, setTitle] = useState("Activities");
  const [url, setUrl] = useState(img1);
  // const [desc, setDesc] = useState("");
  const [active, setActive] = useState(1);
  // const [item, setItem] = useState(1)
  const setDetails = (item) => {
    setActive(item.id);
    setUrl(item.url);
  };
  const menuItems = [
    {
      id: 1,
      title: "Activities",
      desc: "Receive already reviewed information about the most captivating events in crypto world. The professional analytics will allow you to easily make money.",
      url: img1,
    },
    {
      id: 2,
      title: "Auto-Update feed",
      desc: "All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!",
      url: img2,
    },
    {
      id: 3,
      title: "Calendar",
      desc: "We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token",
      url: img3,
    },
    {
      id: 4,
      title: "Aggregator",
      desc: "Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.",
      url: img4,
    },
    {
      id: 5,
      title: "Alpha Search",
      desc: "Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.",
      url: img5,
    },
  ];

  return (
    <div className="feature" id="features">
      <div className="header">
        <h1>Use all the benefits of NFD</h1>
        <p>
          Unlock the next level of control with customizable real-time feeds,
          charts, watchlists, and alerts with NFD.gg
        </p>
      </div>
      <div className="feature-body">
        <div className="feature-menu">
          <ul className="menu-items">
            {menuItems.map((item) => {
              return (
                <div
                  className={active === item.id ? "active-items" : "items"}
                  onClick={() => setDetails(item)}
                >
                  {active === item.id ? (
                    <>
                      <h1>{item.title}</h1>
                      <p>{item.desc}</p>
                    </>
                  ) : (
                    <>
                      <h1>{item.title}</h1>
                    </>
                  )}

                  {/* <h3>{url}</h3> */}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="img-box">
          <img src={url} alt="" />
        </div>
      </div>
    </div>
  );
};
