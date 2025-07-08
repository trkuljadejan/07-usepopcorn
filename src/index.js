import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test() {
    const [movieRating, setMovieRating] = useState(0)

    return (
        <>
            <StarRating maxRating={4} color={"blue"} onSetRating={setMovieRating}></StarRating>
            <div>Movie rating is {movieRating}</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
