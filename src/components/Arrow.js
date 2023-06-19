
import { useState } from 'react';
import '../styles/arrow.scss';

function Arrow() {
    //setNewStyle is for the little bit that I added that shows on mouseover but have currentley commented out.
    //const [newStyle, setNewStyle] = useState([]);
    const [newStyleTop, setNewStyleTop] = useState([]);

    //scroll to top when clicking on the arrow.
    const toTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }
    //arrow animation
    //animation when mouse enter
    const onMouseEnter = () => {
        /*setNewStyle({
            animationName: 'arrowAnimMouseOver',
            animationDuration: '1s',
            animationFillMode: 'forwards'
           });*/
        setNewStyleTop({
            animationName: 'arrowAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
           });

    }
    //animation when mouse leave
    const onMouseLeave = () => {
        /*setNewStyle({
            animationName: 'arrowAnimMouseLeave',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
           });*/
        setNewStyleTop({
            animationName: 'arrowAnmiDown',
            animationDuration: '0.5',
            animationFillMode: 'forwards'
           });

    }

    return(
        <div className='arrowWrapper'>
            <button className='arrowButton' 
                onClick={toTop}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                
            >
                <span className='arrow'
                   style={newStyleTop}
                ></span>
                {/*<span className='arrowHidden'
                    style={newStyle}
                 
                ></span>*/}
                
            </button>
            
        </div>

        
    );
}

export default Arrow;