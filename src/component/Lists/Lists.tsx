import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Card } from '../movieCard/Card'
import { MovieInterface, ListInterface } from "../../entity/movies";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { useAppSelector } from '../../stores/hooks'


// NOTE: for hide scrollbar
import "./Lists.css";
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function Lists() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  const lists = useAppSelector((state: any) => state.movies.lists);

  return (
    <div className="background">
      {
    lists.map(
      (list:ListInterface) => {
        if(list.movies.length!==0)
        return (
          <div  key={list.category.id} className='list'>
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
        )
      }
    )}
    </div>
  );
}
export default Lists;

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

