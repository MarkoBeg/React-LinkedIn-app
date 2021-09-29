import React from "react";
import "./Main.css";

export default function Widgets({ Icon, title, color }) {
  return (
    <div className="main-widgets">
      {Icon && <Icon style={{ color: color }}></Icon>}
      <h4>{title}</h4>
    </div>
  );
}
