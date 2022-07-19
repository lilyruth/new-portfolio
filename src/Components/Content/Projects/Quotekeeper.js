import { useSpring, animated } from 'react-spring';

function Quotekeeper() {

  const projectProps = useSpring({
    to: { opacity: 1, },
    from: { opacity: 0 },
    delay: 200,
  })

  return (

    <animated.div className='quotekeeper' style={projectProps}>
      <div className="youtube">
        <iframe src="https://www.youtube-nocookie.com/embed/qjG5cuszlDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div className="explanation">
        In this full-stack MERN project with actual users, the users can:

        <ul>
          <li>View quotes without registering</li>
          <li>Register and receive a confirmation email</li>
          <li>Save quotes</li>
          <li>View a paginated list of saved quotes</li>
          <li>Pick from various backgrounds for a quote</li>
          <li>Add their own quotes</li>
          <li>Reset their password</li>
          <li>Delete their account</li>
        </ul>
      </div>

      <div className="project-links">
        <h3>Project Links</h3>
        <a href="https://github.com/lilyruth/QuoteKeeperClient" target="_blank" className="pl github">Quotekeeper Client Repo</a>

        <a href="https://github.com/lilyruth/newQuoteKeeperServer" target="_blank" className="pl github2">Quotekeeper Server Repo</a>

        <a href="https://quotekeeper.io" target="_blank" className="pl live-project">QuoteKeeper.io</a>
        <br />
        <p className="test">Test the app with email <strong>doodlepathapps@gmail.com</strong> and password <strong>Testing123!</strong></p>
      </div>
    </animated.div>
  )
}

export default Quotekeeper