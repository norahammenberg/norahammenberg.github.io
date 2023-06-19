import Menu from "../components/Menu";
import Header from "../components/Header";
import photoOfNora from '../images/norahammenberg.jpg'
import Textbox from "../components/Textbox";
import '../styles/about.scss'

function About() {
    return(
        <div>
             {/*<Menu />*/}
             
             <div className='aboutWrapper'>
                <img className='portrait' src={photoOfNora} alt='A photo of Nora Hammenberg'></img>
                <div>
                    <Header className='aboutHeader' text='Hello!' />
                    <Textbox className='textAbout' text='My name is Nora Hammenberg and I am on my way to become a web developer. I am currently a fulltime student at the Webmaster programme at University West - Sweden' />
                </div>
                
             </div>
        </div>
       
    );
}

export default About;