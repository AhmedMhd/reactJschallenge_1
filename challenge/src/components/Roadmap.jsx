import React from "react";
import "../style/Roadmap.css";

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap-container">
        <div className="roadmap-header">
          <span className="bold dark-color non-background">Roadmap</span>
          <a href="https://pluralsight.com">View</a>
        </div>
        <div className="roadmap-list">
          <div className="roadmap-list-item">
            <div>
              <span class="dot orange"></span>
              <span className="dark-color"> Planned</span>
            </div>
            <div>
              <span className="dark-color bold">2</span>
            </div>
          </div>

          <div className="roadmap-list-item">
            <div>
              <span class="dot purple"></span>
              <span className="dark-color"> In-Progress</span>
            </div>
            <div>
              <span className="dark-color bold">3</span>
            </div>
          </div>

          <div className="roadmap-list-item">
            <div>
              <span class="dot blue"></span>
              <span className="dark-color"> Live</span>
            </div>
            <div>
              <span className="dark-color bold">1</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
