import {NavLink} from 'react-router-dom';
import '../styles/menu.scss';
import Logo from './Logo';

function Menu() {
    //function for style on active state:
    let activeStyle = {
        color: "#9C6654"
    };
  return (
    <div className="menu">
       <nav className="navBar">
            <Logo />
            <ul className="nav">
                <li><NavLink className="navLink" to='/' style={({ isActive}) => isActive ? activeStyle : undefined}>Home</NavLink></li>
                <li><NavLink className="navLink" to='/page/about' style={({ isActive }) => isActive ? activeStyle : undefined}>About</NavLink></li>
                <li><NavLink className="navLink" to='/page/about' style={({ isActive }) =>isActive ? activeStyle : undefined}>Skills</NavLink></li>
                <li><NavLink className="navLink" to='/page/about' style={({ isActive }) =>isActive ? activeStyle : undefined}>Projects</NavLink></li>
                <li><NavLink className="navLink" to='/page/about' style={({ isActive }) =>isActive ? activeStyle : undefined}>Contact</NavLink></li>
            </ul>
        </nav>
    </div>
  );
}

export default Menu;
