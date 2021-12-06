import React from "react";
import "./Header.css";
import pict from "./img2/header.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Dogs Lifestyle</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={pict} alt="dogs" />
    </div>
  );
}
export default Header;
