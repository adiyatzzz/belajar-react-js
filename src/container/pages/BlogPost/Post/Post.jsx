// libraries
import React from "react";
import axios from "axios";
import { withRouter } from "react-router";

// css
import "./Post.css";

class Post extends React.Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  getPostByID = (id) => {
    axios.get(`http://localhost:3004/posts/${id}`).then((response) => {
      this.setState({
        post: {
          title: response.data.title,
          body: response.data.body,
        },
      });
    });
  };

  componentDidMount = () => {
    let id = this.props.match.params.postID;
    this.getPostByID(id);
  };

  render() {
    return (
      <div className="container">
        <h2 className="post-title">{this.state.post.title}</h2>
        <p className="post-body">{this.state.post.body}</p>
      </div>
    );
  }
}

export default withRouter(Post);
