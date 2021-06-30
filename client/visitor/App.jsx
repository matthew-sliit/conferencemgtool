import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./Component/home";
import Keynotes from "./Component/keynotes";
import WorkshopMain from "./Component/workshopMain";
import WorkshopSubmission from "./Component/workshopSubmission";
import ContactUs from "./Component/contactus";
import Commitee from "./Component/commitee";
import PaperTopic from "./Component/PaperTopic";
export default () => {
    return <Router>
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route exact path={"/keynotes"}>
                <Keynotes/>
            </Route>
            <Route exact path={"/workshopmain"}>
            <WorkshopMain/>
            </Route>
            <Route exact path={"/contactus"}>
                <ContactUs/>
            </Route>
            <Route exact path={"/commitee"}>
                <Commitee/>
            </Route>
            <Route exact path={"/workshopSubmission"}>
                <WorkshopSubmission/>
            </Route>
            <Route exact path={"/topics"}>
                <PaperTopic/>
            </Route>
            <Route exact path={"/for-attendee"}>
                <AttendenceInstructions/>
            </Route>
            <Route exact path={"/userportal/login"}>
                {()=>{window.location.href="http://localhost:1235/"}}
            </Route>
            <Route exact path={"/userportal/register"}>
                {()=>{window.location.href="http://localhost:1235/sign-up"}}
            </Route>
        </Switch>
    </Router>
}
