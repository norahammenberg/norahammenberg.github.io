import '../styles/homeheader.scss';

function Homeheader() {
    return(
        <div className='headerWrapper'>
            <div className='alignHeader'>
                <h1 className='headerOne'><span className='headDarkColour'> Nora Hammen</span><span className='headerLightColour'>berg</span></h1>
            </div>
            <div className='alignHeader secondHeader'>
                <h2 className='headerTwo'><span className='headDarkColour'> Web </span><span className='headerLightColour'>Developer</span></h2>
            </div>
        </div>
    );
}
export default Homeheader;