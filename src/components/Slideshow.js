import 'react-slideshow-image/dist/styles.css'
import '../styles/Slideshow.scss'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
    'public/images/slide_2.jpg',
    'public/images/slide_3.jpg',
    'public/images/slide_4.jpg',
    'public/images/slide_5.jpg',
    'public/images/slide_1.jpg'
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                <div className="each-slide1">
                    <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                    </div>
                </div>
                <div className="each-slide2">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                    </div>
                </div>
                <div className="each-slide3">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                    </div>
                </div>
                <div className="each-slide4">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                    </div>
                </div>
                <div className="each-slide5">
                    <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;