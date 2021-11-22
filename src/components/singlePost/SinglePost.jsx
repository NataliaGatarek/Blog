import React from "react";
import "./SinglePost.css";
import postImg from "../toolbar/img/ja.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={postImg} alt="img" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem
          <div className="singlePostEdit">
            <i className="singlePostIcon fas fa-edit"></i>
            <i className="singlePostIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>name </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt.Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt.Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
          massa. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
          justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
          justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
          felis eu pede mollis pretium. Integer tincidunt.
        </p>
      </div>
    </div>
  );
}
export default SinglePost;
