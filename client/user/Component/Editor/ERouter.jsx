import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//components
import EDashboard from "../Editor/EDashboard";
import ModifyConferenceDetails from "./ModifyConferenceDetails";
import ShowEditHistory from "./ShowEditHistory";
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
            <Route exact path={"/editor/showedits"}>
                <ShowEditHistory/>
            </Route>
        </Switch>
    </Router>;
}