//import {Route, Routes} from 'react-router-dom';// for routing
import { useNavigate } from 'react-router';
import {Route, Routes} from 'react-router-dom';

import './App.scss';
//Import if components:
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  //useNavigate to send te user to the right page when using the button. 
    const navigate = useNavigate();
    
  return (
    <div>
     <Routes>
        <Route path="./" element={<Home />} />
        <Route path="/page/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  );
}

export default App;
