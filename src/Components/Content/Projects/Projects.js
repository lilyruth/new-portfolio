import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import  Quotekeeper  from './Quotekeeper';
import  APOD  from './APOD';
import  Users  from './Users';
import  Lyrics  from './Lyrics';

function Projects() {

  const contentProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -1000 },
    delay: 200,
  })

  let [displayQuotekeeper, setDisplayQuotekeeper] = useState(true);
  let [displayLyrics, setDisplayLyrics] = useState(false);
  let [displayAPOD, setDisplayAPOD] = useState(false);
  let [displayUsers, setDisplayUsers] = useState(false);

  const handleQuotekeeper = () => {
    setDisplayLyrics(false);
    setDisplayAPOD(false);
    setDisplayUsers(false);
    setDisplayQuotekeeper(true);
  };
  const handleLyrics = () => {
    setDisplayLyrics(true);
    setDisplayAPOD(false);
    setDisplayUsers(false);
    setDisplayQuotekeeper(false);
  };
  const handleAPOD = () => {
    setDisplayLyrics(false);
    setDisplayAPOD(true);
    setDisplayUsers(false);
    setDisplayQuotekeeper(false);
  };
  const handleUsers = () => {
    setDisplayLyrics(false);
    setDisplayAPOD(false);
    setDisplayUsers(true);
    setDisplayQuotekeeper(false);
  };

  return (
    <animated.div className="projects-parent" style={contentProps}>
      <div className="projects-menu">
        <div className="quotekeeper-menu" onClick={handleQuotekeeper}>Quotekeeper.io</div>
        <div className="lyrics-menu" onClick={handleLyrics}>Lyrics</div>
        <div className="apod-menu" onClick={handleAPOD}>NASA Photos</div>
        <div className="users-menu" onClick={handleUsers}>Users from API</div>
      </div>
      <div className="projects-view">

      {displayQuotekeeper && <Quotekeeper />}
      {displayLyrics && <Lyrics />}
      {displayAPOD && <APOD />}
      {displayUsers && <Users />}
      
      </div>
    </animated.div>
  )
}

export default Projects;