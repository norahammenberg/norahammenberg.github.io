{/*import { NavLink } from 'react-router-dom';
import '../styles/menu.scss';
import Logo from './Logo';
import { useRef, useState } from 'react';
import About from '../Pages/About';
function Menu(props) {
  //function for style on active state:
  let activeStyle = {
    color: "#9C6654"
  };  
  const AboutRef = useRef(null);
  const goToAbout = () => {
    window.scrollTo({
      top: AboutRef.current.offsetTop,
      behavior: 'smooth',
    });
 }

  const AboutRef = useRef(null);
  //collect data submitted by user to send up the parent: 
  const handleKeyUp = (e) => {
    
      console.log("Menu, handleKeyUp()", AboutRef, goToAbout);
      props.SendData(AboutRef)
      
     
  };*/}
  //collection data that should be sent to About.js

 /* const collectAbout = () => {
    console.log('collectAbout()', );
    console.log(sendAbout);
  }
  //creating a const to save the data:
  const [sendAbout, setSendAbout] = useState(null);*/
  
  
  
   
  return (
    /*<div className="menu">
   
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
                    onClick={goToAbout}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/about' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/about' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    className="navLink" 
                    to='/page/about' 
                    style={({ isActive }) =>isActive ? activeStyle : undefined}
                  >
                    Contact
                  </NavLink>
                </li>
            </ul>
        </nav> 

    </div>
  );
}

export default Menu;*/
