import React, { Component } from "react";
import { Progress } from "rsuite";
const { Circle } = Progress;
const style = {
  width: 120,
  display: "inline-block",
  marginRight: 10
};

class ProgressBar extends Component {
  state = {};
  render() {
    return (
      <div style={style}>
        <Circle percent={30} showInfo={true} />
      </div>
    );
  }
}

export default ProgressBar;
