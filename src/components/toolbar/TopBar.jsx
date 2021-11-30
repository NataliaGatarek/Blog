import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import pic from "./img/ja.jpg";

function TopBar() {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-instagram"></i>
        <i className=" topIcon fab fa-facebook-f"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">GALLERY</li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={pic} alt="pic" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default TopBar;
