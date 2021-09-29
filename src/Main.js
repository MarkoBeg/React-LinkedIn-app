import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import { Avatar } from "@material-ui/core";
import avatar from "./images/avatar.jpg";
import Widgets from "./Widgets";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import AssignmentIcon from "@material-ui/icons/Assignment";
import company from "./images/company.jpg";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

export default function Main() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((item) => ({
            id: item.id,
            data: item.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || user.email[0],
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="main">
      <div className="main-section">
        <div className="main-avatar">
          <Avatar className="avatar-main" src={avatar}></Avatar>
        </div>
        <div className="main-search">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Post a message down below"
          />
          <button type="submit" onClick={sendPost} className="main-btn">
            Post
          </button>
        </div>
      </div>
      <div className="widgets">
        <Widgets Icon={PhotoIcon} color="#0177b7" title="Photo"></Widgets>
        <Widgets Icon={YouTubeIcon} color="#e7a33e" title="Video"></Widgets>
        <Widgets Icon={EventIcon} color="#c0cbcd" title="Event"></Widgets>
        <Widgets
          Icon={AssignmentIcon}
          color="#7fc15e"
          title="Write Article"
        ></Widgets>
      </div>
      {/*Post area*/}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          ></Post>
        );
      })}
      <div className="main-bottom-ads">
        <h4>Company d.o.o</h4>
        <img src={company} alt="" />
      </div>
    </div>
  );
}
