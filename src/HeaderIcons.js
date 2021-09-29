import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderIcons.css";

export default function HeaderIcons({
  Icon,
  title,
  avatar,
  premium,
  color,
  onClick,
}) {
  return (
    <div onClick={onClick} className="header-icons">
      {Icon && <Icon className="header-icon" style={{ color: color }}></Icon>}
      {avatar && <Avatar className="header-avatar" src={avatar}></Avatar>}
      <h3 className="header-title">{title}</h3>
      <h4 className="header-premium">{premium}</h4>
    </div>
  );
}
