import apodGif from './APOD.gif';
import { animated, useSpring } from 'react-spring';

function APOD() {

  const projectProps = useSpring({
    to: { opacity: 1, },
    from: { opacity: 0 },
    delay: 200,
  })

  return (
    <animated.div className='apod' style={projectProps}>
      <h1>NASA Photo of the Day</h1>
      <div className="projects-media">
        <div className="youtube">
          <img className="apodGIF" src={apodGif} alt="screenshot of app retrieving images from the NASA photo of the day API" />
        </div>
        <div className="explanation">
          This is a simple API retrieval app:
          <br /><br />
          <ul>
            <li>It uses a proxy server to hide the API key.</li>
            <li>Users can fetch new photos.</li>
            <li>Users can open a larger photo.</li>
            <li>Credits are given if available in the record.</li>
            <li>I learned Material UI to create this app.</li>

          </ul>

          <h2>Project Links</h2>
          <div className="apod-project-links">
            <a href="https://github.com/lilyruth/APOD-front-end" target="_blank" className="pl github">APOD Client Repo</a>
            <a href="https://github.com/lilyruth/apodappserver" target="_blank" className="pl github2">APOD Server Repo</a>
            <a href="https://ruthie-apod.netlify.app/" target="_blank" className="pl live-project">Live Project</a>
          </div>
        </div>
      </div>

    </animated.div>
  )
}

export default APOD