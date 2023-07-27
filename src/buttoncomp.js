import React from "react";
import './buttoncomp.css';

const Buttoncomp=(props)=>{
    return(
        <div className='btn'><button className='more'>{props.buttonName}</button></div>
    );
}
export default Buttoncomp;