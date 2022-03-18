import React from "react";

import { MovieInterface } from "../../entity/movies";

import './card.css'

interface CardInterface{
    movie:MovieInterface,
    itemId:string
}

export function Card({ movie }: CardInterface) {
  //console.log(movie.poster_path);
  return (
    <div
      className="card"
    >
      <img className='poster' alt={movie.overview} src={'https://image.tmdb.org/t/p/original/'+movie.poster_path}/>
    </div>
  );
}
