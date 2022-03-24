import Typography from '@mui/material/Typography';
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonAdd from "../../component/buttons/buttonAdd";
import ButtonRemove from "../../component/buttons/buttonRemove";
import ButtonInfo from "../../component/buttons/buttonInfo";
import ButtonPlay from "../../component/buttons/buttonPlay";
import { MovieInterface } from "../../entity/movies";
import { useAppSelector } from '../../stores/hooks';
import './banner.css';

interface BannerInterface {
  movie: MovieInterface
  height: Number
  open: boolean
}

const title = {
  position: 'absolute',
  fontFamily: 'Arial',
  fontSize: '1.5rem',
  fontWeight: 600,
  top: '30%',
  left:'10%',
  color: 'white',
  margin: 4,
}


export default function Banner({ movie, height, open }: BannerInterface) {
  let navigate = useNavigate();
  const logged = useAppSelector((state: any) => state.movies.logged);
  const user = useAppSelector((state: any) => state.movies.userLogged);

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

  useEffect(() => {
    //localStorage.setItem('myCat');
    if(!logged){
      navigate('/');
    }
  }, []);

  let info = () => {
    if (!open)
      return <ButtonInfo movie={movie} />
    else{
      if(!user.selection.includes(movie.id)){
        return <ButtonAdd movieId={movie.id}/>
      }else{
        return <ButtonRemove movieId={movie.id}/>
      }
    }
  }

  return (
    <div
      className="banner"
      style={style}
    >
      <Typography sx={title} id="modal-modal-title" component="h1">
        {movie !== undefined ? movie.title : ''}
      </Typography>
      <div className="buttons">
        <ButtonPlay />
        {info()}
      </div>

    </div>
  );
}
