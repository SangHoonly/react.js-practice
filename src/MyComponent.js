import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h1>안녕하세요. {name}입니다.</h1>
        <h6>저는 {age}살 입니다.</h6>
        <h3>{console.log(this)}</h3>
      </div>
    );
  }
}
export default MyComponent;
