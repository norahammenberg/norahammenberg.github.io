
//import { useNavigate } from 'react-router';
import {  Route, Routes} from 'react-router-dom';
import './App.scss';
//Import components:
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  //useNavigate to send te user to the right page when using the button. 
    //const navigate = useNavigate();
  //scroll to element: 
 
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/about" element={<About />} />
          <Route path="/page/skills" element={<Skills />} />
          <Route path="/page/projects" element={<Projects />} />
          <Route path="/page/contact" element={<Contact />} />
        </Routes>
      
    </div>
  );
}

export default App;
