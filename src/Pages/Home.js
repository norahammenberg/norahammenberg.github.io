import '../App.scss';
//Components
import Homeheader from '../components/Homeheader';
import Menu from '../components/Menu';

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
