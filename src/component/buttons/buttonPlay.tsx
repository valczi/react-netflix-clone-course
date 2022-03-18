import React from "react";
import Button from '@mui/material/Button';

import './button.css'

export default function ButtonPlay() {
  return (
    <div>
      <Button sx={{
        color:'rgb(192, 192, 192)',
        backgroundColor:'rgb(125, 125, 125,0.5)',
        border:'none',
        width:'auto',
        '&:hover':{
          border:'none',
          backgroundColor:'rgb(255, 255, 255)',
          color:'rgb(0, 0, 0)',
        }
      }} className='btnPlay' variant="outlined">
        <img className='iconPlay 'alt='play icon' src='icons8-jouer-30.png'/>
           <div className='textButton'>Lecture</div> 
        </Button>
    </div>
  );
}
