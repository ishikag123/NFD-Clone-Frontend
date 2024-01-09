import React from "react";
import "../Styles/SpamBox.css";
import img1 from "../Assets/AggContentOPT.webp";
import img2 from "../Assets/AggContent2OPT.webp";
export const SpamBox = () => {
  return (
    <div className="spam-class">
      <div className="text-box">
        <div className="header">
          <h1>No spam, only</h1>
          <h1 style={{ color: "rgb(218, 191, 255)" }}>Alpha</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi odio
          in nobis nostrum nulla perferendis, quaerat corporis, architecto,
          deleniti dolores repellat aliquam provident fuga alias?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          soluta!
        </p>
        <p style={{ color: "white" }}>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
          aspernatur, ipsum laudantium in amet totam ut culpa atque eius quis
          animi pariatur optio deleniti dolorum officiis enim porro temporibus!
          Et.
        </p>
      </div>
      <div className="img-box">
        <img style={{ height: "100%" }} src={img1} alt="" />
        <img
          style={{ height: "100%", position: "absolute", marginTop: "80%" }}
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};
