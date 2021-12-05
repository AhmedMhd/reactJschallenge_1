import React from "react";
import "../style/Feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";

class Feedback extends React.Component {
  render() {
    return (
      <div className="feedback-container">
        <div className="Number unselected-type">
          <span>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
          <span className="dark-color bold">112</span>
        </div>
        <div className="feedback-details">
          <span className="dark-color bold">Add tags for solutions</span>
          <span>Easier to search for solutions based on a specific stack</span>
          <span className="type unselected-type">Enhancement</span>
        </div>
        <div>
          <span className="grey">
            <FontAwesomeIcon icon={faComment} />
          </span>
          <span className="dark-color bold"> 112</span>
        </div>
      </div>
    );
  }
}

export default Feedback;
