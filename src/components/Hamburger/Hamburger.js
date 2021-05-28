import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";
import "./Hamburger.scss";


const Hamburger = (props) => {
    return (
        <Menu {...props}>
            <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/MyStory">
                About me
            </a>

            <a className="menu-item" href="/gallery" >
                Gallery
            </a>

            <a   className="menu-item" href="/camps">
                Camps
            </a>

            <a  className="menu-item" href="/movies">
                Movies
            </a>

            <a  className="menu-item" href="/contact">
                Contact
            </a>
        </Menu>
    )
}

export default Hamburger;



