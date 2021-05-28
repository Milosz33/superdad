import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";
import "./Hamburger.scss";


const Hamburger = () => {
    return (
        <Menu >
            <NavLink className="menu-item" to="/">
                Home
            </NavLink>

            <NavLink className="menu-item" to="/MyStory">
                About me
            </NavLink>

            <NavLink className="menu-item" to="/gallery" >
                Gallery
            </NavLink>

            <NavLink   className="menu-item" to="/camps">
                Camps
            </NavLink>

            <NavLink  className="menu-item" to="/movies">
                Movies
            </NavLink>

            <NavLink  className="menu-item" to="/contact">
                Contact
            </NavLink>
        </Menu>
    )
}

export default Hamburger;



