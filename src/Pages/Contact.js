import '../styles/contact.scss';
//Components
import Header from "../components/Header";
import Footer from '../components/Footer';
import Textbox from '../components/Textbox';
import Icons from '../components/Icons';
import Menu from '../components/Menu';

function Contact() {

    return( 
        <div>
            <Menu />
            <div className='contactWrapper'>
                <Header className='contactHeader' text='CONTACT ME' />
                <Textbox 
                    className='textContact'
                    text='coming soon' 
                />
                <Icons 
                    size='35'
                    className='iconWrapperContact'
                    classNameGitHub='hidden'
                    classNameLinkedin='hidden'
                    classNameMail='iconSingleWrap'
                    classNameHTML='hidden'
                    classNameCSS='hidden'
                    classNameJS='hidden'
                    classNameReact='hidden'
                    classNameNPM='hidden'
                    classNameTerm='hidden'
                    classNameSass='hidden'
                    classNameResp='hidden'
                    classNameCV='hidden'
                    />
                <Footer />
            </div>
        </div>
    );
}
export default Contact