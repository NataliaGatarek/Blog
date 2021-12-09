import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImage" src={post.photo} alt="post" />}
      <div className="postInfo">
        <div className="postCat">
          {post.categories.map((cat) => (
            <span className="postCat">{cat.name}</span>
          ))}
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr></hr>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}
export default Post;
