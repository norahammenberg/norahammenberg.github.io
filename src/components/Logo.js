import '../styles/menu.scss';
import logo from '../images/norahammenberg-logo-white.png';

function Logo() {
 return(
    <div className='imagesWrapper'> 
        <img className='logo' src={logo} alt='Nora Hammenbergs logo'></img>
    </div>

 ); 
}

export default Logo;