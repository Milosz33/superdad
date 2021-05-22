// import { slide as Menu } from 'react-burger-menu'
// import  {NavLink} from "react-router-dom";
// import "../styles/Hamburger.scss"
//
//
// import React from "react";
//
//
// export default props => {
//     return (
//         // Pass on our props
//
//         <Menu{...props} >
//             <NavLink exact to={"/"}>Home</NavLink>
//             <NavLink exact to={"/mystory"}>O mnie</NavLink>
//             <NavLink exact to={"/obozy"}>Obozy</NavLink>
//             <NavLink exact to={"/contact"}>Contact</NavLink>
//
//         </Menu>
//
//
//     );
// };


import React from "react";
import { slide as Menu } from "react-burger-menu";
import {NavLink} from "react-router-dom";
import "../styles/Hamburger.scss";


export default props => {
    return (

        <Menu  {...props} >
            <NavLink  className="menu-item" to="/">
                Home
            </NavLink>

            <NavLink className="menu-item" to="/mystory">
                O mnie
            </NavLink>

            <NavLink className="menu-item" to="/obozy">
                Obozy
            </NavLink>

            <NavLink className="menu-item" to="/contact">
                Contact
            </NavLink>
        </Menu>
    )
}



