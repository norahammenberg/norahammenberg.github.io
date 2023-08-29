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

    //Variables dor showing hidden text on mouse over. 
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
    
    return( 
        <div>
            <Menu />
            <div className='skillsWrapper'>
                <Header className='skillsHeader' text='SKILLS' />
                <div className='iconWrapper iconWrapperSkills'>
                    
                    <div className='iconSingleWrapSkills'> 
                        <FaHtml5 
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
                </div>  
            </div>
        </div>
    );
}
export default Skills

