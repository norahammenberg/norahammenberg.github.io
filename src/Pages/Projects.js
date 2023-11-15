import '../styles/project.scss';
//Images
import reactNativeApp from '../images/meanwoodvalleymtb.png';
import meanwoodRider from '../images/meanwoodrider.png';
import currencyConverter from '../images/currencyconverter.png';
import bootstrap from '../images/bootstrap-sass-project.png';
import weride from '../images/where-should-we-hike.png';
//Components
import Header from "../components/Header";
import Image from "../components/Image";
import Textbox from "../components/Textbox";
import Icons from "../components/Icons";
import Menu from "../components/Menu";

function Projects() {

    const whereShouldWeRide = ['An application med with HTML, CSS and JavaScript. With the help of a MApLibre Ican display an map for the user to pick a location to find mountain bike trails to ride. The application uses the REST API "Trail API" that provides the user with trails. ',
    <br/>,<br/>,
    'While building the application I practice JavaScript and the use of maps in web applications. I learned how to use JavaScript ot fetch information from a REST API and how to access GPS coordinates from an map to use in an API call.',
    ];

    const textReact = ['A currency converter web application made React.js. This web application uses the REST API Currency Data API that provides real-time exchange rates. ',
    <br/>,<br/>,
    'While building the application I practice designing a website from scratch by applying UX. I learned how to use React.js and a RESTful API.',
    ];

    const textReactNative = ['A mobile application made with React Native, and an API made with Node.js. This full CRUD mobile application can display all rider information, adding, editing and deleting riders from the database',
    <br/>,<br/>,
    'While building the application I learned to create a NoSQL database in MongoDB, an API using Node.js, and using React Native. ',
    ];

    const textQuote = ['This quote generator is build using Javascript, HTML and CSS. The application fetches quotes from an API and randomly display them.',
    <br/>,<br/>,
    'While woking on this projectI learned to use JavaScript the fetch data from an API and randomley displaying a quote from an arrey.',
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
                    <div className="projectImageWrapper imageLeft">
                        <Image className='reactImage' src={weride} alt='The landing page of a project where I was working with Bootstrap and SASS.' />
                    </div>
                    <div className="projectTextWrapper">
                        <Textbox 
                            className='textProject textProjectRight'
                            headerClassName='projectTextBoxHeader textProjectRight' 
                            header='Where Should We Ride?' 
                            text={whereShouldWeRide} 
                            classNameA='VisitLeft'
                            href='https://norahammenberg.github.io/where-should-we-ride-live/
                        />
                        <Icons 
                            size='35'
                            className='projectIconWraper'
                            classNameGitHub='iconProjectLeft'
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
                            hrefGithub='https://github.com/norahammenberg/where-should-we-ride'
                        />
                    </div>
                </div>

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
                            className='projectIconWraper'
                            classNameGitHub='iconProjectLeft'
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
                            header='Quote Generator' 
                            text={textQuote} 
                            classNameA='VisitLeft'
                            href='https://norahammenberg.github.io/quote-generator/'
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
                            hrefGithub='https://github.com/norahammenberg/quote-generator/'
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