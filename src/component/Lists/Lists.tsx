import React from "react";
import {  ListInterface } from "../../entity/movies";
import { useAppSelector } from '../../stores/hooks';
import MovieScroll from '../MovieScroll/MovieScroll';

// NOTE: for hide scrollbar
import "./Lists.css";
// import "./firstItemMargin.css";

function Lists() {
  
  const lists = useAppSelector((state: any) => state.movies.lists);

  return (
    <div >
      {
    lists.map(
      (list:ListInterface) => {
        if(list.movies.length!==0)
        return (
          <MovieScroll key={list.category.id} list={list}/>
        )
      }
    )}
    </div>
  );
}
export default Lists;



