import React from "react";
import {SemiCircleChart} from "../../api/semi-circle-chart";
import getConferencePaperCount from "../SemiChartFunctions/GetConferencePaperCount";
import getConferenceValues from "../SemiChartFunctions/GetConferenceValues";
import getWorkshopPaperCount from "../SemiChartFunctions/GetWorkshopPaperCount";
import resources from "../../resource.config";
import {base64toBlob} from "../../api/base64toBlob";
import {getAngle} from "../SemiChartFunctions/GetAngle";

export default class RDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            papers:[],workshops:[]
        }
        this.getPapersFromServer=this.getPapersFromServer.bind(this);

    }
    async componentDidMount() {
        //setup chart
        let chart = new SemiCircleChart();
        chart.setFillColor("green");
        chart.setFillerMillis(30);
        chart.setBorderColor("#D6EAF8");
        chart.setTriColor("#5DADE2","#45B39D","#58D68D");
        //get values from server for semi-chart
        const papers = await this.getPapersFromServer("author","papers");
        const workshops = await this.getPapersFromServer("workshop","workshops");
        console.log(JSON.stringify(papers));
        console.log(JSON.stringify(workshops));
        let approvedConferencePapers = 0, rejectedConferencePapers = 0, remainingConferencePapers = 0;
        papers.map(paper=>{
            if(paper.status==="accept"){
                approvedConferencePapers++;
            }else if(paper.status==="reject"){
                rejectedConferencePapers++;
            }else{
                remainingConferencePapers++;
            }
        });
        //Conference Papers
        let approvedConferencePaperAngle = getAngle(approvedConferencePapers,papers.length);
        let rejectedConferencePaperAngle = getAngle(rejectedConferencePapers,papers.length);
        let remainingConferencePaperAngle = getAngle(remainingConferencePapers,papers.length);
        chart.draw(approvedConferencePaperAngle,"Approved",approvedConferencePapers,"approved-paper-chart");
        chart.draw(rejectedConferencePaperAngle,"Rejected",rejectedConferencePapers,"rejected-paper-chart");
        chart.draw(remainingConferencePaperAngle,"Remaining",remainingConferencePapers,"remain-paper-chart");
        //Ws
        let approvedWS = 0, rejectedWS = 0, remainWS = 0;
        workshops.map(workshop=>{
            if(workshop.status==="accept"){
                approvedWS++;
            }else if(workshop.status==="reject"){
                rejectedWS++;
            }else{
                remainWS++;
            }
        });
        //{{position: "relative", left: "0px", top:"-150px"}}
        document.getElementById("workp_id").style.position = "relative";
        document.getElementById("workp_id").style.left = "0px";
        document.getElementById("workp_id").style.top = "-150px";
        let approvedAngle = getAngle(approvedWS,workshops.length);
        let rejectedAngle = getAngle(rejectedWS,workshops.length);
        let remainAngle = getAngle(remainWS,workshops.length);
        chart.draw(approvedAngle,"Approved",approvedWS,"approved-ws-chart");
        chart.draw(rejectedAngle,"Rejected",rejectedWS,"rejected-ws-chart");
        chart.draw(remainAngle,"Remaining",remainWS,"remain-ws-chart");
    }
    async getPapersFromServer(type, state){
        let papers = [];
        await fetch(resources.proxy("/user/"+type+"/default"),{
            method: 'get'
        }).then(r=>r.text()).then(d=>{papers=JSON.parse(d)}).catch(e=>console.log(e));
        //set base64 as the pdf
        for(let i=0;i<papers.length;i++){
            papers[i].file_base64 = "";
        }
        //set state
        return papers;
    }
    render() {
        return <React.Fragment>
            <div>
                <b>Conference Papers</b><br/><br/>
                <div style={{display: "table-cell"}}>
                    <div id="approved-paper-chart"></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="rejected-paper-chart" style={{position: "relative", left: "20px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="remain-paper-chart" style={{position: "relative", left: "40px"}}></div>
                </div>
                <br/><div id={"workp_id"}><b>Workshop Papers</b></div>
                <div style={{display: "table-cell"}}>
                    <div id="approved-ws-chart" style={{position: "relative", left: "0px", top:"-118px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="rejected-ws-chart" style={{position: "relative", left: "20px", top:"-118px"}}></div>
                </div>
                <div style={{display: "table-cell"}}>
                    <div id="remain-ws-chart" style={{position: "relative", left: "40px", top:"-118px"}}></div>
                </div>
            </div>
        </React.Fragment>;
    }
}