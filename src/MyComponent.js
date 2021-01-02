import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, age, address, favoriteNum, children } = this.props;
    return (
      <div>
        <h1>안녕하세요. {name}입니다.</h1>
        <h3>
          나이는 {age}이고, 사는곳은 {address}입니다.
        </h3>
        <h3>좋아하는 숫자는 {favoriteNum}입니다.</h3>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
