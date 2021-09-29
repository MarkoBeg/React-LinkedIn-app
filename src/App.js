import React from "react";
import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import RightSide from "./RightSide";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  //uzimamo usera sa redux bloka
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        //user is logged in
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const [bgcolor, setBgColor] = useState(true);

  const changeBackground = () => {
    bgcolor ? setBgColor(false) : setBgColor(true);
    console.log(bgcolor);
  };

  return (
    <div className="app ">
      {!user ? (
        <Login></Login>
      ) : (
        <div className={bgcolor ? "background" : "background-changed"}>
          <Header></Header>
          <div className="btn-section">
            <button className="app-btn" onClick={changeBackground}>
              {bgcolor ? "Day" : "Night"}
            </button>
          </div>
          <div className="app-body">
            <Sidebar></Sidebar>
            <Main></Main>
            <RightSide></RightSide>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
