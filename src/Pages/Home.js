import '../App.scss';
import '../styles/homeref.scss';
//Import if components:
import Homeheader from '../components/Homeheader';
import Arrow from '../components/Arrow';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

//For the meny:
import { NavLink } from 'react-router-dom';
import '../styles/menu.scss';
import Logo from '../components/Logo';
import { useRef } from 'react';



function Home() {

  //const for scrolleffect
  
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const NavRef = useRef(null);
  const ContactRef = useRef(null);
  
  //functions that scroll
  const toTop = () =>{
    window.scrollTo({
        top: NavRef.current.offsetTop,
        behavior: 'smooth',
      });
  }

  const goToAbout = () => {
    window.scrollTo({
      top: AboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const goToSkills = () => {
    window.scrollTo({
      top: SkillsRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const goToProjects = () => {
    window.scrollTo({
      top: ProjectsRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const goToContact = () => {
    window.scrollTo({
      top: ContactRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
      <div>
        <div className="menu">
          <nav className="navBar" ref={NavRef}>
                <Logo />
                <ul className="nav">
                    <li>
                      <NavLink 
                        className="navLink" 
                        onClick={toTop} 
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="navLink" 
                        onClick={goToAbout}
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="navLink" 
                        onClick={goToSkills}
                      >
                        Skills
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="navLink" 
                        onClick={goToProjects} 
                      >
                        Projects
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        className="navLink" 
                        onClick={goToContact}
                      >
                        Contact
                      </NavLink>
                    </li>
                </ul>
            </nav> 
        </div>

        <div className="wrapper">
          <Homeheader />
        </div>
        
        <Arrow onClick={toTop} />

        <div className='aboutRef' ref={AboutRef}>
            <About />
        </div>

        <div className='skillsRef'ref={SkillsRef}>
            <Skills />
        </div>
        
        <div className='projectsRef' ref={ProjectsRef}>
          <Projects />
        </div>

        <div className='contactRef' ref={ContactRef}>
          <Contact/>
        </div>
      
      </div>
  );
}

export default Home;
