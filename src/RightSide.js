import React from "react";
import "./RightSide.css";
import imgTop from "./images/laptop.jpg";
import linkedin from "./images/linkedin1.svg";

export default function RightSide() {
  const widgets = (title, subtitle) => {
    return (
      <div className="widgets-top">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
      </div>
    );
  };

  return (
    <div className="right-side">
      <h1>Todays courses</h1>
      {widgets("IT Security", "Cyber Security")}
      {widgets("Web Development", "From 0 to Hero")}
      {widgets("Mobile Development", "Lets goo Kotlin")}
      <div className="right-mid">
        <img src={imgTop} alt="nice-img" />
      </div>
      <div className="last">
        <img src={linkedin} alt="" />
        <p>LinkedIn Corporation © 2021</p>
      </div>
    </div>
  );
}
