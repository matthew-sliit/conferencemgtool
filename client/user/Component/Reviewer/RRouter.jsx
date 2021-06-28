import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//components
import RDashboard from "./RDashboard";
import ReviewWorkshops from "./ReviewWorkshops";
import ReviewPapers from "./ReviewPapers";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/rev"}>
                <RDashboard/>
            </Route>
            <Route exact path={"/rev/proposals"}>
                <ReviewWorkshops/>
            </Route>
            <Route exact path={"/rev/papers"}>
                <ReviewPapers/>
            </Route>
        </Switch>
    </Router>;
}