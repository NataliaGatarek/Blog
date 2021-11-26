import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import "./Settings.css";
import Img3 from "../../components/header/img2/about.jpg";

function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">update your account</span>
          <span className="settingsDeleteTitle">delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsPP">
            <img src={Img3} alt="img4" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="smt" />
          <label>Email</label>
          <input type="email" placeholder="@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
export default Settings;
