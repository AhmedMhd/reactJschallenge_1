import React from "react";

function Post(props) {
  return (
    <div className="right-side-child">
      <div>
        <button className="upvote">
          {" "}
          <i class="fas fa-angle-up"></i>39
        </button>
      </div>
      <div className="post-info">
        <p className="title">{props.item.title}</p>
        <p className="paragraph">{props.item.description}</p>
        <button className="post-type">Enhancement</button>
      </div>
      <div>
        9 <i class="far fa-comment"></i>
      </div>
    </div>
  );
}

export default Post;
