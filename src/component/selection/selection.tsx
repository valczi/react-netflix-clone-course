import React from "react";
import { useEffect } from "react";
import {  MovieInterface } from "../../entity/movies";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../stores/hooks';
import Card from '../movieCard/Card';

// NOTE: for hide scrollbar
import "./selection.css";
// import "./firstItemMargin.css";

function Selection() {
  
  const movies = useAppSelector((state: any) => state.movies.films);
  const navigate=useNavigate();
  const userLogged = useAppSelector((state: any) => state.movies.userLogged);

  useEffect(() => {
    //localStorage.setItem('myCat');
    if(userLogged===undefined){
      navigate('/');
    }
  }, []);

  return (
    <div className='ResultSearch'>
      {
    movies.map(
      (movie:MovieInterface) => {
        if(userLogged.selection.includes(movie.id))
        return (
            <Card itemId={movie.id.toString()} movie={movie} />
        )
      }
    )}
    </div>
  );
}
export default Selection;



