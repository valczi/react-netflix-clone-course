import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import  Card  from '../movieCard/Card'
import { MovieInterface, ListInterface } from "../../entity/movies";
import usePreventBodyScroll from "./usePreventBodyScroll";

// NOTE: for hide scrollbar
import "./MovieScroll.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

interface List {
    list: ListInterface
}

function MovieScroll({ list }: List) {

    const { disableScroll, enableScroll } = usePreventBodyScroll();

    return (
        <div className='list'>
            <div className="list-title"> {list.category.name} </div>
            <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                <ScrollMenu
                    onWheel={onWheel}
                >
                    {list.movies.map((movie: MovieInterface) => (
                        <Card
                            key={movie.id}
                            movie={movie}
                            itemId={movie.id.toString()}
                        />
                    ))}
                </ScrollMenu>
            </div>
        </div>
    );
}
export default MovieScroll;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

