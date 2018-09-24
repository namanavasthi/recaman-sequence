import React, { Component } from "react";
import Modal from "./modal/modal";
import "./styles.css";
class Header extends Component {
  state = {
    title: "Recam\xE1n Sequence"
  };

  render() {
    return (
      <div id="header--mainWrapper">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="">
            <img
              src={require("../assets/naman.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar--collapse"
            aria-controls="navbar--collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbar--collapse"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a
                  href=""
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#header--modal"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="header--modal" className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <b>What is {this.state.title} ?</b>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Modal />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
