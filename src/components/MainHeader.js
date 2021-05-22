import "../styles/MainHeader.scss";
import  {NavLink} from "react-router-dom";
import "../styles/Hamburger.scss";
import React from "react";
import Footer from "./Footer";



const MainHeader = (props) => {

    return (
<>
        <header >
             <h1>SuperStary</h1>
            <nav>
            <li><NavLink exact to={"/"}>Home</NavLink></li>
        <li><NavLink exact to={"/mystory"}>O mnie</NavLink></li>
        <li><NavLink exact to={"/obozy"}>Obozy</NavLink></li>
        <li><NavLink exact to={"/contact"}>Contact</NavLink></li>
        </nav>
            </header>
    <Footer></Footer>

</>
    )
};

export default MainHeader;



