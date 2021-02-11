import { render } from "@testing-library/react";
import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="Dummy Image" />
      </div>
      <div className="content">
        <h5 className="title">{props.data.title}</h5>
        <p className="body">{props.data.body}</p>
        <button
          className="remove-btn"
          onClick={() => props.remove(props.data.id)}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default Post;
