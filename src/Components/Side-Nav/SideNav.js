import { Link } from 'react-router-dom'

function SideNav() {
 return (
  <div className="sidenav-parent">
   <div className="menu-about">
    <Link className="nav-links" to="/">about</Link>
   </div>
   <div className="menu-projects">
   <Link className="nav-links" to="projects">projects</Link>
   </div>
   <div className="menu-more">
   <Link className="nav-links" to="more">more</Link>
   </div>
   <div className="menu-tech-stack">
   <Link className="nav-links" to="tech-stack">tech stack</Link>
   </div>
   <div className="menu-contact">
   <Link className="nav-links" to="contact">contact</Link>
   </div>
  </div>
 )
}

export default SideNav