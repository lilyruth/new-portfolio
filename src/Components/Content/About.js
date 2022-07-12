import { useSpring, animated } from 'react-spring';

function About() {

 const contentProps = useSpring({
  to: { opacity: 1, y: 0 },
  from: { opacity: 0, y: -1000 },
  delay: 200,
})
  return (
    <animated.div style={contentProps}>This is the about page.</animated.div>
  )
}

export default About