import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch_weather } from "../actions/index";

// note (see note for ../components/app.js too)
// react class can be named whatever (if default export),
// but tag must be named with a capital letter to start
class SearchBar extends Component {
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
    // bind this context
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // called when the form is submitted
  onFormSubmit(event) {
    event.preventDefault();

    // go and fetch weather data
    this.props.fetch_weather(this.state.term);
    // clear search input
    this.setState({ term: "" });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetch_weather }, dispatch);
}

// passing in null as the first argument informs redux that we're
// not concerned with any state here
export default connect(null, mapDispatchToProps)(SearchBar);
