import { Link } from 'react-router-dom';

function Button(props) {
    return(
        <Link className={props.className} to={props.to} target={props.target} downlad>{props.text}</Link>
    );
}
export default Button; 