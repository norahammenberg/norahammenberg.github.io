import '../styles/menu.scss';
//component
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import {  useState } from 'react';
import { Squash as Hamburger} from 'hamburger-react';

 function Menu() {
  //function for style on active state:
  let activeStyle = {
      color: "#9C6654"
    };  

  //const for hamburger menu 
  const [isOpen, setOpen] = useState(false)
  const [showMenu, setShowMenu] = useState (false);
  const [newMobile, setNewMobile] = useState ([]);

  return (
    <div className="menu">
       <nav className="navBar">
            <Logo />
            <ul className="nav">
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/' 
                    style={({ isActive}) => isActive ? activeStyle : undefined}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                    to='/page/about' 
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/skills' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/projects' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/contact' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Contact
                  </NavLink>
                </li>
            </ul>
        </nav> 

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
    </div>
  );
}
export default Menu;

