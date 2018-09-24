import React, { Component } from "react";
import "./styles.css";
class Social extends Component {
  state = {};
  render() {
    return (
      <div id="social--mainWrapper">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/naman.avasthi"
              className="fa fa-facebook"
              alt="facebook link"
            >
              {""}
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/NamanAvasthi11"
              className="fa fa-twitter"
              alt="twitter link"
            >
              {""}
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/naman_avasthi/?hl=en"
              className="fa fa-instagram"
              alt="instagram link"
            >
              {""}
            </a>
          </li>

          <li>
            <a
              href="https://bitbucket.org/NamanAvasthi/"
              className="fa fa-bitbucket"
              alt="bitbucket link"
            >
              {""}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/namanavasthi"
              className="fa fa-github"
              alt="github link"
            >
              {""}
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/namanavasthi/"
              className="fa fa-linkedin"
              alt="linkedin link"
            >
              {""}
            </a>
          </li>
        </ul>

        <span>&copy; Naman Avasthi | 2018</span>
      </div>
    );
  }
}

export default Social;
