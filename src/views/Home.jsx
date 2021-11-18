import React from "react";
import "./Home.css";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import SideBar from "../sidebar/SideBar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
export default Home;
