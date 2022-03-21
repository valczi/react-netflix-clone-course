/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { useAppSelector } from '../../stores/hooks'
import { userInterface } from '../../stores/slices/movieSlice'
import './watching.css'


export default function Watching() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const users = useAppSelector((state: any) => state.movies.users);
    console.log(users);

    return (
        <div className='body'>
            
            {
                users.map((user: userInterface) => {
                    return (
                        <img key={user.id} className='pictureLogin' alt={user.name} src='./logo512.png' />
                    )
                })
            }
              <img key='AddAccount' className='pictureLogin' alt='add account'src='./addAccount.png' />
        </div>
    );
}
