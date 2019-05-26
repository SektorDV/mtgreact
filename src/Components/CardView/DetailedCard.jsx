import React, {useRef, useState} from 'react';
import {useChain, useSpring, animated} from 'react-spring';

const DetailedCard = props => {
    const [running, setRunning] = useState(true);
    const fadeInRef = useRef();
    const floatRef = useRef();
    const fadeIn = useSpring({
        opacity: 1,
        transform: 'translate(0px, 0px)',
        from: {
            opacity: 0,
            transform: 'translate(0px, -30px)'
        },
        ref: fadeInRef
    })
    const float = useSpring({
        to: {
            transform: 'translate(0px, -10px)',
  
        },
        from: {
            transform: 'translate(0px, 0px)'
        },
        config: {duration: 1000},
        reset: !running,
        reverse: !running,
        onRest: () => setRunning(!running),
        ref: floatRef
    })
    console.log(running)
    useChain([fadeInRef, floatRef])
    return(
            <animated.div  className="detail__card" style={{ background: `url(${props.imageUrl}`, ...fadeIn, ...float}}>
            </animated.div>
        
    )
}

export default DetailedCard;