import React from "react";
import "../style/FeedbackBoard.css";

class FeedbackBoard extends React.Component {
  render() {
    return (
      <div className="feedbackboard-container">
        <span className="bold white-font">Fronted Mentor</span>
        <span className="white-font">Feedaback Board</span>
      </div>
    );
  }
}

export default FeedbackBoard;
