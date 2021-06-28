import React from "react";
import Cookies from "js-cookie";
import resources from "../../resource.config";
import {base64toBlob} from "../../api/base64toBlob";

export default class ConferenceResources extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            papers:[],
            papersFiltered:[],
            workshops:[],
            workshopsFiltered:[]
        }
        this.fetchAllPapers=this.fetchAllPapers.bind(this);
        this.filterPapers=this.filterPapers.bind(this);
        this.clickDownload=this.clickDownload.bind(this);
    }
    async componentDidMount() {
        await this.fetchAllPapers();
    }
    async fetchAllPapers(){
        let papers = [], workshops = [];
        await fetch(resources.proxy("/user/author/default"),{
            method:'get'
        }).then(r=>r.text()).then(d=>papers=JSON.parse(d)).catch(e=>console.log(e));
        //set base64 as the pdf
        for(let i=0;i<papers.length;i++){
            let file_base64 = papers[i].file_base64;
            //console.log(JSON.stringify(papers[i]));
            papers[i].file_base64 = await base64toBlob(file_base64);
        }
        this.setState({papers:papers});
        await fetch(resources.proxy("/user/workshop/default"),{
            method:'get'
        }).then(r=>r.text()).then(d=>workshops=JSON.parse(d)).catch(e=>console.log(e));
        //set base64 as the pdf
        for(let i=0;i<workshops.length;i++){
            let file_base64 = workshops[i].file_base64;
            //console.log(JSON.stringify(papers[i]));
            workshops[i].file_base64 = await base64toBlob(file_base64);
        }
        this.setState({workshops:workshops});
        this.filterPapers('all');
    }
    filterPapers(type){
        //console.log(this.ws_filter.value);
        if(type==="author"){
            const selected = this.paper_filter.value;
            let papersFiltered = [];
            const papers = this.state.papers;
            //console.log("selected:"+selected + " on "+type);
            if(selected==="All"){
                papersFiltered = [...papers];
            }else {
                papers.map(paper => {
                    if (paper.status === selected) {
                        papersFiltered.push(paper);
                    }
                });
            }
            this.setState({papersFiltered:papersFiltered});
        }else if(type==="ws"){
            const selected = this.ws_filter.value;
            //console.log("selected:"+selected);
            let wsFiltered = [];
            const workshops = this.state.workshops;
            if(selected==="All"){
                wsFiltered = [...workshops];
            }else {
                console.log("selected:"+selected);
                workshops.map(workshop => {
                    if (workshop.status === selected) {
                        wsFiltered.push(workshop);
                    }
                });
            }
            this.setState({workshopsFiltered:wsFiltered});
        }else {
            const papers = this.state.papers;
            const workshops = this.state.workshops;
            let papersFiltered = [...papers];
            let wsFiltered = [...workshops];
            this.setState({papersFiltered:papersFiltered});
            this.setState({workshopsFiltered:wsFiltered});
        }
    }
    clickDownload(type){
        let files = [];
        if(type==="author"){
            const papers = this.state.papersFiltered;
            for(let i=0;i<papers.length;i++){
                window.open(papers[i].file_base64);
                //files.push(papers[i].file_base64);
            }
        }else if(type==="ws"){
            const ws = this.state.workshopsFiltered;
            for(let i=0;i<ws.length;i++){
                files.push(ws[i].file_base64);
            }
            //window.open(files);
        }
    }
    render() {
        const papers = this.state.papersFiltered;
        const workshops = this.state.workshopsFiltered;
        if(papers.length===0&&workshops.length===0){
            return <p></p>;
        }

        let showWorkshops = [];
        for(let i=0;i<workshops.length;i++){
            showWorkshops.push(<React.Fragment><a href={workshops[i].file_base64} target="_blank">{"Workshop "+(i+1)+" - "+workshops[i].paper_topic}</a><br/></React.Fragment>);
        }
        let showConferencePapers = [];
        for(let i=0;i<papers.length;i++){
            showConferencePapers.push(<React.Fragment><a href={papers[i].file_base64} target="_blank">{"Conference Paper "+(i+1)+" - "+papers[i].paper_topic}</a><br/></React.Fragment>);
        }
        //console.log(JSON.stringify(showConferencePapers));
        //console.log(JSON.stringify(showWorkshops));
        return <React.Fragment>
            <h6>Workshops</h6>
            <button className={"btn btn-outline-success"} onClick={this.clickDownload.bind(this,'ws')}>Download</button>
            <select ref={(ref) => {this.ws_filter = ref}} onChange={this.filterPapers.bind(this,'ws')}>
                <option>All</option>
                <option value={"accept"}>Accepted</option>
                <option value={"reject"}>Rejected</option>
            </select>
            <div>
                {showWorkshops}
            </div>
            <p/>
            <h6>Papers</h6>
            <button className={"btn btn-outline-success"} onClick={this.clickDownload.bind(this,'author')}>Download</button>
            <select ref={(ref) => {this.paper_filter = ref}} onChange={this.filterPapers.bind(this,'author')}>
                <option>All</option>
                <option value={"accept"}>Accepted</option>
                <option value={"reject"}>Rejected</option>
            </select>
            <div>
                {showConferencePapers}
            </div>
        </React.Fragment>;
    }
}