import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";
import "./Hamburger.scss";


const Hamburger = () => {
    return (
        <Menu >
            <NavLink  className="menu-item" to="/">
                Home
            </NavLink>

            <NavLink className="menu-item" to="/gallery" >
                Gallery
            </NavLink>

            <NavLink   className="menu-item" to="/obozy">
                Obozy
            </NavLink>

            <NavLink  className="menu-item" to="/contact">
                Contact
            </NavLink>
            <NavLink  className="menu-item" to="/movies">
                Movies
            </NavLink>
        </Menu>
    )
}

export default Hamburger;


