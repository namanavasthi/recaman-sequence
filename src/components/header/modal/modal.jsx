import React, { Component } from "react";
import "./styles.css";
class Modal extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          I recently learned about a really interesting sequence of integers,
          called the Recamán's sequence. It is very simple to define, but the
          resulting complexity shows how powerful self-reference is (for both
          good and evil). Here's the definition.
          <br />
        </p>
        <p id="modal--equation">
          <b>Recamán's sequence</b>:<br />
          a(0) = 0; for n > 0, a(n) = a(n-1) - n <br />
          if positive and not already in the sequence,
          <br />
          otherwise a(n) = a(n-1) + n.
          <br />
        </p>
        <p id="modal--ref">
          (Ref : Sequence <a href="https://oeis.org/A005132">A005132</a> in{" "}
          <a href="https://oeis.org/">
            The Online Encyclopedia of Integer Sequences.
          </a>
          )
        </p>
      </div>
    );
  }
}

export default Modal;
