// react
import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// action propogation
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

// book list component
class BookList extends Component {
  // mapping the list of books to <li>s
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}
        </li>
      );
    });
  }

  // render component
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// redux connection
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside <BookList />
  return {
    books: state.books
  }
}

// anything returned from this funciton will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to every reducer
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote booklist from a component to a container
// - it needs to know about this new dispatch method (selectBook)
// - make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
