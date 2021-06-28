import React from "react";
import {SemiCircleChart} from "../../api/semi-circle-chart";
//semi chart functions
import getAuthorCount from "../SemiChartFunctions/GetAuthorCount";
import getEditorCount from "../SemiChartFunctions/GetEditorCount";
import getReviewerCount from "../SemiChartFunctions/GetReviewerCount";
import getConferenceValues from "../SemiChartFunctions/GetConferenceValues";
import getWorkshopPaperCount from "../SemiChartFunctions/GetWorkshopPaperCount";
import getConferencePaperCount from "../SemiChartFunctions/GetConferencePaperCount";
import {getAngle} from "../SemiChartFunctions/GetAngle";
import getAttendeeCount from "../SemiChartFunctions/GetAttendeeCount";
import getAllUserCount from "../SemiChartFunctions/GetAllUserCount";

export default class ADashboard extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        //setup chart
        let chart = new SemiCircleChart();
        chart.setFillColor("green");
        chart.setFillerMillis(30);
        chart.setBorderColor("#D6EAF8");
        chart.setTriColor("#5DADE2","#F5B041","#EC7063");
        //get values from server
        let papers = await getConferencePaperCount();
        let papersExpected = await getConferenceValues();
        let workshops = await getWorkshopPaperCount();
        let attendees = await getAttendeeCount();
        let users = await getAllUserCount();
        //calculate angles
        let paperAngle = getAngle(papers,papersExpected);
        let workshopAngle = getAngle(workshops,10);
        let attendeeAngle = getAngle(attendees,500);
        let userAngle = getAngle(users,3000);
        //console.log("pa:"+paperAngle);
        //append to chart
        chart.draw(workshopAngle, "Workshops", 10, "ws-chart");
        chart.draw(paperAngle,"Conference Papers",500,"author-chart");
        chart.draw(attendeeAngle,"Attendees",500,"attendee-chart");
        chart.draw(userAngle,"Users",3000,"user-chart");
        //console.log("a:"+authors+" e:"+editors+" r:"+reviewers+" w:"+workshops +" cp:"+papers+ "exp:"+papersExpected);
    }
    render() {
        return <React.Fragment>
            <div>
                <b>Dashboard Overview</b><br/><br/>
                <div style={{display: "table-cell"}}>
                    <div id="ws-chart"></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="author-chart" style={{position: "relative", left: "20px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="attendee-chart" style={{position: "relative", left: "40px"}}></div>
                </div>
                <br/>
                <div style={{display: "table-cell"}}>
                    <div id="user-chart" style={{position: "relative", left: "10px", top:"-100px"}}></div>
                </div>
            </div>
        </React.Fragment>;
    }
}