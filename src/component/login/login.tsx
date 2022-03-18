/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import './login.css';

interface LoginInterface {

}

export default function login({ }: LoginInterface) {
    return (
        <div className='body'>
            <div className="login">
                <h1 className="login__title">Sign In</h1>
                <div className="login__group">
                    <input className="login__group__input" type="text"  />
                    <label className="login__group__label">Email or phone number</label>
                </div>
                <div className="login__group">
                    <input className="login__group__input" type="password" />
                    <label className="login__group__label">Password</label>
                </div>
                <button className="login__sign-in" type="button">Sign In</button>
                <div className="login__secondary-cta"><a className="login__secondary-cta__text" href="#">Remember me</a><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
            </div>
        </div>
    );
}
