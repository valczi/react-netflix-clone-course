import React from "react";

import { MovieInterface } from "../../entity/movies";
import ModalMovie from '../modalMovie/modalMovie'
import './card.css'

interface CardInterface{
    movie:MovieInterface,
    itemId:string
}

export function Card({ movie }: CardInterface) {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <><div
      className="card"
      onClick={() => {
        handleOpen();
      } }
    >
      <img className='poster' alt={movie.overview} src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path} />
    </div><ModalMovie movie={movie} open={open} handleClose={handleClose} /></>
  );
}
