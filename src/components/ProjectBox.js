import Textbox from "./Textbox";
import Image from "./Image";
import '../styles/project.scss';

function Projectbox(props) {
      
   
    return(
        <div className={props.backgroundWrapper}>
                <h2 className='projectBoxHeader'>{props.header}</h2>
                <div className={props.wrapperClassName}>
                    <Image className={props.className} src={props.src} alt={props.alt} />
                    <Textbox className={props.textClassName} text={props.text} />
                </div>
            </div>
    );
} 

export default Projectbox; 