import { Link } from 'react-router-dom'

function SideNav() {
 return (
  <ul className="sidenav-parent">
  
    <li><Link className="menu-about nav-links" to="/">about</Link></li>
  
    <li><Link className="menu-projects nav-links" to="projects">projects</Link></li>

    <li><Link className="menu-more nav-links" to="more">more</Link></li>

    <li><Link className="menu-tech-stack nav-links" to="tech-stack">tech stack</Link></li>

    <li><Link className="menu-contact nav-links" to="contact">contact</Link></li>

  </ul>
 )
}

export default SideNav