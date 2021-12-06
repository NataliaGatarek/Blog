import React from "react";
import "./SideBar.css";
import about from "../header/img2/about.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={about} alt="about" />
        <p>some random text</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Dogs</li>
          <li className="sidebarListItem">links</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
