import '../App.scss';
import '../styles/homeheader.scss';
//import Menu from '../components/Menu';
import '../styles/menu.scss';
import About from './About';
import { NavLink } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { Squash as Hamburger} from 'hamburger-react';

function Home() {
  //function for style on active state:
  let activeStyle = {
    color: "#0087B0" //"#003B4A"
  };
  const [isIntersecting, setIsIntersecting] = useState(false);

  //variables for useRef
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

    //////////////////////////////////////////////////////
    //const for hamburger menu 
    const [isOpen, setOpen] = useState(false)
    const [showMenu, setShowMenu] = useState (false);
    const [newMobile, setNewMobile] = useState ([]);
  //////////////////////////////////////////////////////


  //ScrollTo animation.
  const toTop = () => {
      window.scrollTo({
          top: 1,
          behavior: 'smooth',
        });
    }

  const goToAbout = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  }
  
  const goToSkills = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const goToProjects = () => {
    window.scrollTo({
      top: projectsRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const goToContact = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver (([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      });
    console.log(isIntersecting);
    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting){
        homeRef.current.querySelectorAll("h1").forEach((el) => {
        el.classList.add("slideToLeft");
      })
      homeRef.current.querySelectorAll("h2").forEach((elem) => {
        console.log(elem)
        elem.classList.add("slideToLeftFar");
      })
      homeRef.current.querySelectorAll("nav").forEach((elem) => {
        console.log(elem)
        elem.classList.add("slideToLeftFar");
      })
    }
  })
  

  return (
      
        <div className="wrapper" ref={homeRef}>
          <div className='alignHeader'>
            <h1 className='headerOne'> Nora Hammenberg</h1>
            <h2 className='headerTwo'> Fontend Developer</h2>
       
            <div className="menu">
              <nav className="navBar">
                  <ul className="nav">
                      <li>
                        <NavLink 
                          className="navLink" 
                          to='/' 
                          style={({ isActive}) => isActive ? activeStyle : undefined}
                          onClick={toTop} 
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          className="navLink" 
                          style={({ isActive }) => isActive ? activeStyle : undefined}
                          to='/page/about' 
                          onClick={goToAbout}
                        >
                          About
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          className="navLink" 
                          to='/page/skills' 
                          style={({ isActive }) =>isActive ? activeStyle : undefined}
                          onClick={goToSkills}
                        >
                          Skills
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          className="navLink" 
                          to='/page/projects' 
                          style={({ isActive }) =>isActive ? activeStyle : undefined}
                          onClick={goToProjects}
                        >
                          Projects
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          className="navLink" 
                          to='/page/contact' 
                          style={({ isActive }) =>isActive ? activeStyle : undefined}
                          onClick={goToContact}
                        >
                          Contact
                        </NavLink>
                      </li>
                  </ul>
              </nav>
              {/**//* */}

              <div className="mobileMenu">
                <Hamburger 
                  rounded
                  easing="ease-in"
                  color="#2D2C2B"
                  toggled={isOpen}
                  toggle={setOpen} 
                  onToggle={toggled => {
                    if (toggled) {
                      console.log('toggled')
                      console.log(showMenu)
                      setShowMenu(true);
                      setNewMobile ({
                        animationName: 'mobileAnimOpen',
                        animationDuration: '1s',
                        animationFillMode: 'forwards'
                    });
                    }
                    else {
                      console.log('closed') 
                      console.log(showMenu)
                      setShowMenu(false);
                      setNewMobile ({
                        animationName: 'mobileAnimClose',
                        animationDuration: '0.8s',
                        animationFillMode: 'both' 
                      });
                    }
                  }}
                />
              </div>
              {showMenu && (
                        <ul className="mobileNav" style={newMobile}>
                          <li className='mobileList'>
                            <NavLink 
                              className="navLink" 
                              to='/' 
                              style={({ isActive}) => isActive ? activeStyle : undefined}
                            >
                              Home
                            </NavLink>
                          </li>
                          <li className='mobileList'>
                            <NavLink 
                              className="navLink" 
                              style={({ isActive }) => isActive ? activeStyle : undefined}
                              to='/page/about' 
                            >
                              About
                            </NavLink>
                          </li>
                          <li className='mobileList'>
                            <NavLink 
                              className="navLink" 
                              to='/page/skills' 
                              style={({ isActive }) =>isActive ? activeStyle : undefined}
                            >
                              Skills
                            </NavLink>
                          </li>
                          <li className='mobileList'>
                            <NavLink 
                              className="navLink" 
                              to='/page/projects' 
                              style={({ isActive }) =>isActive ? activeStyle : undefined}
                            >
                              Projects
                            </NavLink>
                          </li>
                          <li className='mobileList'>
                            <NavLink 
                              className="navLink" 
                              to='/page/contact' 
                              style={({ isActive }) =>isActive ? activeStyle : undefined}
                            >
                              Contact
                            </NavLink>
                          </li>
                      </ul>
              )}

              {/**//* */}



            </div>
        </div>
        <div >
          <About ref={aboutRef}/>
        </div>
        <div >
          <Skills ref={skillsRef}/>
        </div>
        <div >
          <Projects ref={projectsRef}/>
        </div>
        <div >
          <Contact ref={contactRef}/>
        </div>
  
      </div>

  );
}

export default Home;
