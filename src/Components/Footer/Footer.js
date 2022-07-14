import flower from '../flower2.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <div className="footer">
     <a href="mailto:doodlepath@gmail.com?subject=hello" class="footer-link" ><FontAwesomeIcon class="footer-icon" icon={faSquareEnvelope} /></a>
     <a href="https://github.com/lilyruth" target="_blank" class="footer-link" ><FontAwesomeIcon class="footer-icon"  target="_blank"  icon={faGithubSquare} /></a>
     <a href="https://linkedin.com/in/ruthie-tech" class="footer-link"  target="_blank" ><FontAwesomeIcon class="footer-icon"  icon={faLinkedin} /></a>
     <Link to="/"><img className="footer-flower" src={flower} alt="flower"/></Link>
  
    </div>
  )
}

export default Footer