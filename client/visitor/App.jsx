import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <p>Home page</p>
            </Route>
        </Switch>
    </Router>
}