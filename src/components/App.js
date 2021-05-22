import "../styles/MainHeader.scss"
import Home from "../pages/Home"
import Obozy from "../pages/Obozy"
import MyStory from "../pages/MyStory";
import Contact from "../pages/Contact";
import Menu from "./Hamburger";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import React from "react";
import MainMenu from "./MainHeader";
import Hello from './Hello';
import NotFound from './NotFound';
import Slideshow from "./Slideshow";
import MainHeader from "./MainHeader";
import Hamburger from "./Hamburger";
import Footer from "./Footer";


function App() {
    return (
        <Router>

            <Menu></Menu>
            <MainHeader></MainHeader>

        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/obozy"} component={Obozy}/>
            <Route exact path={"/contact"} component={Contact}/>
            <Route exact path={"/MyStory"} component={MyStory}/>
            <Route exact path="/" component={Hello} />
            <Route component={NotFound} />
        </Switch>
            <Footer></Footer>
    </Router>

    )
}



export default App;
