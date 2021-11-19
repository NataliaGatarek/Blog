import React from "react";
import "./Post.css";
import pic from "../header/img2/header.jpg";

function Post() {
  return (
    <div className="post">
      <img className="postImage" src={pic} alt="post" />
      <div className="postInfo">
        <div className="postCat">
          <span className="postCat">music</span>
          <span className="postCat">books</span>
        </div>
        <span className="postTitle">Lorem</span>
        <hr></hr>
        <span className="postDate">1 our ago</span>
      </div>
    </div>
  );
}
export default Post;
