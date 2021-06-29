

import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//components
import WorkshopMain from "./workshopMain.jsx";
import WorkshopSubmission from "./workshopSubmission";
import Contactus from"./contactus";
//sub routes
export default () =>{
    return <Router>
        <Switch>
            <Route exact path={"/workshopmain"}>
               <WorkshopMain/>
            </Route>
            <Route exact path={"/workshopSubmission"}>
                <WorkshopSubmission/>
            </Route>
            <Route exact path={"/contactus"}>
                <Contactus/>
            </Route>

        </Switch>
    </Router>
}
