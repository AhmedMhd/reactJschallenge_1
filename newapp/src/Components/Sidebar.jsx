import React from "react";

function Sidebar() {
  return (
    <div className="left-side">
      <div className="left-side-child">
        <h4 className="first-child-header">FrontEnd Mentor</h4>
        <span className="first-child-span">FeedBack Board</span>
      </div>
      <div className="left-side-child pick-type">
        <button>UI</button>
        <button>UX</button>
        <button>Enhancement</button>
        <button>Feedback</button>
        <button>Feedback</button>
        <button>Feedback</button>
      </div>
      <div className="left-side-child roadmap">
        <div className="roadmap-title"></div>
        <div className="roadmap-list"></div>
      </div>
    </div>
  );
}

export default Sidebar;
