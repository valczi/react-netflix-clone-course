/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useAppSelector } from '../../stores/hooks'
import UserCard from '../UserCard/userCard';
import { userInterface } from '../../stores/slices/movieSlice'
import './watching.css'


export default function Watching() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const users = useAppSelector((state: any) => state.movies.users);

    return (
        <div className='users'>
            {
                users.map((user: userInterface) => {
                    return (
                        <UserCard key={user.id} user={user} />
                    )
                })
            }
        </div>
    );
}
