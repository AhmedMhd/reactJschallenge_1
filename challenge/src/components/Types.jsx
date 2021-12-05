import React from "react";
import "../style/Types.css";

class Types extends React.Component {
  render() {
    return (
      <div className="types-container">
        <span className="type white-font selected-type">All</span>
        <span className="type white-font unselected-type">UI</span>
        <span className="type white-font unselected-type">UX</span>
        <span className="type white-font unselected-type">Enhancement</span>
        <span className="type white-font unselected-type">Bug</span>
        <span className="type white-font unselected-type">Feature</span>
      </div>
    );
  }
}

export default Types;
