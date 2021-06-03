import "./MainHeader.scss";
import  {NavLink} from "react-router-dom";
import "../Hamburger/Hamburger.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()
library.add(fab, fas, faCheckSquare, faCoffee);




const MainHeader = () => {
    return (
        <header>
            <NavLink exact to={"/mystory"}><h1>SuperStary</h1></NavLink>
            <ul className="navigation">
                <li key={"house"}><NavLink exact to={"/"}><FontAwesomeIcon icon={["fas", "house-user" ]} size="2x" ></FontAwesomeIcon></NavLink></li>
                <li key={"globe"}><NavLink exact to={"/camps"}><FontAwesomeIcon icon={["fas", "globe-americas"]} size="2x"></FontAwesomeIcon></NavLink></li>
                <li key={"play"}><NavLink exact to={"/movies"}><FontAwesomeIcon icon={["fas", "play"]} size="2x" ></FontAwesomeIcon></NavLink></li>
                <li key={"images"}><NavLink exact to={"/gallery"}><FontAwesomeIcon icon={["fas", "images"]} size="2x" ></FontAwesomeIcon></NavLink></li>
                <li key={"envelope"}><NavLink exact to={"/contact"}><FontAwesomeIcon icon={["fas", "envelope"]} size="2x" ></FontAwesomeIcon></NavLink></li>
            </ul>
        </header>
    )
};

export default MainHeader;



