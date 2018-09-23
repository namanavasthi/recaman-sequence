import React, { Component } from "react";

import Header from "./components/header/header";

// import Form from "./components/form/form";

import "./App.css";

import Form from "./components/form/form";

import Controller from "./components/controller/controller";

class App extends Component {
  state = {
    limit: "10",
    shape: "circle"
  };

  handleInputChange = value => {
    this.setState({
      limit: value.limit,
      shape: value.shape
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        {/* <Form /> */}
        <Form onInput={this.handleInputChange} />
        <Controller value={this.state} />
      </div>
    );
  }
}

export default App;
