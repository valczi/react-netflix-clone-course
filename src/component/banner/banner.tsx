import React from "react";
import ButtonPlay from "../../component/buttons/buttonPlay";
import ButtonInfo from "../../component/buttons/buttonInfo";
import {  MovieInterface } from "../../entity/movies";
import './banner.css'

interface BannerInterface {
  movie: MovieInterface
  height: Number
  open: boolean
}

export default function Banner({ movie, height, open }: BannerInterface) {
  //console.log(movie.poster_path);
  


  let style = {};
  if (movie !== undefined) {
    style = {
      width: '100%',
      height: height + 'px',
      background: 'url(https://image.tmdb.org/t/p/original' + movie.backdrop_path + ')',
      backgroundRepeat: ' no-repeat',
      backgroundSize: 'cover',
    }
  }

  let info = () => {
    if (!open)
      return <ButtonInfo movie={movie} />
  }

  return (
    <div
      className="banner"
      style={style}
    >
      <div className="buttons">
        <ButtonPlay />
        {info()}
      </div>

    </div>
  );
}
