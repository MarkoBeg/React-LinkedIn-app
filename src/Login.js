import React from "react";
import "./Login.css";
import linkedin from "./images/linkedin1.svg";
import { auth } from "./firebase";
import { useState } from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [profilePic, setProfilePic] = useState();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: profilePic.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = (name) => {
    if (!name) {
      return alert("Name is missing");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={linkedin} alt="" />
      <form action="">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <button onClick={loginToApp} className="login-btn">
          Log in
        </button>
      </form>
      <p>
        Not a member?
        <span className="login-register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}
