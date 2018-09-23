// This will get the user input and then pass it down to my recaman function logic

import React, { Component } from "react";

import Recaman from "../recaman/recaman";

import "./styles.css";

class Controller extends Component {
  // constructor(props) {
  //   super(props);
  //   this.updateControllerState = this.props.changeData.bind(this);
  // }

  state = {
    limit: this.props.value.limit,
    shape: this.props.value.shape
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value.limit) {
      this.setState({
        limit: nextProps.value.limit
      });
    } else {
      this.setState({ shape: nextProps.value.shape });
    }
  }

  render() {
    return (
      <div className="container" id="controller--mainWrapper">
        <Recaman value={this.state} />
      </div>
    );
  }
}

export default Controller;
