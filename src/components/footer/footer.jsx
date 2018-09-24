import React, { Component } from "react";

import Social from "./social/social";
import "./styles.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div id="footer--mainWrapper">
        <Social />
      </div>
    );
  }
}

export default Footer;
