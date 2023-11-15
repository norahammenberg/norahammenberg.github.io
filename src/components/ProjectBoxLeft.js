import '../styles/project.scss';
//Components
import Textbox from "./Textbox";
import Image from "./Image";
import Icons from './Icons';

function ProjectboxLeft(props) {
    return(
        <div className={props.backgroundWrapper}>
            <div className={props.imageWrapper}>
                <Image className={props.classNameImage} src={props.image} alt={props.imageAlt} />
            </div>
            <div className={props.textWrapper} >
                <Textbox 
                    classNamePara={props.classNamePara}
                    headerClassName={props.headerClassName}
                    header={props.header} 
                    text={props.text} 
                    classNameA={props.classNameA}
                    href={props.href}
                />
                <Icons 
                    size='35'
                    classNameIcon={props.classNameIcon}
                    classNameGitHub={props.classNameGitHub}
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
                    hrefGithub={props.hrefGithub}
                />
            </div>
        </div>
       
    );
} 
export default ProjectboxLeft; 