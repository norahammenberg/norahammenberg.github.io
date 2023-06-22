import '../App.scss';
import '../styles/icons.scss';
import { Link } from 'react-router-dom';
import { FaLinkedin,FaReact, FaGithubSquare, FaEnvelope, FaHtml5, FaCss3Alt, FaNpm, FaTerminal, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiResponsive } from "react-icons/di";

function Icons(props) {
    return(
        <div className={props.className}>
            <div className={props.classNameGitHub}> 
                <a href={props.hrefGithub}><FaGithubSquare size={props.size} style={{color: '#EDE1AE'}} alt='Visit Github.' /></a>
            </div>
            <div className={props.classNameLinkedin}> 
                <a href={props.hrefLinkedin}><FaLinkedin size={props.size} style={{color: '#EDE1AE'}} alt='Linkedin profile.' /></a>
            </div>
            <div className={props.classNameMail}> 
                <a href='mailto:nora_kerstin@hotmail.com'><FaEnvelope size={props.size} style={{color: '#EDE1AE'}} alt='Contact me through email.' /></a>
            </div>
            <div className={props.classNameHTML}> 
                <FaHtml5 size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameCSS}> 
                <FaCss3Alt size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameJS}> 
                <DiJavascript1 size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameReact}> 
                <FaReact size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameNPM}> 
                <FaNpm size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameTerm}> 
                <FaTerminal size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameSass}> 
                <FaSass size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameResp}> 
                <DiResponsive size={props.size} style={{color: '#EDE1AE'}} alt='' />
            </div>
            <div className={props.classNameCV}> 
                <a className='cvButton' href="./NoraHammenbergCV.pdf" target="_blank" download>Download My CV</a>
            </div>
        </div>  
    );
}
export default Icons; 