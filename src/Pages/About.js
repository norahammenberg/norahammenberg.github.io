import Header from "../components/Header";
import photoOfNora from '../images/norahammenbergorig.jpg'
import Textbox from "../components/Textbox";
import '../styles/about.scss';
import Icons from "../components/Icons";
import Image from "../components/Image";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {

    const text =['My name is Nora Hammenberg. I am a happy and proactive front-end web developer with an art background based in Leeds, England.',
        <br/>,<br/>,
        'I am a driven, ambitious and creative developer with high aspirations. I enjoy building beautiful websites and applications.',
        <br/>,<br/>,
        'In 2023 I graduated from University West, Sweden, programme Webmaster where I gained experience in both front-end and back-end development, web design and loads more. I am excited to take my skills with me for my new next step as a front-end developer. ',    
    ]  

    return(
        <div className='aboutWrapper' ref={ref} {...props}>
            <div className='imagesAboutWrapper'>
                <Image className='portrait' src={photoOfNora} alt='The creator of this website and the web developer this website is about.' />
            </div>
            <div className='textWrapper'>
                <Header className='aboutHeader' text='ABOUT ME' />
                <Textbox className='textAbout' 
                    text={text} 
                />
                <Icons 
                    size='35'
                    className='iconWrapper'
                    classNameGitHub='iconSingleWrap'
                    classNameLinkedin='iconSingleWrap'
                    classNameMail='iconSingleWrap'
                    classNameHTML='hidden'
                    classNameCSS='hidden'
                    classNameJS='hidden'
                    classNameReact='hidden'
                    classNameNPM='hidden'
                    classNameTerm='hidden'
                    classNameSass='hidden'
                    classNameResp='hidden'
                    classNameCV='iconSingleWrap iconCvWrap'

                    hrefGithub='https://github.com/norahammenberg'
                    hrefLinkedin='https://www.linkedin.com/in/nora-hammenberg/'
                    />
            </div>
        </div>
              
    );
});

export default About;