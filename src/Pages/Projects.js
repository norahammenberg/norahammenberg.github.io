import Header from "../components/Header";
import reactNativeApp from '../images/meanwoodvalleymtb.png';
import meanwoodRider from '../images/meanwoodrider.png';
import currencyConverter from '../images/currencyconverter.png';
import '../styles/project.scss';
import Image from "../components/Image";
import Textbox from "../components/Textbox";
import Icons from "../components/Icons";
import Menu from "../components/Menu";

//<a href="https://www.flaticon.com/free-icons/iphone" title="iphone icons">Iphone icons created by amoghdesign - Flaticon</a>
function Projects() {

    const textReact =['A currency converter web application made React.js. This web application uses the REST API Currency Data API that provieds real-time exhange rates. This web application help you convert different currency',
    <br/>,<br/>,
    'While building the application I learned how to use React.js, RESTful API ',
    ]

    const textReactNative =['A currency converter web application made React.js. This web application uses the REST API Currency Data API that provieds real-time exhange rates. This web application help you convert different currency',
    <br/>,<br/>,
    'This web application help you convert different currency',
    <br/>,<br/>,
    'While building the application I learned how to use React.js, RESTful API '
    ]
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
                        />
                        <Icons 
                            size='35'
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
                        <Image className='reactImage' src={currencyConverter} alt='Currency converter application' />
                    </div>
                </div>

                {/**Second project */}
                <div className="theProjectWrapper duoWrapper">
                    <div className="projectImageDuoWrapper">
                        <Image className='meanwoodValleyImage' src={reactNativeApp} alt='Currency converter application' />
                
                        <Image className='meanwoodValleyrider' src={meanwoodRider} alt='Currency converter application' />
                    </div>

                    <div className="projectTextWrapper duoTextWrapper">
                        <Textbox 
                            className='textProject textProjectRight' 
                            headerClassName='projectTextBoxHeader'
                            header='Mountain BIke Riders Club Mobile'
                            text={textReactNative} 
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
            </div>
        </div>
    );
}

export default Projects