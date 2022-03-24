/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'

export default function Login() {
    let navigate = useNavigate();
    let inputStyle = {
        background: 'grey',
        width: '100%',
        marginTop: 1,
        borderRadius: 1,
        border: 'none',
        disableUnderline: true
    }


    const handleSubmit = () => {
        if (Login.current?.value !== '' && Password.current?.value !== '') {
            navigate('/whos_watching');
        }
        else
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please complete the login form',
                background: '#0a0909',
            })
    }
    const Login = React.createRef<HTMLInputElement>();
    const Password = React.createRef<HTMLInputElement>();

    return (
        <div className='body'>
            <div className="login">
                <h1 className="login__title">Sign In</h1>
                <div className="login__group">
                    <TextField inputRef={Login} key={'LoginFirst'} InputLabelProps={{
                        style: { color: '#fff' },
                    }}
                        InputProps={{ disableUnderline: true }} sx={inputStyle} label="Email ou E-mail" variant="filled" />
                </div>
                <div className="login__group">
                    <TextField inputRef={Password} key={'Password'} InputLabelProps={{
                        style: { color: '#fff' },
                    }} InputProps={{ disableUnderline: true }} sx={inputStyle} type="password" label="Password" variant="filled" />
                </div>
                <button onClick={handleSubmit} className="login__sign-in" type="button">Sign In</button>
                <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#">Remember me</a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
            </div>
        </div>
    );
}
