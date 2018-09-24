import React, { Component } from "react";

class Form extends Component {
  state = {
    selectedLimit: "10",
    selectedShape: "circle"
  };

  handleInputChange(e) {
    if (e.target.type === "text") {
      const limit = e.target.validity.valid
        ? e.target.value
        : this.state.selectedLimit;
      this.setState({
        selectedLimit: limit,
        selectedShape: this.state.selectedShape
      });
      this.props.onInput({
        limit: limit
      });
    } else {
      this.setState({ selectedShape: e.target.value });
      this.props.onInput({
        selectedLimit: this.state.selectedLimit,
        shape: e.target.value
      });
    }
  }

  render() {
    return (
      <form id="inputForm">
        <div className="form-row">
          <div className="col-sm-12 col-md-6 my-3">
            <label>Limit : </label>
            <input
              id="rsLimit"
              className="form-control"
              type="text"
              pattern="[0-9]*"
              onChange={this.handleInputChange.bind(this)}
              value={this.state.selectedLimit}
            />
          </div>
          <div className="col-sm-12 col-md-6 my-3">
            <label>Shape : </label>
            <select
              className="form-control"
              id="rsShape"
              type="dorpdown"
              value={this.state.selectedShape}
              onChange={this.handleInputChange.bind(this)}
            >
              <option value="circle">Circle</option>
              <option value="triangle">Triangle</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
