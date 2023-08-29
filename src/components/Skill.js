import { useState } from "react";
//in the component for ever induviduel skill we will pass two props. An Icon which is the Icon we like to display and a label which is the text that will be displayed when the animation is ruinning.
function Skill ( { Icon, label} ) {

    //Variables dor showing hidden text on mouse over. 
    const [isShown, setIsShown] = useState(false);

    //usestate to set new style onmouseenter.
    const [labelStyle, setLabelStyle] = useState([]);

    const onMouseEnter = () => {
        setIsShown(true);
        setLabelStyle ({
            animationName: 'htmlAnmiUp',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    const onMouseLeave = () => {
        setIsShown(false);
        setLabelStyle ({
            animationName: 'htmlAnmiDown',
            animationDuration: '0.5s',
            animationFillMode: 'forwards'
        }); 
    }

    return (
        <div className='iconSingleWrapSkills'
        //adding onMouseLeave/enter on the div tag instead to aviod the flicking in the animation.
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        > 
            {/**Icon that is passed as a prop from skills page. */}
            <Icon 
                className='icon'
                size='80' 
                style={labelStyle} 
            />
            {isShown && (
                <div className='skillsHeader skillsPop'>
                    {/**Label that is passed as a prop from skills page. */}
                    <p>{label}</p>
            </div>
            )}
        </div>

    );
}

export default Skill;