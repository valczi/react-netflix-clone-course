import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Banner from '../banner/banner';
import { CategoryInterface, ListInterface, MovieInterface } from "../../entity/movies";
import { useAppSelector } from '../../stores/hooks'
import MovieScroll from "../../component/MovieScroll/MovieScroll";
import './modalMovie.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    borderRadius: '1%',
    backgroundColor: ' #0a0909',
};

interface ModalInterface {
    movie: MovieInterface
    open: boolean
    handleClose: () => void;
}

const styleText = {
    color: 'white',
    margin: 2,
}

const title = {
    position: 'absolute',
    fontFamily: 'Arial',
    fontSize: '1.5rem',
    fontWeight: 600,
    top: '30%',
    color: 'white',
    margin: 4,
}


let sortByGenres = (movies: MovieInterface[], movieSelected: MovieInterface): ListInterface => {
    let list: ListInterface = {
        category: {
            id: -1,
            name: "Du même genre : ",
        },
        movies: [],
    };
    movies.forEach((movie: MovieInterface) => {
        let isIn = false;
        if (movieSelected.id != movie.id)
            movie.genre_ids.forEach((id: number) => {
                if (movieSelected.genre_ids.includes(id)) {
                    isIn = true;
                }
            });
        if (isIn) {
            list.movies.push(movie);
        }
    });
    return list;
}





export default function ModalInfo({ movie, open, handleClose }: ModalInterface) {
    const genres = useAppSelector((state: any) => state.movies.genres);
    const movies = useAppSelector((state: any) => state.movies.films);

    let violent = () => {
        let violent = 'violent'
        if (!movie.adult)
            violent = 'non violent'
        return (
            <div className='desc'>
                ce film est :
                <Typography sx={{
                    color: 'white',
                    marginLeft: 1,
                }}
                    id="modal-modal-description" >
                    {violent}
                </Typography>
            </div>
        )
    }

    let getGenres = () => {
        let genresString='';
        genres.map((genre: CategoryInterface )=>{
            if(movie.genre_ids.includes(genre.id))
                genresString+=' '+genre.name;
        });
        return (
            <div className='desc'>
                genres :
                <Typography sx={{
                    color: 'white',
                    marginLeft: 1,
                    paddingLeft:1,
                    display:'inline'
                }}
                    id="modal-modal-description" >
                    {genresString}
                </Typography>
            </div>
        )
    }

    if (movie !== undefined)
        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Banner movie={movie} height={440} open={true} />
                        <div className="modalContent">
                            <div className='modalText'>
                                <div className='left'>
                                    <Typography sx={title} id="modal-modal-title" component="h1">
                                        {movie.title}
                                    </Typography>
                                    <Typography sx={styleText}
                                        id="modal-modal-description" >
                                        {movie.overview !== '' ? movie.overview : 'pas de résumé'}
                                    </Typography>
                                    
                                </div>
                                <div className='right'>
                                    {violent()}
                                    {getGenres()}
                                </div>
                            </div>
                            <div className='sameGenre'>
                                <MovieScroll list={sortByGenres(movies, movie)} />
                            </div>
                        </div>
                    </Box>
                </Modal>
            </>
        );
    else return (
        <div>

        </div>
    )
}



