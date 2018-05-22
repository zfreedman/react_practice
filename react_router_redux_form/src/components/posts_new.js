import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          placeholder={field.label}
          type="text"
          {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="Categories"
          component={this.renderField} />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField} />
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
