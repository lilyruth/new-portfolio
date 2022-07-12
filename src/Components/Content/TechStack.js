
import { useSpring, animated } from 'react-spring';

function TechStack() {

 const contentProps = useSpring({
  to: { opacity: 1, y: 0 },
  from: { opacity: 0, y: -1000 },
  delay: 200,
})
  return (
    <animated.div style={contentProps}>This is the Tech Stack page.</animated.div>
  )
}

export default TechStack;