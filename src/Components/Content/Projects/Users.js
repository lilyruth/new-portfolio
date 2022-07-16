import usersGif from './users.gif';
import { animated, useSpring } from 'react-spring';

function Users() {

  const projectProps = useSpring({
    to: { opacity: 1, },
    from: { opacity: 0 },
    delay: 200,
  })

  return (
    <animated.div className='quotekeeper' style={projectProps}>
      <div className="youtube">
        <img className="usersGIF" src={usersGif} alt="screenshot of a project using the jsonplaceholder api" />
      </div>
      <div className="explanation">
        This is a simple API retrieval app written in vanilla JS.
        <br /><br />
        <ul>
          <li>The users are retrieved from an API and placed in a table.</li>
          <li>Clicking on the user will retrieve their posts from the API.</li>
          <li>The viewer is able to return to the table with users and retrieve a new set of posts.</li>
          <li>I also completed this project in React.</li>


        </ul>
      </div>

      <div className="project-links users-links">
        <h3>Project Links</h3>
        <a href="https://github.com/lilyruth/takeHome041622" target="_blank" className="pl github">Project Repo</a>
        <a href="https://041622.netlify.app" target="_blank" className="pl live-project">Live Project</a>

        <a href="https://github.com/lilyruth/react041622" target="_blank" className="pl github">Project in React</a>
        <a href="https://041622remix.netlify.app" target="_blank" className="pl live-project">Live Project in React</a>
      </div>

    </animated.div>
  )
}

export default Users