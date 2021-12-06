import React from "react";
function Navbar(props) {
  return (
    <div className="right-side-nav">
      <div className="logo-parent">
        <span className="logo-text">
          <i class="fab fa-accessible-icon"></i>
        </span>
        <span className="logo-text">6 Suggesions</span>
      </div>
      <div className="sorting-text">
        <span>Sort by: </span>
        <span>Most Updates</span>
      </div>
      <div className="">
        <button className="important-button" onClick={props.handleOpen}>
          + Add Feedback
        </button>
      </div>
    </div>
  );
}

export default Navbar;
