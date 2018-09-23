import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";

import sketch from "./coreLogic";

import "./styles.css";

class Recaman extends Component {
  state = {
    limit: this.props.value.limit,
    shape: this.props.value.shape
  };

  componentWillReceiveProps(newProp) {
    this.setState({ limit: newProp.value.limit, shape: newProp.value.shape });
  }

  render() {
    return (
      <div id="recaman--MainWrapper">
        <P5Wrapper
          limit={this.state.limit}
          shape={this.state.shape}
          sketch={sketch}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default Recaman;
