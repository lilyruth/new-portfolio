import { useSpring, animated } from 'react-spring';

function About() {

 const contentProps = useSpring({
  to: { opacity: 1, y: 0 },
  from: { opacity: 0, y: -1000 },
  delay: 200,
 })
 return (
  <animated.div className="about-parent" style={contentProps}>
   <div className="about">
   Hello world! <br/><br/>

   I earned a bachelor's degree in Interdisciplinary Studies from the University of Texas at Dallas. I later earned a Master's degree in Library Science from the ALA-accredited Texas Woman's University. <br/><br/>

   I have thirteen years' experience in Texas public schools either as a teacher or librarian. During that time, I made school webpage updates and taught hour of code activities to students. <br/><br/>

   Learning basic coding concepts in order to teach my students piqued my interest in computer science and web development. In 2020, I began working on a career change into tech. I love the challenges and constant learning of the software engineering field.<br /><br />

   In my free time, I take care of dogs, chickens and trees. I paint when I can find a few spare hours and it's safe to get acrylics everywhere. And of course, I love to read and research.
   </div>
  </animated.div>
 )
}

export default About