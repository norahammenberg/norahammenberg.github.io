import '../styles/skills.scss';
import Header from "../components/Header";
import { FaReact, FaHtml5, FaCss3Alt, FaNpm, FaTerminal, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiResponsive } from "react-icons/di";
//import Icons from '../components/Icons';
import { useState } from 'react';
import Menu from '../components/Menu';

function Skills() {
    
    const [isShownHTML, setIsShownHTML] = useState(false);
    const [isShownCSS, setIsShownCSS] = useState(false);
    const [isShownJS, setIsShownJS] = useState(false);
    const [isShownReact, setIsShownReact] = useState(false);
    const [isShownNPM, setIsShownNPM] = useState(false);
    const [isShownTerm, setIsShownTerm] = useState(false);
    const [isShownSass, setIsShownSass] = useState(false);
    const [isShownResp, setIsShownResp] = useState(false);
    
    //use state to set new style on mouse enter.
    const [newStyle, setNewStyle] = useState([]);
    const [newCSS, setNewCSS] = useState([]);
    const [newJS, setNewJS] = useState([]);
    const [newReact, setNewReact] = useState([]);
    const [newNPM, setNewNPM] = useState([]);
    const [newTerm, setNewTerm] = useState([]);
    const [newSass, setNewSass] = useState([]);
    const [newResp, setNewResp] = useState([]);

    

    const onMouseEnterHTML = () => {
        setIsShownHTML(true);
        setNewStyle ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveHTML = () => {
        setIsShownHTML(false);
        setNewStyle ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    
    const onMouseEnterCSS = () => {
        setIsShownCSS(true);
        setNewCSS ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveCSS = () => {
        setIsShownCSS(false);
        setNewCSS ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    
    const onMouseEnterJS = () => {
        setIsShownJS(true);
        setNewJS ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveJS = () => {
        setIsShownJS(false);
        setNewJS ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseEnterReact = () => {
        setIsShownReact(true);
        setNewReact ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveReact = () => {
        setIsShownReact(false);
        setNewReact ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    const onMouseEnterNPM = () => {
        setIsShownNPM(true);
        setNewNPM ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveNPM = () => {
        setIsShownNPM(false);
        setNewNPM ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseEnterTerm = () => {
        setIsShownTerm(true);
        setNewTerm ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveTerm = () => {
        setIsShownTerm(false);
        setNewTerm ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    
    const onMouseEnterSass = () => {
        setIsShownSass(true);
        setNewSass ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveRSass = () => {
        setIsShownSass(false);
        setNewSass ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    
    const onMouseEnterResp = () => {
        setIsShownResp(true);
        setNewResp ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeaveResp = () => {
        setIsShownResp(false);
        setNewResp ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }
    
    return( 
        <div>
             <Menu />
            <div className='skillsWrapper'>
               
                <Header className='skillsHeader' text='SKILLS' />
                <div className='iconWrapper iconWrapperSkills'>
                    <div className='iconSingleWrapSkills'> 
                        <FaHtml5 
                            //have to make a function because it re render and loopoing, by making a function this don't happen
                            onMouseEnter={onMouseEnterHTML}
                            onMouseLeave={onMouseLeaveHTML}
                            size='80' 
                            style={newStyle} 
                        />
                        {isShownHTML && (
                            <div className='skillsHeader skillsPop skillsHTMLPop' style={{ position: 'absolute'}}>
                                <p>HTML</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaCss3Alt 
                        onMouseEnter={onMouseEnterCSS}
                            onMouseLeave={onMouseLeaveCSS}
                            size='80' 
                            style={newCSS} 
                        />
                        {isShownCSS && (
                            <div className='skillsHeader skillsPop skillsCSSPop' style={{ position: 'absolute'}}>
                                <p>CSS</p>
                            </div>
                        )}
                        
                    </div>
                    <div className='iconSingleWrapSkills'> 
                        <DiJavascript1 
                            onMouseEnter={onMouseEnterJS}
                            onMouseLeave={onMouseLeaveJS}
                            size='80' 
                            style={newJS} 
                        />
                        {isShownJS && (
                            <div className='skillsHeader skillsPop' style={{ position: 'absolute'}}>
                                <p>JavaScript</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaReact
                            onMouseEnter={onMouseEnterReact}
                            onMouseLeave={onMouseLeaveReact}
                            size='80' 
                            style={newReact} 
                        />
                        {isShownReact && (
                            <div className='skillsHeader skillsPop skillsReactPop' style={{ position: 'absolute'}}>
                                <p>React.js</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaNpm 
                            onMouseEnter={onMouseEnterNPM}
                            onMouseLeave={onMouseLeaveNPM}
                            size='80' 
                            style={newNPM} 
                        />
                        {isShownNPM && (
                            <div className='skillsHeader skillsPop skillsNPMPop' style={{ position: 'absolute'}}>
                                <p>NPM</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaTerminal 
                            onMouseEnter={onMouseEnterTerm}
                            onMouseLeave={onMouseLeaveTerm}
                            size='80' 
                            style={newTerm} 
                        />
                        {isShownTerm && (
                            <div className='skillsHeader skillsPop skillsReactPop' style={{ position: 'absolute'}}>
                                <p>Terminal</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <FaSass 
                            onMouseEnter={onMouseEnterSass}
                            onMouseLeave={onMouseLeaveRSass}
                            size='80' 
                            style={newSass} 
                        />
                        {isShownSass && (
                            <div className='skillsHeader skillsPop skillsHTMLPop' style={{ position: 'absolute'}}>
                                <p>Sass</p>
                            </div>
                        )}
                    </div>

                    <div className='iconSingleWrapSkills'> 
                        <DiResponsive 
                            onMouseEnter={onMouseEnterResp}
                            onMouseLeave={onMouseLeaveResp}
                            size='80' 
                            style={newResp} 
                        />
                        {isShownResp && (
                            <div className='skillsHeader skillsPop skillsRespPop' style={{ position: 'absolute'}}>
                                <p>Responsive</p>
                            </div>
                        )}
                    </div>
                </div>  
            </div>
        </div>
    );
}
export default Skills

