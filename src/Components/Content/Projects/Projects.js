import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import  Quotekeeper  from './Quotekeeper';
import  APOD  from './APOD';
import  Users  from './Users';

function Projects() {

  const contentProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 1000 },
    delay: 200,
  })

  let [displayQuotekeeper, setDisplayQuotekeeper] = useState(true);
  let [displayAPOD, setDisplayAPOD] = useState(false);
  let [displayUsers, setDisplayUsers] = useState(false);

  let [heading, setHeading] = useState('Quotekeeper');


  const handleQuotekeeper = () => {

    setDisplayAPOD(false);
    setDisplayUsers(false);
    setDisplayQuotekeeper(true);
    setHeading('QuoteKeeper');
  };

  const handleAPOD = () => {

    setDisplayAPOD(true);
    setDisplayUsers(false);
    setDisplayQuotekeeper(false);
    setHeading('NASA Photo of the Day');
  };
  const handleUsers = () => {

    setDisplayAPOD(false);
    setDisplayUsers(true);
    setDisplayQuotekeeper(false);
    setHeading('Users and Posts from an API');
  };

  return (
    <animated.div className="projects-parent" style={contentProps}>
      <div className="projects-menu">
        <div className="quotekeeper-menu" onClick={handleQuotekeeper}>Quotekeeper.io</div>
        <div className="apod-menu" onClick={handleAPOD}>NASA Photos</div>
        <div className="users-menu" onClick={handleUsers}>Users from API</div>
      </div>

      <div className="heading"><h2>{heading}</h2></div>
      <div className="projects-view">

      {displayQuotekeeper && <Quotekeeper />}
      {displayAPOD && <APOD />}
      {displayUsers && <Users />}
      
      </div>
    </animated.div>
  )
}

export default Projects;