import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  state = { message: "하이요" };

  handleClick = () => {
    alert(this.state.message);
    this.setState({ message: "바이요" });
  };

  render() {
    return (
      <div>
        <h1>안녕하세요</h1>
        <h2>버튼을 누르세요</h2>
        <button onClick={this.handleClick}>버튼클릭!</button>
      </div>
    );
  }
}

export default MyComponent;
