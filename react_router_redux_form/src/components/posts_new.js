import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class PostsNew extends Component {
  renderField(field) {
    // equivalent to
    // meta = field.meta
    // touched = meta.touched
    // error = meta.error
    const { meta: { touched, error} } = field;

    // used for conditional wrapping div classes
    const className = `form-group${(
      touched && error ? " has-danger" : ""
    )}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          placeholder={field.label}
          type="text"
          {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          // this "name" property connects 1:1 with the keys in validate()'s
          // error object
          name="categories"
          component={this.renderField} />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title of 3 characters or more in length";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  // if errors is empty, form is fine to submit
  // if errors has ANY properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(PostsNew);
