import React from "react";
import "./BlogPost.css";
import Post from "../../../component/PostComp/Post";
import axios from "axios";
import API from "../../../services";
import { withRouter } from "react-router-dom";

class BlogPost extends React.Component {
  state = {
    post: [],
    formBlogPost: {
      userid: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
  };
  myRef = React.createRef();

  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({ post: result });
    });
    // axios
    //   .get("http://localhost:3004/posts?_sort=id&_order=desc")
    //   .then((response) => {
    //     this.setState({ post: response.data });
    //   });
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

  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((response) => {
        this.getPostAPI();
        this.setState({ isUpdate: false });
      });
  };

  handleRemove = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`).then((response) => {
      this.getPostAPI();
    });
  };

  handleFormChange = (event) => {
    let blogPostNew = { ...this.state.formBlogPost }; // get new blogpost from state
    let targetName = event.target.name; // get target name
    let targetValue = event.target.value; // get target value
    let id = this.state.post.slice(0)[0].id + 1; // auto increment id
    blogPostNew[targetName] = targetValue;
    if (this.state.isUpdate == false) blogPostNew["id"] = id; // if isUpdate == false insert new id
    this.setState({
      formBlogPost: blogPostNew,
    });
  };

  handleUpdate = (data) => {
    document.getElementById("title").value = data.title;
    document.getElementById("body").value = data.body;
    this.executeScroll();
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleSubmit = (event) => {
    // if cancel button clicked
    if (event.target.classList.contains("cancel-btn")) {
      this.setState({
        isUpdate: false,
      });
      this.emptyForm();
      return;
    }

    if (this.state.isUpdate) {
      // if blog gonna updated
      this.putDataToAPI();
      this.emptyForm();
    } else {
      // if add new blog
      this.postDataToAPI();
      this.emptyForm();
    }
  };

  handleDetail = (id) => {
    this.props.history.push(`/post/${id}`);
  };

  emptyForm = () => {
    document.getElementById("title").value = "";
    document.getElementById("body").value = "";
  };

  executeScroll = () => this.myRef.current.scrollIntoView();

  componentDidMount() {
    this.getPostAPI();
  }

  render() {
    let button;
    if (this.state.isUpdate) {
      button = (
        <div>
          <button
            type="button"
            className="edit-btn"
            onClick={this.handleSubmit}
          >
            Edit
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={this.handleSubmit}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      button = (
        <button type="button" className="save-btn" onClick={this.handleSubmit}>
          Save
        </button>
      );
    }
    return (
      <div className="container">
        <h2 className="heading-title">Blog Post</h2>
        <div className="post-form" id="post-form" ref={this.myRef}>
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
            {button}
          </form>
        </div>
        <div className="blog-wrapper">
          {this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
                goDetail={this.handleDetail}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(BlogPost);
