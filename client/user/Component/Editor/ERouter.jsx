import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import EDashboard from "../Editor/EDashboard";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <EDashboard/>
            </Route>
        </Switch>
    </Router>;
}