/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom"
import TextField from '@mui/material/TextField';


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
                        InputProps={{ disableUnderline: true }} sx={inputStyle} id="filled-basic" label="Email ou E-mail" variant="filled" />
                </div>
                <div className="login__group">
                    <TextField inputRef={Password} key={'Password'} InputLabelProps={{
                        style: { color: '#fff' },
                    }} InputProps={{ disableUnderline: true }} sx={inputStyle} id="filled-basic" type="password" label="Password" variant="filled" />
                </div>
                <button onClick={() => {
                    navigate('/whos_watching')
                }} className="login__sign-in" type="button">Sign In</button>
                <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#">Remember me</a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
            </div>
        </div>
    );
}
