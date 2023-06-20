import Header from "../components/Header";
import photoOfNora from '../images/norahammenbergorig.jpg'
import Textbox from "../components/Textbox";
import '../styles/about.scss';
import Icons from "../components/Icons";
import Image from "../components/Image";
import Menu from "../components/Menu";




function About() {

    const text =['My name is Nora Hammenberg. I am a happy and proactive aspiring Front-End Web Developer.',
        <br/>,<br/>,
        //'I am due to graduating in June with a Higher Education Diploma with specialisation in Informatics from University West – Sweden. With a broad skillset working in HTML, CSS, SASS, JavaScript, React.js, React Native, jQuery, PHP, MySQL, NPM, Node.js, Bootstrap, WordPress and more, I have a lot to bring alongside my dedication to learn and develop with in the field.',
        //<br/>,<br/>,
        'I am a highly driven, motivated and patient women wish can be proven through my experience setting up a small independent printmaking business from scratch in 2018. Where I delivered lithography courses and print collaborations with artists.',
        <br/>,<br/>,
        'I take pride in my curiosity and willingness to take on new challenges. Something I believe have been an important part throughout my years at University West. With no previews experience in web development, I quickly learned through asking questions and hard working. '//The logic thinking and problem-solving I bring with me from my printmaking background have come to be very useful. 
    ]  

    return(
         <div>
            <Menu />
            <div className='aboutWrapper'>
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
             <div>
                 
             </div>
       
         </div>
             
       
    );
}

export default About;