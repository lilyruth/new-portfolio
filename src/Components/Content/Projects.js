import { useSpring, animated } from 'react-spring';

function Projects() {

 const contentProps = useSpring({
  to: { opacity: 1, y: 0 },
  from: { opacity: 0, y: -1000 },
  delay: 200,
})
  return (
    <animated.div style={contentProps}>This is the Projects page.</animated.div>
  )
}

export default Projects;