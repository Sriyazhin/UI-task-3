import React from 'react';
import './commonCard.css';
import Buttoncomp from './buttoncomp';

const Cards= (props) => {
    return(
        <div className='cardone'>
        <div className='subdivision'>
        <div className='notesimage'><img src={props.imagename} alt='notes' className='imageone' width='360px'></img></div>
        <div className='heading'>{props.titlename}</div>
        <div className='content'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <Buttoncomp buttonName={props.NameinButton} />
        </div>
      </div>
    );
}
export default Cards;