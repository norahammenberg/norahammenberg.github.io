import '../styles/header.scss';

function Header(props) {
    return(
        <div className='headerWrapper'>
            <h3 className={props.className}>{props.text}</h3>
        </div>
    );
}
export default Header;