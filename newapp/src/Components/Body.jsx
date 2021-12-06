import React from "react";
import Post from "./Post";
function Body(props) {
  return (
    <div className="right-side-parent">
      {props.items.map((item, index) => {
        return <Post item={item} key={index} />;
      })}
    </div>
  );
}

export default Body;
