import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./Component/home";
import Keynotes from "./Component/keynotes";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route exact path={"/keynotes"}>
                <Keynotes/>
            </Route>
        </Switch>
    </Router>
}
