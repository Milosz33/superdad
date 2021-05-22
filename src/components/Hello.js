import {NavLink} from "react-router-dom";
import React from "react";

const Hello = () => (
    <div>
        <p>Click to route to "/oops" which isn't a registered route:</p>
        <NavLink to="/oops">
            Let's go
        </NavLink>
    </div>
);

export default Hello;