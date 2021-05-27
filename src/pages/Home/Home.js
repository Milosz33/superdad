
import "./Home.scss"
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
            <p className="joke" >{joke}</p>
            <button className="joke-btn" onClick={fetchJoke}>Try me</button>
            <div className={"banner"}>
                <p>What kind of father you are ??</p>
                <p>Are you want to be a Real Hero for your kids ??</p>
                <p>You are in the right place!!</p>
            </div>
        </main>
    )
};

export default Home;