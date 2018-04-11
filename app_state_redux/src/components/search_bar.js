// import
import React, { Component } from "react";

// setup search bar (functional componenet)
/*
const SearchBar = () => {
  return <input />
}
*/

// class-based
class SearchBar extends Component {
  // initializing state in a class-based component
  // NOTE: functional components don't have states, only class-based
  constructor(props) {
    super(props);

    this.state = { term: "" }
  }

  render() {
    //return <input onChange={this.onInputChange} />
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={
            event => this.onInputChange(event.target.value)
          }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // event handler
  /*
  onInputChange(event) {
    console.log(event.target.value)
  }
  */
}

// export
export default SearchBar;
