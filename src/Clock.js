import React, { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h2>안녕하세요.</h2>
        <h3>지금 시간은 {this.state.date.toLocaleTimeString()}입니다.</h3>
      </div>
    );
  }
}

export default Clock;
