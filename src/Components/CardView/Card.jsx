import React, { useState } from "react";
import "./CardView.scss";
import { animated, useSpring, interpolate } from "react-spring";

const Card = props => {
  const [hover, setHover] = useState(false);

  let animDelay = `${Math.random() * 5}s`;
  const anim = useSpring(
    hover
      ? {
          transform: "scale(1.1)",
          from: {
            transform: "scale(1)"
          }
        }
      : {
          transform: "scale(1)",
          from: {
            transform: "scale(1.1)"
          }
        }
  );

  return (
    <>
      <animated.div
        onClick={props.onClick}
        onMouseEnter={() => setHover(true)}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          animationDelay: animDelay,
          "--animDelay": animDelay,
          ...anim
        }}
        className="card"
      >
        {/* <div
          className="glow"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        /> */}
      </animated.div>
    </>
  );
};

export default Card;
