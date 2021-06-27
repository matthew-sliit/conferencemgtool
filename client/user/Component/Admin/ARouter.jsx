import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ADashboard from "../Admin/ADashboard";
import AddNewUsers from "./AddNewUsers";
import ConferenceDetails from "./ConferenceDetails";
import UserAccountControl from "./UserAccountControl";
import ConferenceResources from "./ConferenceResources";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/admin"}>
                <ADashboard/>
            </Route>
            <Route exact path={"/admin/dashboard"}>
                <ADashboard/>
            </Route>
            <Route exact path={"/admin/conference"}>
                <ConferenceDetails/>
            </Route>
            <Route exact path={"/admin/res"}>
                <ConferenceResources/>
            </Route>
            <Route exact path={"/admin/uam"}>
                <AddNewUsers/>
            </Route>
            <Route exact path={"/admin/uac"}>
                <UserAccountControl/>
            </Route>
        </Switch>
    </Router>;
}