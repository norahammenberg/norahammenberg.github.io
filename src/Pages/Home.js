import '../App.scss';
import '../styles/homeref.scss';
import Homeheader from '../components/Homeheader';
import Menu from '../components/Menu';
import '../styles/menu.scss';

function Home() {
 
  return (
      <div>
        <Menu />
        <div className="wrapper">
          <Homeheader />
        </div> 
      </div>
  );
}

export default Home;
