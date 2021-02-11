import React from "react";
import "./BlogPost.css";
import Post from "../../component/PostComp/Post";
import axios from "axios";

class BlogPost extends React.Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((response) => {
      this.setState({ post: response.data });
    });
  };

  handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
      this.getPostAPI();
    });
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <div className="container">
        <h2 className="heading-title">Blog Post</h2>
        <div className="blog-wrapper">
          {this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BlogPost;
