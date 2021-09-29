import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import HeaderIcons from "./HeaderIcons";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import avatar from "./images/avatar.jpg";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
import { useState, useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();

  const [navbar, setNavbar] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(setNavbar);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
  }, []);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className={navbar ? "navbar-none" : "navbar-block"}>
      <div className="header">
        <div className="header-left">
          <img src={logo} alt="logoIcon" />

          <div className="header-search">
            <SearchIcon></SearchIcon>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="header-right">
          <HeaderIcons Icon={HomeIcon} title="Home"></HeaderIcons>
          <HeaderIcons Icon={SupervisorAccountIcon} title="Home"></HeaderIcons>
          <HeaderIcons Icon={WorkIcon} title="Home"></HeaderIcons>
          <HeaderIcons Icon={MessageIcon} title="Home"></HeaderIcons>
          <HeaderIcons Icon={NotificationsIcon} title="Home"></HeaderIcons>
          <HeaderIcons
            onClick={logoutOfApp}
            avatar={avatar}
            src={avatar}
            title="Me"
          ></HeaderIcons>
          <HeaderIcons premium="Try Premium for free"></HeaderIcons>
        </div>
      </div>
    </div>
  );
}
