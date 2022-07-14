import { useState } from 'react';
import { useTransition, useSpringRef, animated } from 'react-spring';
import TECH from './TECH';

function TechStack() {
  
  const [open, set] = useState(true);

  const transAPI = useSpringRef();
  const transition = useTransition( open ? TECH: [], {
    ref: transAPI,
    trail: 400 / TECH.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return (
    <div className="tech-parent">
        <animated.div className="tech-container">

           {transition((style, item) => ( 
             <animated.div 
              style={{ ...style, color: item.color}}
              dangerouslySetInnerHTML={item.name}
              />
           ))}
         

        </animated.div>
    </div>
  )
}

export default TechStack;