import React from 'react';
import WorkshopListItem from "./WorkshopListItem";
import resources from "../resource.config";
import {base64toBlob} from "../../user/api/base64toBlob";
export default class WorkshopMain extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            workshops:[],
            submissionDeadline:null
        }
    }
    async componentDidMount() {
        let papers = [], copy = [];
        await fetch(resources.proxy("/user/workshop/default"),{
            method: 'get'
        }).then(r=>r.text()).then(d=>{papers=JSON.parse(d)}).catch(e=>console.log(e));
        //set base64 as the pdf
        for(let i=0;i<papers.length;i++){
            if(papers[i].status==="accept"){
                let file_base64 = papers[i].file_base64;
                //console.log(JSON.stringify(file_base64));
                papers[i].file_base64 = await base64toBlob(file_base64);
                copy.push(papers[i]);
            }
        }
        //set state
        this.setState({workshops:copy});
        //submissions
        let conference = null;
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>conference=JSON.parse(d)).catch(e=>console.log(e));
        this.setState({submissionDeadline:conference.submissionDeadline});
    }
    render() {
        const workshops = this.state.workshops;
        const submissionDeadline = this.state.submissionDeadline;
        return <React.Fragment>
            <div id="content" className="position-relative">
                <div className="card">
                    <div className="card-body">
                        <div className="section-header">
                            <h2 class="text-primary">Workshops</h2>
                        </div>
                        <p>Following is the list of workshops, which will be organized as a part of ICAF 2021. </p>
                        <p><b>Registration Deadline: </b>{submissionDeadline!==null?new Date(submissionDeadline).toString():" To be informed"}</p>
                        {workshops.map(workshop=>{
                            return <WorkshopListItem workshop={workshop}/>
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}



