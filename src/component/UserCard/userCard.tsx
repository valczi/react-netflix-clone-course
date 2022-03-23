import React from "react";
import { userInterface } from "../../stores/slices/movieSlice";
import { useAppDispatch } from '../../stores/hooks'
import { setLogged , setUser} from '../../stores/slices/movieSlice';
import { useNavigate } from "react-router-dom"
import './userCard.css'

interface UserCardInterface {
    user: userInterface,
}
function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

export default function UserCard({ user }: UserCardInterface) {
    const dispatch= useAppDispatch();
    const navigate=useNavigate();
    const imgLink = 'icon/'+user.profilePicture;
    console.log(imgLink);

    const handleClick=()=>{
        dispatch(setLogged(true));
        dispatch(setUser(user));
        navigate('/movies');
    }

    return (
        <div onClick={handleClick} key={user.id} className='box'>
            <div >
                <img className='img ' alt='avatar netflix' src={imgLink}></img>
            </div >
            <div className="name">
                {user.name}
            </div>
        </div>
    );
}
