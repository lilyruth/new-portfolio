import flower from '../flower2.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className="footer">
     <FontAwesomeIcon class="footer-icon" icon={faSquareEnvelope} />
     <FontAwesomeIcon class="footer-icon"  icon={faGithubSquare} />
     <FontAwesomeIcon class="footer-icon"  icon={faLinkedin} />
     <Link to="/"><img className="footer-flower" src={flower} alt="flower"/></Link>
  
    </div>
  )
}

export default Footer