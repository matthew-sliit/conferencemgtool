import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ADashboard from "../Admin/ADashboard";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <ADashboard/>
            </Route>
        </Switch>
    </Router>;
}