import React from "react";
import "../style/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

class HeaderBar extends React.Component {
  render() {
    return (
      <div className="headerbar-container">
        <div className="headerbar-details">
          <span className="white-font"><FontAwesomeIcon icon={faLightbulb} /></span>
          <span className="white-font bold">6 Suggestions</span>
          <span className="white-font">Sort by: Most Upvotes</span>
        </div>
        <button className="headerbar-btn white-font bold">
          + Add Feedback
        </button>
      </div>
    );
  }
}

export default HeaderBar;
