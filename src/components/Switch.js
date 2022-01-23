import React, { useState } from 'react';
import './switch.css';

const Switch = ({isOn,toggle}) => {
    
    var [color, setcolor] = useState('#808080');
  
    console.log(isOn);
   var buttonclick=()=>{
    isOn==='ON'?setcolor("#F28C28"):setcolor("#808080");
    toggle()
   }

    return (
        <div className='container'>
            <div className="buttonl">
                <button style={{background:color}}> </button>
              
            </div>
            <div className="buttons">
                <button onClick={buttonclick}  >{isOn} </button>
                
            </div>
            
        </div>
    );
};

export default Switch;