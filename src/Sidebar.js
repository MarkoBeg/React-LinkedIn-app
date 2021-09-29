import React from "react";
import "./Sidebar.css";
import imgTop from "./images/top-left.jpg";
import { Avatar } from "@material-ui/core";
import avatar from "./images/avatar.jpg";
import book from "./images/book.jpg";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const Items = (item) => {
    return (
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-items">
          <h5>{item}</h5>
        </div>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={imgTop} alt="" />
        <Avatar src={avatar} className="top-icon"></Avatar>
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>
      </div>
      <div className="main-mid">
        <div className="main-top">
          <p>Access exclusive tools & insights</p>
          <h6>Try Premium for free</h6>
        </div>
        <div className="main-bottom">
          <h6>My items</h6>
        </div>
      </div>
      {Items("Groups")}
      {Items("Events")}
      {Items("Followed Hashtags")}
      {Items("More")}
      <div className="sidebar-last">
        <h4>Discover more</h4>
      </div>
      <div className="ads">
        <img src={book} alt="" />
      </div>
    </div>
  );
}
