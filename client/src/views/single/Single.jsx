import React from "react";
import "./Single.css";
import Sidebar from "../../components/sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
export default Single;
