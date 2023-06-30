import '../styles/project.scss';
//Images
import reactNativeApp from '../images/meanwoodvalleymtb.png';
import meanwoodRider from '../images/meanwoodrider.png';
import currencyConverter from '../images/currencyconverter.png';
import bootstrap from '../images/bootstrap-sass-project.png';
//Components
import Header from "../components/Header";
import Image from "../components/Image";
import Textbox from "../components/Textbox";
import Icons from "../components/Icons";
import Menu from "../components/Menu";

function Projects() {

    const textReact = ['A currency converter web application made React.js. This web application uses the REST API Currency Data API that provides real-time exchange rates. ',
    <br/>,<br/>,
    'While building the application I practice designing a website from scratch by applying UX. I learned how to use React.js and a RESTful API.',
    ];

    const textReactNative = ['A mobile application made with React Native, and an API made with Node.js. This full CRUD mobile application can display all rider information, adding, editing and deleting riders from the database',
    <br/>,<br/>,
    'While building the application I learned to create a NoSQL database in MongoDB, an API using Node.js, and using React Native. ',
    ];

    const textBootstrap = ['Stone Tree Press is a front-end only website that I build using Bootstrap, Sass and with a focus on responsive web development.',
    <br/>,<br/>,
    'While woking on this projectI learned about CSS-frameworks and CSS-preprocessor.',
    ];

    return(
        <div>
            <Menu />
            <div className="projectWrapper">
                <Header className='projectHeader' text='MY PROJECTS' />

                {/**First project */}
                <div className="theProjectWrapper">
                    <div className="projectTextWrapper">
                        <Textbox 
                            className='textProject textProjectLeft'
                            headerClassName='projectTextBoxHeader textProjectLeft'
                            header='Currency Converter' 
                            text={textReact} 
                            classNameA='VisitLeft'
                            href='https://norahammenberg.github.io/currency-converter/'
                        />
                        <Icons 
                            size='35'
                            className='projectIconWraper'
                            classNameGitHub='iconProjectRight'
                            classNameLinkedin='hidden'
                            classNameMail='hidden'
                            classNameHTML='hidden'
                            classNameCSS='hidden'
                            classNameJS='hidden'
                            classNameReact='hidden'
                            classNameNPM='hidden'
                            classNameTerm='hidden'
                            classNameSass='hidden'
                            classNameResp='hidden'
                            classNameCV='hidden'
                            hrefGithub='https://github.com/norahammenberg/currency-converter'
                        />
                    </div>
                    <div className="projectImageWrapper">
                        <Image className='reactImage' src={currencyConverter} alt='The landingpage of the currency converter web application' />
                    </div>
                </div>

                {/**Second project */}
                <div className="theProjectWrapper duoWrapper">
                    <div className="projectImageDuoWrapper">
                        <Image className='meanwoodValleyImage' src={reactNativeApp} alt='Landingpage of Meanwood Valley MTB mobile app.' />
                        <Image className='meanwoodValleyrider' src={meanwoodRider} alt='Displaying data fetched from a API.' />
                    </div>
                    <div className="projectTextWrapper duoTextWrapper">
                        <Textbox 
                            className='textProject textProjectRight' 
                            headerClassName='projectTextBoxHeader'
                            header='Meanwood Valley MTB Riders Club'
                            text={textReactNative} 
                            classNameA='hidden'
                        />
                        <Icons 
                            size='35'
                            className='iconProjectLeft'
                            classNameGitHub='iconSingleWrap'
                            classNameLinkedin='hidden'
                            classNameMail='hidden'
                            classNameHTML='hidden'
                            classNameCSS='hidden'
                            classNameJS='hidden'
                            classNameReact='hidden'
                            classNameNPM='hidden'
                            classNameTerm='hidden'
                            classNameSass='hidden'
                            classNameResp='hidden'
                            classNameCV='hidden'
                            hrefGithub='https://github.com/norahammenberg/MTB-React-Native-App'
                        />
                    </div>
                </div>

                {/**Third project */}
                <div className="theProjectWrapper">
                    <div className="projectTextWrapper">
                        <Textbox 
                            className='textProject textProjectLeft'
                            headerClassName='projectTextBoxHeader textProjectLeft'
                            header='Stone Tree Press' 
                            text={textBootstrap} 
                            classNameA='VisitLeft'
                            href='https://norahammenberg.github.io/Bootstrap-project/'
                        />
                        <Icons 
                            size='35'
                            className='projectIconWraper'
                            classNameGitHub='iconProjectRight'
                            classNameLinkedin='hidden'
                            classNameMail='hidden'
                            classNameHTML='hidden'
                            classNameCSS='hidden'
                            classNameJS='hidden'
                            classNameReact='hidden'
                            classNameNPM='hidden'
                            classNameTerm='hidden'
                            classNameSass='hidden'
                            classNameResp='hidden'
                            classNameCV='hidden'
                            hrefGithub='https://github.com/norahammenberg/Bootstrap-project'
                        />
                    </div>
                    <div className="projectImageWrapper">
                        <Image className='reactImage' src={bootstrap} alt='The landing page of a project where I was working with Bootstrap and SASS.' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Projects