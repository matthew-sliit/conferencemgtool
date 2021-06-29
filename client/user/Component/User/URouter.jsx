import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UDashboard from "./UDashboard";
import AddPayment from "./AddPayment";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/user"}>
                <UDashboard/>
            </Route>
            <Route exact path={"/user/dashboard"}>
                <UDashboard/>
            </Route>
            <Route exact path={"/user/payment/:id"}>
                <AddPayment/>
            </Route>
        </Switch>
    </Router>;
}