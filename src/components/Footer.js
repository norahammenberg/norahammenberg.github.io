import '../styles/footer.scss';
import Header from './Header';

function Footer() {
    return(
        <div className="footerWrapper">
            <Header className='contactFooter' text='THANK YOU FOR THE VISIT'/>
            <p className='footerPara'>© NORA HAMMENBERG 2023</p>
            <p className='footerParaThanks'>Thanks to <a className='link' href="https://www.flaticon.com/free-icons/iphone" title="iphone icons">Andri Graphic</a> and <a className='link' href="https://www.flaticon.com/free-icons/macbook" title="macbook icons">Freepik</a> for phone and laptop icons.</p>
        </div>
    );
}
export default Footer