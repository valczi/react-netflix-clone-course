import React from "react";
import Button from '@mui/material/Button';
import { useAppSelector, useAppDispatch } from '../../stores/hooks'
import './button.css'
import { userInterface } from "../../stores/slices/movieSlice";
import { setUser } from '../../stores/slices/movieSlice';
import Tooltip from '@mui/material/Tooltip';

interface RemoveInterface {
    movieId: number
}

export default function ButtonRemove({ movieId }: RemoveInterface) {

    const user: userInterface = useAppSelector((state: any) => state.movies.userLogged);
    const dispatch = useAppDispatch();
    return (
        <div>
            <Tooltip title="Remove from your list">
                <Button
                    onClick={() => {
                        let userBis = JSON.parse(JSON.stringify(user));
                        userBis.selection = userBis.selection.filter((id: number) => id !== movieId);
                        dispatch(setUser(userBis));
                    }}

                    sx={{
                        color: 'rgb(192, 192, 192)',
                        backgroundColor: 'rgb(125, 125, 125,0.5)',
                        border: 'none',
                        p: 1,
                        '&:hover': {
                            border: 'none',
                            backgroundColor: 'rgb(255, 255, 255)',
                            color: 'rgb(0, 0, 0)',
                        }
                    }} className='btnPlay' variant="outlined">
                    <img className='iconPlay ' alt='remove icon' src='icon/icons8-cross-48.png' />
                </Button>
            </Tooltip>
        </div >
    );
}
