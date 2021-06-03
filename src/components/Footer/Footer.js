import "./Footer.scss"
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer =()=> {
    return (
        <footer className='footer'>
            <p className='footer__text'>Copyright by SuperStary</p>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={["fab", "facebook" ]} size="2x" ></FontAwesomeIcon>
                </a>
                <a href='https://www.instagram.com/'>
                    <FontAwesomeIcon icon={["fab", "instagram" ]} size="2x" ></FontAwesomeIcon>
                </a>
                <a href='https://www.twitter.com/'>
                    <FontAwesomeIcon icon={["fab", "twitter" ]} size="2x" ></FontAwesomeIcon>
                </a>
                <a href='https://www.youtube.com/channel/UCkqpKshAIWaGiEia1zdQ6bA'>
                    <FontAwesomeIcon icon={["fab", "youtube"]}></FontAwesomeIcon>
                </a>
                <a href='https://superstary.herokuapp.com/'>
                    www.superstary.herokuapp.com
                </a>

            </div>
        </footer>
    );
}

export default Footer;
