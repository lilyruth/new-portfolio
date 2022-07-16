import TitleBar from './Components/Title-Bar/TitleBar';
import SideNav from './Components/Side-Nav/SideNav';
import { Routes, Route } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import About from './Components/Content/About';
import Contact from './Components/Content/Contact/Contact';
import More from './Components/Content/More/More';
import Projects from './Components/Content/Projects/Projects';
import TechStack from './Components/Content/TechStack/TechStack';
import Footer from './Components/Footer/Footer';

function App() {

  const titleProps = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -1000 },
    delay: 333,
  })

  const navProps = useSpring({
    to: { opacity: 1},
    from: { opacity: 0},
    delay: 1000,
  })

  const footerProps = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: 1000 },
    delay: 667,
  })


  return (
    <div className="App">

      <animated.div className="title-parent" style={titleProps}>
        <TitleBar />
      </animated.div>

      <animated.div className="nav-parent" style={navProps}>
        <SideNav />
      </animated.div>

      <Routes>
        <Route path="/" element={
          <About />
        } />

        <Route path="contact" element={
          <Contact />
        } />

        <Route path="more" element={
          <More />
        } />

        <Route path="projects" element={
          <Projects />
        } />

        <Route path="tech-stack" element={
          <TechStack />
        } />

      </Routes>

      <animated.div className="footer-parent" style={footerProps}>
        <Footer />
      </animated.div>

    </div>
  );
}

export default App;
