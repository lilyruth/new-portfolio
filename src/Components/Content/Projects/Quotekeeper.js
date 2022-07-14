import {useSpring, animated} from 'react-spring';

function Quotekeeper() {

 const projectProps = useSpring({
  to: { opacity: 1, },
  from: { opacity: 0 },
  delay: 200,
})

 return (

  <animated.div className='quotekeeper' style={projectProps}>
   <h1>QuoteKeeper</h1>
   <div className="projects-media">
    <div className="youtube">
     <iframe src="https://www.youtube-nocookie.com/embed/qjG5cuszlDo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="explanation">
     In this full-stack MERN project with actual users, the users can:
     <br /><br />
     <ul>
      <li>View quotes without registering</li>
      <li>Register (users receive a confirmation email)</li>
      <li>Save quotes</li>
      <li>View a paginated list of saved quotes</li>
      <li>View individual quotes and pick from various backgrounds for that quote</li>
      <li>Add their own quotes</li>
      <li>Reset their password</li>
      <li>Delete their account</li>
     </ul>
    </div>
   </div>
   <h2>Project Links</h2>
   <div className="project-links">
    <a href="https://github.com/lilyruth/QuoteKeeperClient" target="_blank" className="pl github">Quotekeeper Client Repo</a>
    <a href="https://github.com/lilyruth/newQuoteKeeperServer" target="_blank" className="pl github2">Quotekeeper Server Repo</a>
    <a href="https://quotekeeper.io" target="_blank" className="pl live-project">QuoteKeeper.io</a>
   </div>
   <p className="test">Test the app with email <strong>doodlepathapps@gmail.com</strong> and password <strong>Testing123!</strong></p>
  </animated.div>
 )
}

export default Quotekeeper