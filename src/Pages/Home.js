//import {Route, Routes} from 'react-router-dom';// for routing
import { useNavigate } from 'react-router';

import '../App.scss';
//Import if components:
import Menu from '../components/Menu';
import Homeheader from '../components/Homeheader';
import Arrow from '../components/Arrow';
import About from './About';

function Home() {
  //useNavigate to send te user to the right page when using the button. 
    const navigate = useNavigate();
    
  return (
    <div>
      <div>
        <div className="wrapper">
          <Menu />
          <Homeheader />
          
        </div>
        <Arrow />
      </div>
      <div>
        <About />
      </div>
    </div>
    
    
  );
}

export default Home;
