import "../styles/MainMenu.scss";
import  {NavLink} from "react-router-dom";
import "../styles/Hamburger.scss";
import React from "react";

const MainHeader = () => {
    return (
        <div className="title-header"> SuperStary </div>
    )
}

const MainMenu = (props) => {

    return (

        <div className="menu-container">
             <MainHeader></MainHeader>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink exact to={"/mystory"}>O mnie</NavLink>
            <NavLink exact to={"/obozy"}>Obozy</NavLink>
            <NavLink exact to={"/contact"}>Contact</NavLink>
        </div>


    );
}

export default MainMenu;



