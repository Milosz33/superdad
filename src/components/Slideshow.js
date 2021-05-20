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
                        {/*<span>Slide 1</span>*/}
                    </div>
                </div>
                <div className="each-slide2">
                    <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        {/*<span>Slide 2</span>*/}
                    </div>
                </div>
                <div className="each-slide3">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        {/*<span>Slide 3</span>*/}
                    </div>
                </div>
                <div className="each-slide4">
                    <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
                        {/*<span>Slide 4</span>*/}
                    </div>
                </div>
                <div className="each-slide5">
                    <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
                        {/*<span>Slide 5</span>*/}
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;