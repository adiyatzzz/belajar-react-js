import { render } from "@testing-library/react";
import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="Dummy Image" />
      </div>
      <div className="content">
        <h5 className="title">{props.title}</h5>
        <p className="body">{props.body}</p>
      </div>
    </div>
  );
};

export default Post;
