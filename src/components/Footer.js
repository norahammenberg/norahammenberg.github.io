import '../styles/footer.scss';
import Header from './Header';

function Footer() {
    //const for scrolleffect
  

    return(
        <div className="footerWrapper">
            <Header className='contactFooter' text='THANK YOU FOR THE VISIT'/>
            <p className='footerPara'>© NORA HAMMENBERG 2023</p>
        </div>
    );

}

export default Footer