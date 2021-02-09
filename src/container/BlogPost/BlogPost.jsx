import React from "react";
import "./BlogPost.css";
import Post from "../../component/PostComp/Post";
import axios from "axios";

class BlogPost extends React.Component {
  state = {
    post: [],
  };

  componentDidMount() {
    //   js fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({ post: json });
    //   });

    // axios
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ post: response.data });
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="heading-title">Blog Post</h2>
        <div className="blog-wrapper">
          {this.state.post.map((post) => {
            return <Post title={post.title} body={post.body} />;
          })}
        </div>
      </div>
    );
  }
}

export default BlogPost;
