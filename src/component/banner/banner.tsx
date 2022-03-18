import { url } from "inspector";
import React from "react";

import  ButtonPlay  from "../../component/buttons/buttonPlay";
import  ButtonInfo  from "../../component/buttons/buttonInfo";
import { fetchData } from '../../stores/slices/movieSlice';
import { useAppSelector, useAppDispatch } from '../../stores/hooks'


import './banner.css'

export default function Banner() {
  //console.log(movie.poster_path);

  const movie = useAppSelector((state: any) => state.movies.films[0]);
  const dispatch = useAppDispatch();
  let style = {};
  console.log(movie);
  if(movie===undefined){
      console.log(' console undefined');
    dispatch(fetchData());
  }else{
      style={
        width: '100%',
        height: '880px',
        background: 'url(https://image.tmdb.org/t/p/original'+movie.backdrop_path+')',
        backgroundRepeat:' no-repeat',
        backgroundSize: 'cover',
      }
  }

  return (
    <div
      className="banner"
      style={style}
    >
        <div className="buttons">
     <ButtonPlay />
     <ButtonInfo />
     </div>
    </div>
  );
}
