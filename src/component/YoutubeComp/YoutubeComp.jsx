import React from "react";
import "./YoutubeComp.css";
import img from "./img/thumb-1.jpg";
const YoutubeComp = (props) => {
  // const img = require("./media/thumb-3.jpg");
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src={img} alt="thumbnail" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Judul",
  desc: "Desc",
  img: "thumb-3.jpg",
};

export default YoutubeComp;
