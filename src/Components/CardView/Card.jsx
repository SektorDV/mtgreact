import React from "react";
import "./CardView.scss";

const Card = props => {
  let animDelay = `${Math.random()*5}s`;
  return (
    <>
    <div
      onClick={props.onClick}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        animationDelay: animDelay,
        '--animDelay': animDelay
      }}
      className="card"
    >
    <div className='glow'></div>
    </div>
   
    
    </>
  );
};

export default Card;
