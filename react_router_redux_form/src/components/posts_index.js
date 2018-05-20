import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  // lifecycle method which is automatically called once the element is mounted on DOM
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
      Posts Index
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);
