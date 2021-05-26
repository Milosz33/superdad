
import React from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Hello from './Hello';
import NotFound from './NotFound';
import MainHeader from "./MainHeader";
import "../styles/MainHeader.scss"
import Home from "../pages/Home"
import Obozy from "../pages/Obozy"
import MyStory from "../pages/MyStory";
import Contact from "../pages/Contact";
import Menu from "./Hamburger";
import Gallery from "../pages/Gallery";
import Movies from "../pages/Movies";

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
            <Route exact path="/" component={Hello} />
            <Route component={NotFound} />
        </Switch>
    </Router>

    )
}



export default App;
