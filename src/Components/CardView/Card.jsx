import React from "react";
import "./CardView.scss";

const Card = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundImage: `url(${props.imageUrl})`
      }}
      className="card"
    />
  );
};

export default Card;
