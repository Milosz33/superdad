import MainMenu from "./MainHeader";
import "../styles/Footer.scss"


import React from 'react';
// import instagram from '../../assets/Instagram.svg';
// import facebook from '../../assets/Facebook.svg';

function Footer() {
    return (
        <footer className='footer'>
            <small className='footer__text'>Copyright by Coders Lab</small>
            <div className='footer__socials'>
                <a href='https://www.facebook.com/'>
                    {/*<img src={facebook} alt='facebook icon' />*/}
                </a>
                <a href='https://www.instagram.com/'>
                    {/*<img src={instagram} alt='instagram icon' />*/}
                </a>
            </div>
        </footer>
    );
}

export default Footer;
