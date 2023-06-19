
import '../styles/textbox.scss';

function Textbox(props) {
    return(
        <div className='textBoxWrapper'>
            <p className={props.className}>{props.text}</p>
        </div>
    );

}

export default Textbox;