import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//components
import EDashboard from "../Editor/EDashboard";
import ModifyConferenceDetails from "./ModifyConferenceDetails";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/editor"}>
                <EDashboard/>
            </Route>
            <Route exact path={"/editor/dashboard"}>
                <EDashboard/>
            </Route>
            <Route exact path={"/editor/contents"}>
                <ModifyConferenceDetails/>
            </Route>
        </Switch>
    </Router>;
}