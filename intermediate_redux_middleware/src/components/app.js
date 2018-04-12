import React, { Component } from "react";

// note (see note for ../components/app.js too)
// react class can be named whatever (if default export),
// but tag must be named with a capital letter to start
import SearchBar from  "../containers/search_bar";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <div>
          React simple starter.
        </div>
      </div>
    );
  }
}
