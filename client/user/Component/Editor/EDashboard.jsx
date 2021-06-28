import React from "react";
import {SemiCircleChart} from "../../api/semi-circle-chart";
import {getAngle} from "../SemiChartFunctions/GetAngle";
import resources from "../../resource.config";
import Cookies from "js-cookie";

export default class EDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null)
        }
    }
    async componentDidMount() {
        //setup chart
        let chart = new SemiCircleChart();
        chart.setFillColor("green");
        chart.setFillerMillis(30);
        chart.setBorderColor("#D6EAF8");
        chart.setTriColor("#5DADE2","#45B39D","#58D68D");

        let histories = await this.fetchHistoriesFromServer();
        let acceptedEdits = 0, rejectedEdits = 0, totalSuggested = 0, remaining = 0;
        histories.map(history=>{
            history.changes.map(change =>{
                totalSuggested++;
                if(change.approval==="APPROVED"){
                    acceptedEdits++;
                }else if(change.approval==="REJECTED"){
                    rejectedEdits++;
                }else{
                    remaining++;
                }
            });
        });
        let acceptedEditAngle = getAngle(acceptedEdits,totalSuggested);
        let rejectedEditAngle = getAngle(rejectedEdits,totalSuggested);
        let remainEditAngle = getAngle(remaining,totalSuggested);

        chart.draw(acceptedEditAngle,"Approved",acceptedEdits,"accept-edit-chart");
        chart.draw(rejectedEditAngle,"Rejected",rejectedEdits,"reject-edit-chart");
        chart.draw(remainEditAngle,"Remaining",remaining,"remain-edit-chart");

    }
    async fetchHistoriesFromServer(){
        const userid = this.state.userid;
        let history = [];
        await fetch(resources.proxy("/editor/history/"+userid),{
            method: 'get'
        }).then(r=>r.text()).then(d=>history=JSON.parse(d)).catch(e=>console.log(e));
        return history;
    }
    render() {
        return <React.Fragment>
            <div>
                <b>Edit History</b><br/><br/>
                <div style={{display: "table-cell"}}>
                    <div id="accept-edit-chart"></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="reject-edit-chart" style={{position: "relative", left: "20px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="remain-edit-chart" style={{position: "relative", left: "40px"}}></div>
                </div>
            </div>
        </React.Fragment>;
    }
}