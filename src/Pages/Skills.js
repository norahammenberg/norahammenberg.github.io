import '../styles/skills.scss';
import { FaReact, FaHtml5, FaCss3Alt, FaNpm, FaTerminal, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiResponsive } from "react-icons/di";
import { useState } from 'react';
//components
import Menu from '../components/Menu';
import Header from "../components/Header";

function Skills() {
    ///////////////////
    //Work in progress, as I learn and develop I will optimize this code.
    //////////////////

    //Variables for showing hidden text on mouse over. 
    const [isShownHTML, setIsShownHTML] = useState(false);
    const [isShownCSS, setIsShownCSS] = useState(false);
    const [isShownJS, setIsShownJS] = useState(false);
    const [isShownReact, setIsShownReact] = useState(false);
    const [isShownNPM, setIsShownNPM] = useState(false);
    const [isShownTerm, setIsShownTerm] = useState(false);
    const [isShownSass, setIsShownSass] = useState(false);
    const [isShownResp, setIsShownResp] = useState(false);
    
    //usestate to set new style onmouseenter.
    const [newStyle, setNewStyle] = useState([]);

    const whenMouseEnter = () => {
        setNewStyle ({
                animationName: 'htmlAnmiUp',
                animationDuration: '0.5s',
                animationFillMode: 'forwards'
            });      
    }

    
    const onMouseEnter = (event) => {
        const elementID = event.target.id;
        console.log('ID:' + elementID);

        if (elementID === 'html') {
            setIsShownHTML(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'css') {
            setIsShownCSS(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'js') {
            setIsShownJS(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'react') {
            setIsShownReact(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'npm') {
            setIsShownNPM(true);

            whenMouseEnter(); 
        }
        else if (elementID === 'term') {
            setIsShownTerm(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'sass') {
            setIsShownSass(true);
            whenMouseEnter(); 
        }
        else if (elementID === 'resp') {
            setIsShownResp(true);
            whenMouseEnter(); 
        }
    }

    const onMouseLeave = (event) => {
        const elementID = event.target.id;
        console.log('ID:' + elementID);
        setIsShownHTML(false);
        setIsShownCSS(false);
        setIsShownJS(false);
        setIsShownReact(false);
        setIsShownNPM(false);
        setIsShownTerm(false);
        setIsShownSass(false);
        setIsShownResp(false);
        setNewStyle ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const iconArray = [
        {
            icon: FaHtml5,
            id: 'html',
            showing: isShownHTML,
            text: 'HTML',
            style: newStyle
        },
        {
            icon: FaCss3Alt,
            id: 'css',
            showing: isShownCSS,
            text: 'CSS',
            style: newStyle
        },
        {
            icon: DiJavascript1,
            id: 'js', 
            showing: isShownJS,
            text: 'javaScript',
            style: newStyle
        },
        {
            icon: FaReact,
            id: 'react', 
            showing: isShownReact,
            text: 'React.js',
            style: newStyle
        },
        {
            icon: FaNpm,
            id: 'npm', 
            showing: isShownNPM,
            text: 'NPM',
            style: newStyle
        },
        {
            icon: FaTerminal,
            id: 'term', 
            showing: isShownTerm,
            text: 'Terminal',
            style: newStyle
        },
        {
            icon: FaSass,
            id: 'sass', 
            showing: isShownSass,
            text: 'Sass',
            style: newStyle
        },
        {
            icon: DiResponsive,
            id: 'resp', 
            showing: isShownResp,
            text: 'Responsive',
            style: newStyle
        },
    ];
    const iconList = iconArray.map(theIcon => 
            <div className='iconSingleWrapSkills'>
                <theIcon.icon
                    key={theIcon.id}
                    id = {theIcon.id}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    size='80' 
                    style={theIcon.showing  && theIcon.style} 
                />
                {theIcon.showing && (
                    <div className='skillsHeader skillsPop skillsHTMLPop' style={{ position: 'absolute'}}>
                        <p>{theIcon.text}</p>
                    </div>
                )}
            </div>
        );

    return( 
        <div>
            <Menu />
            
            <div className='skillsWrapper'>
                <Header className='skillsHeader' text='SKILLS' />
                <div className='iconWrapper iconWrapperSkills'>
                    {iconList}
                    
                    
                    {/*<div className='iconSingleWrapSkills'> 
                        <FaHtml5
                            id='html' 
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownHTML && newStyle} 
                        />
                        {isShownHTML && (
                            <div className='skillsHeader skillsPop skillsHTMLPop' style={{ position: 'absolute'}}>
                                <p>HTML</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaCss3Alt 
                            id='css'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownCSS && newStyle} 
                        />
                        {isShownCSS && (
                            <div className='skillsHeader skillsPop skillsCSSPop' style={{ position: 'absolute'}}>
                                <p>CSS</p>
                            </div>
                        )}
                    </div>
                    
                    <div className='iconSingleWrapSkills'> 
                        <DiJavascript1 
                            id='js'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownJS && newStyle} 
                        />
                        {isShownJS && (
                            <div className='skillsHeader skillsPop' style={{ position: 'absolute'}}>
                                <p>JavaScript</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaReact
                            id='react'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownReact && newStyle}
                        />
                        {isShownReact && (
                            <div className='skillsHeader skillsPop skillsReactPop' style={{ position: 'absolute'}}>
                                <p>React.js</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaNpm 
                            id='npm'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownNPM && newStyle} 
                        />
                        {isShownNPM && (
                            <div className='skillsHeader skillsPop skillsNPMPop' style={{ position: 'absolute'}}>
                                <p>NPM</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaTerminal 
                            id='term'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownTerm && newStyle} 
                        />
                        {isShownTerm && (
                            <div className='skillsHeader skillsPop skillsReactPop' style={{ position: 'absolute'}}>
                                <p>Terminal</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaSass
                            id='sass' 
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownSass && newStyle}
                        />
                        {isShownSass && (
                            <div className='skillsHeader skillsPop skillsHTMLPop' style={{ position: 'absolute'}}>
                                <p>Sass</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <DiResponsive 
                            id='resp'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            size='80' 
                            style={isShownResp && newStyle}
                        />
                        {isShownResp && (
                            <div className='skillsHeader skillsPop skillsRespPop' style={{ position: 'absolute'}}>
                                <p>Responsive</p>
                            </div>
                        )}
                        </div>*/}
                </div>  
            </div>
        </div>
    );
}
export default Skills


