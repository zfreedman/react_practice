import React from "react";
import { Component } from "react";

// custom components
import BookList from "../containers/bookList";
import BookDetail from "../containers/bookDetail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
