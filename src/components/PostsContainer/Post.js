// You will add code in this file

import React, {useState} from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";
import dummyData from "../../dummy-data";

const Post = props => {
  // set up state for the likes
  // console.log("post props", props);
  const [likes, setLikes] = useState(props.post.likes);
  // console.log(likes);
  const incrementLikes = () =>
  {
    setLikes(likes => likes + 1);
  };
  
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={
          props.post.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
     
      <LikeSection 
        likes = {likes} incrementLikes = {incrementLikes}
      />
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
      />
    </div>
  );
};

export default Post;
