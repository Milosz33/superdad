import "../styles/MainHeader.scss";
import  {NavLink} from "react-router-dom";
import "../styles/Hamburger.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

library.add(fab, fas, faCheckSquare, faCoffee);




const MainHeader = (props) => {

    return (

        <header >
            <NavLink exact to={"/mystory"}><h1>SuperStary</h1><img  src="images/kite-surf.jpg" height="80" width="120"/></NavLink>

                 <ul className="navigation">
                <li><NavLink exact to={"/"}><FontAwesomeIcon icon={["fas", "house-user" ]} ></FontAwesomeIcon></NavLink></li>
                <li><NavLink exact to={"/obozy"}><FontAwesomeIcon icon={["fas", "globe-americas"]} ></FontAwesomeIcon></NavLink></li>
                <li><NavLink exact to={"/contact"}><FontAwesomeIcon icon={["fas", "envelope"]} ></FontAwesomeIcon></NavLink></li>
        </ul>
            </header>


    )
};

export default MainHeader;



