import React from "react";
import "../../api/semi-circle-chart";
import {SemiCircleChart} from "../../api/semi-circle-chart";
export default class ADashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            mounted:false
        }
    }
    componentDidMount() {
        let chart = new SemiCircleChart();
        chart.setFillColor("green");
        chart.setFillerMillis(30);
        chart.setBorderColor("#D6EAF8");
        chart.draw(50, "Workshops", 0, "ws-chart");
        chart.draw(180,"Authors","1000","author-chart");
        chart.draw(30,"Attendees",300,"attendee-chart");
    }
    render() {
        const mounted = this.state.mounted;
        return <React.Fragment>
            <div>
                <b>User Overview</b><br/><br/>
                <div style={{display: "table-cell"}}>
                    <div id="ws-chart"></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="author-chart" style={{position: "relative", left: "20px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="attendee-chart" style={{position: "relative", left: "40px"}}></div>
                </div>
            </div>
        </React.Fragment>;
    }
}