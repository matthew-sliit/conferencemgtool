import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import WorkshopMain from "./Component/workshopMain";
import WorkshopSubmission from "./Component/workshopSubmission";
import ContactUs from "./Component/contactus";

export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <p>Home page</p>
            </Route>
            <Route exact path={"/workshopmain"}>
            <WorkshopMain/>
            </Route>
            <Route exact path={"/contactus"}>
                <ContactUs/>
            </Route>
            <Route exact path={"/workshopSubmission"}>
            <WorkshopSubmission/>
            </Route>

        </Switch>
    </Router>
}