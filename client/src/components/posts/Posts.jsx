import React from "react";
import "./Posts.css";
import Post from "../post/Post";

function Posts() {
  return (
    <div className="posts">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
export default Posts;
