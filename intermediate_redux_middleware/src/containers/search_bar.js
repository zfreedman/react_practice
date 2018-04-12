import React, { Component } from "react";

// note (see note for ../components/app.js too)
// react class can be named whatever (if default export),
// but tag must be named with a capital letter to start
export default class SearchBar extends Component {
  // setting up initial state
  constructor(props) {
    super(props);

    this.state = { term: "" };

    //bind "this" context of onInputChange
    /*
    GENERAL NOTE
    if you have a callback that you want to pass around, bind the context
    of this ahead of time so you know what the this context is referring to
    */
    this.onInputChange = this.onInputChange.bind(this);
  }

  // called when the form is submitted
  onFormSubmit(event) {
    event.preventDefault();
  }

  // to be called when the input is changed
  onInputChange(event) {
    this.setState({term: event.target.value});
    console.log(event.target.value);
  }

  // DOM rendering
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
