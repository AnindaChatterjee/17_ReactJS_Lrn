import { useState } from "react";

const Colorizer = ()=> {
    const [color, setColor] =useState('#6d0f0f');

    const changeColor = () => {
        console.log('Color Change');
        setColor('green');
    }

    return(
        <div className ='colorizer'>
            <div className ='box' 
                  style={{backgroundColor:color}}> </div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default Colorizer;