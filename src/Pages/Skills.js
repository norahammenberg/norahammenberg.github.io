import '../styles/skills.scss';
import { FaReact, FaHtml5, FaCss3Alt, FaNpm, FaTerminal, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiResponsive } from "react-icons/di";
//components
import Menu from '../components/Menu';
import Header from "../components/Header";
import Skill from '../components/Skill';

function Skills() {
    
    return( 
        <div>
            <Menu />
            <div className='skillsWrapper'>
                <Header className='skillsHeader' text='SKILLS' />
                <div className='iconWrapper iconWrapperSkills'>
                    <Skill Icon={FaHtml5} label='HTML' />
                    <Skill Icon={FaCss3Alt} label='CSS' />
                    <Skill Icon={DiJavascript1} label='JavaScript' />
                    <Skill Icon={FaReact} label='React.js' />
                    <Skill Icon={FaNpm} label='NPM' />
                    <Skill Icon={FaTerminal} label='Terminal' />
                    <Skill Icon={FaSass} label='Sass' />
                    <Skill Icon={DiResponsive} label='Responsive' />
                </div>  
            </div>
        </div>
    );
}

export default Skills

