// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.postData.comments);
  const incrementComments = () => {
    setComments(comments => comments + 1);
  };
  return (
    <div>
      {/* map through the comments data and return the Comment component */
        {props.postData.map(post => (
          <Comment 
          key = {post.username}
          post = {post}
          />
      
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
