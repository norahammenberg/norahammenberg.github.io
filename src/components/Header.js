import '../styles/header.scss';

function Header(props) {
    return(
        <div className='headerWrapper'>
            <h1 className={props.className}>{props.text}</h1>
        </div>
    );
}
export default Header;