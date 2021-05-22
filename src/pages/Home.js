import Slideshow from '../components/Slideshow';
import "../styles/Home.scss"
import React, { useEffect, useState } from 'react';


const url = 'https://api.chucknorris.io/jokes/random';

const Home = () => {
    const [joke, setJoke] = useState('');
    const fetchJoke = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setJoke(data.value);
    };

    useEffect(() => {
        fetchJoke();
    }, []);
    return (
        <>
            <Slideshow></Slideshow>
            <div className="joke-box" >{joke}</div>
            <button className="joke-btn" onClick={fetchJoke}>Try me</button>
        </>
    );
};

export default Home