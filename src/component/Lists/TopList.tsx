import React, { useEffect } from "react";
import { ListInterface, MovieInterface } from "../../entity/movies";
import { useAppSelector } from '../../stores/hooks';
import MovieScroll from '../MovieScroll/MovieScroll';

// NOTE: for hide scrollbar
import "./Lists.css";
// import "./firstItemMargin.css";

function Lists() {
    const films =useAppSelector((state: any) => state.movies.films) ;

    const TopScroller=()=>{
        let filmDup=[...films];
        let sorted:MovieInterface[] = filmDup.sort((filmA: MovieInterface, filmB: MovieInterface) => {
            if( filmA.popularity > filmB.popularity)
                return 1
            return -1;
        })
        sorted=sorted.splice(0,10);
        let List:ListInterface={
            category:{
                name:'Tendances :',
                id:-2,
            },
            movies:sorted,
        }
        return(
            <MovieScroll key={List.category.id} list={List} />
        )
    }
    
    return (
        <div >
            {TopScroller()}
        </div>
    );
}
export default Lists;



