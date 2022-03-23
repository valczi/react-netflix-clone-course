import React from "react";
import Button from '@mui/material/Button';
import ModalMovie from '../modalMovie/modalMovie'

import './button.css'
import { MovieInterface } from "../../entity/movies";

interface ButtonInfoInterface{
  movie:MovieInterface
}

export default function ButtonInfo({ movie }:ButtonInfoInterface) {

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{
        color:'rgb(192, 192, 192)',
        backgroundColor:'rgb(125, 125, 125,0.5)',
        border:'none',
        width:'175px',
        '&:hover':{
          border:'none',
          backgroundColor:'rgb(255, 255, 255)',
          color:'rgb(0, 0, 0)',
        }
      }}
      onClick={handleOpen}
      className='btnPlay' variant="outlined">
        <img className='iconPlay 'alt='play icon' src='icon/icons8-info-48.png'/>
           <div className='textButton'>Plus d'infos</div> 
        </Button>
        <ModalMovie movie={movie} open={open} handleClose={handleClose} />
    </div>
  );
}
