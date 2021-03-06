import React from "react";
import Cookies from "js-cookie";
import resources from "../../resource.config";
import {base64toBlob} from "../../api/base64toBlob";
export default class ReviewPapers extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            papers:[],
            server_msg:null
        }
        //rest
        this.getConferencePapersFromServer=this.getConferencePapersFromServer.bind(this);
        this.addReviewedPaperToServer=this.addReviewedPaperToServer.bind(this);
        //operations
        this.onClickAction=this.onClickAction.bind(this);
    }
    async componentDidMount() {
        await this.getConferencePapersFromServer();
    }
    async getConferencePapersFromServer(){
        let papers = [];
        await fetch(resources.proxy("/user/author/default"),{
            method: 'get'
        }).then(r=>r.text()).then(d=>{papers=JSON.parse(d)}).catch(e=>console.log(e));
        //set base64 as the pdf
        for(let i=0;i<papers.length;i++){
            let file_base64 = papers[i].file_base64;
            //console.log(JSON.stringify(papers[i]));
            papers[i].file_base64 = await base64toBlob(file_base64);
        }
        //set state
        this.setState({papers:papers});
    }
    async addReviewedPaperToServer(paper_id, action){
        let server_msg = null;
        await fetch(resources.proxy("/user/review/author/"+paper_id),{
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({action:action})
        }).then(r=>r.text()).then(d=>server_msg=d).catch(e=>console.log(e));
        this.setState({server_msg:server_msg});
        if(server_msg==="success"){
            await this.getConferencePapersFromServer();
        }
    }
    async onClickAction(paper_id,action){
        console.log("paper_id:"+paper_id);
        console.log("action:"+action);
        await this.addReviewedPaperToServer(paper_id,action);
    }
    render() {
        const papers = this.state.papers;
        let records=[];
        //console.log(JSON.stringify(papers));
        papers.map(paper=>{
            let operations = <React.Fragment><button className={"btn btn-success"} onClick={this.onClickAction.bind(this,paper._id,'accept')}>Accept</button>
                <button className={"btn btn-warning mx-1"} onClick={this.onClickAction.bind(this,paper._id,'reject')}>Reject</button></React.Fragment>;
            records.push(<tr key={paper._id}><td>{paper._id}</td><td><a href={paper.file_base64}>{paper.paper_topic}</a></td><td>{paper.paper_authors}</td><td>{paper.status}</td><td>{operations}</td></tr>);
        });
        return <React.Fragment>
            <h4>List Of Conference Papers</h4><br/>
            <table className={"table"}>
                <thead><tr className="table-warning"><th>Paper ID</th><th>Paper</th><th>Authors</th><th>Status</th><th>Operation</th></tr></thead>
                <tbody className="table-primary">
                {records}
                </tbody>
            </table>
        </React.Fragment>
    }
}