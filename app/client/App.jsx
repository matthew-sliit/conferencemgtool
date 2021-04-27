import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginForm from "./Component/LoginForm";

export default () => {
    return <Router>
        <Switch>
            <Route exact path ="/">
                <LoginForm/>
            </Route>
        </Switch>
    </Router>
}