import React, { Component } from "react";

import Header from "./components/header/header";

// import Form from "./components/form/form";

import "./App.css";

import Form from "./components/form/form";

import Controller from "./components/controller/controller";

import Footer from "./components/footer/footer";

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
        <div className="container" id="body">
          <Form onInput={this.handleInputChange} />
          <Controller value={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
