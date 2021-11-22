import React from "react";
import "./TopBar.css";
import pic from "./img/ja.jpg";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fab fa-instagram"></i>
        <i className=" topIcon fab fa-facebook-f"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Gallery</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src={pic} alt="pic" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
export default TopBar;
