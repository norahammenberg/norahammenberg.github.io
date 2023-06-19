
import '../styles/textbox.scss';

function Textbox(props) {
    return(
        <div className='textBoxWrapper'>
            <h3 className={props.headerClassName}>{props.header}</h3>
            <p className={props.className}>{props.text}</p>
        </div>
    );

}

export default Textbox;