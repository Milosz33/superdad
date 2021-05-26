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
        <main>
            <Slideshow></Slideshow>
            <p className="joke-box" >{joke}</p>
            <button className="joke-btn" onClick={fetchJoke}>Try me</button>
            <div className={"banner"}>
                <p> what kind of father you are ??</p>
                <p> are you want to be a Real Hero for your kids ??</p>
            </div>
        </main>

    )
};

export default Home;