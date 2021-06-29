import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import RDashboard from "./RDashboard";
import ConferencePapers from "./ConferencePapers";
import WorkshopPapers from "./WorkshopPapers";

export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/reviewer"}>
                <RDashboard/>
            </Route>
            <Route exact path={"/rev/dashboard"}>
                <RDashboard/>
            </Route>
            <Route exact path={"/rev/papers"}>
                <ConferencePapers/>
            </Route>
            <Route exact path={"/rev/proposals"}>
                <WorkshopPapers/>
            </Route>
        </Switch>
    </Router>;
}