import { useSpring, animated } from 'react-spring';
import leetcode from './leetcode.jpg';
import codepen from './codepen.jpg';


function More() {

  const contentProps = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -1000 },
    delay: 200,
  })

  return (
    <animated.div style={contentProps} className="more-parent">
      <h1>Additional Work</h1>
      <div className="more-container">
        <div className="more-view">
          <div className="leetcode"><a href="https://leetcode.com/LilyRuth/" target="_blank"><img src={leetcode} alt="leetcode screenshot" /></a>
            <div className="leetcode-text">I've challenged myself by solving over 300 problems on LeetCode. LeetCode helps me unwind after a stressful day!</div>
          </div>
          <div className="codepen"><a href="https://codepen.io/lilyruth" target="_blank"><img src={codepen} alt="codepen screenshot" /></a>
            <div className="codepen-text">
              I like to experiment with CSS on Codepen, and I have a few projects for freeCodeCamp here.</div></div>

        </div>
      </div>
    </animated.div>
  )
}

export default More;




