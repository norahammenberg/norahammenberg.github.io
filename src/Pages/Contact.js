import '../styles/contact.scss';
import Header from "../components/Header";
import Footer from '../components/Footer';
import Textbox from '../components/Textbox';
import Icons from '../components/Icons';
function Contact() {

    return( 
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

    );
}
export default Contact