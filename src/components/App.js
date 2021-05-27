import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import NotFound from './NotFound/NotFound';
import MainHeader from "./MainHeader/MainHeader";
import "./MainHeader/MainHeader.scss"
import Home from "../pages/Home/Home"
import Obozy from "../pages/Camps/Obozy"
import MyStory from "../pages/MyStory/MyStory";
import Contact from "../pages/Contact/Contact";
import Menu from "./Hamburger/Hamburger";
import Gallery from "../pages/Gallery/Gallery";
import Movies from "../pages/Movies/Movies";
import Footer from "./Footer/Footer";

library.add(fab, faCheckSquare, faCoffee);

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
            <Route exact path={"/movies"} component={Movies}/>
            <Route exact path={"/gallery"} component={Gallery}/>
            <Route component={NotFound} />
        </Switch>
            <Footer></Footer>
    </Router>
    )
}

export default App;
