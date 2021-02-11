import React from "react";
import "./BlogPost.css";
import Post from "../../component/PostComp/Post";
import axios from "axios";

class BlogPost extends React.Component {
  state = {
    post: [],
    formBlogPost: {
      userid: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  getPostAPI = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((response) => {
        this.setState({ post: response.data });
      });
  };

  postDataToAPI = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((response) => {
        if (response.statusText == "Created") {
          this.getPostAPI();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let blogPostNew = this.state.formBlogPost;
    let targetName = event.target.name;
    let targetValue = event.target.value;
    let id = this.state.post.slice(0)[0].id + 1;
    blogPostNew[targetName] = targetValue;
    blogPostNew["id"] = id;
    this.setState({
      formBlogPost: blogPostNew,
    });
  };

  handleSubmit = () => {
    this.postDataToAPI();

    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  };

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    return (
      <div className="container">
        <h2 className="heading-title">Blog Post</h2>
        <div className="post-form">
          <form action="" method="">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="add title here"
                onChange={this.handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Blog Content</label>
              <textarea
                name="body"
                id="body"
                rows="10"
                placeholder="add content here"
                onChange={this.handleFormChange}
              ></textarea>
            </div>
            <button type="button" onClick={this.handleSubmit}>
              Save
            </button>
          </form>
        </div>
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
