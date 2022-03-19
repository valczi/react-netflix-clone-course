import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Banner from '../banner/banner';
import { MovieInterface } from "../../entity/movies";

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
    position:'absolute',
    fontFamily:'Arial',
    fontSize: '1.5rem',
    fontWeight: 600,
    top:'30%',
    color: 'white',
    margin: 4,
}


export default function ModalInfo({ movie, open, handleClose }: ModalInterface) {

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

    if (movie !== undefined)
        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}>
                        <Banner movie={movie} height={440} open={true} />
                        <div className='modalContent'>
                            <div className='left'>
                                <Typography sx={title} id="modal-modal-title" component="h1">
                                    {movie.title}
                                </Typography>
                                <Typography sx={styleText}
                                    id="modal-modal-description" >
                                    {movie.overview}
                                </Typography>
                            </div>
                            <div className='right'>
                                {violent()}
                            </div>
                        </div>
                    </Box>
                </Modal>
            </>
        );
        else return(
            <div>

            </div>
        )
}
