import React from "react";
import { Component } from "react";

// custom components
import BookList from "../containers/bookList";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
