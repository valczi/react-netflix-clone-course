/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from './stores/hooks'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// https://api.themoviedb.org/3/movie/popular?api_key=4835650996ff4b326fc5dff8cf97f766&language=fr-FR&page=1

export default function App() {

    const value = useAppSelector((state: any) => state.movies.value);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={
                        <About />
                    } />
                    <Route path="/" element={
                        <Home />
                    } />
                    <Route path="/users" element={
                        <Users />
                    } />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}


