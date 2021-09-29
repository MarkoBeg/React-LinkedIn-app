import { Avatar } from "@material-ui/core";
import React from "react";
import HeaderIcons from "./HeaderIcons";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl}></Avatar>
        <div className="post-text">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-widgets">
        <HeaderIcons
          Icon={ThumbUpIcon}
          color="#0177b7"
          title="Like"
        ></HeaderIcons>
        <HeaderIcons
          Icon={ChatIcon}
          color="#0177b7"
          title="Comments"
        ></HeaderIcons>
        <HeaderIcons
          Icon={ShareIcon}
          color="#0177b7"
          title="Share"
        ></HeaderIcons>
        <HeaderIcons Icon={SendIcon} color="#0177b7" title="Send"></HeaderIcons>
      </div>
    </div>
  );
}
