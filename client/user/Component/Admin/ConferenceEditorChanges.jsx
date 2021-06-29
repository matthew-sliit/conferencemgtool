import React from "react";
import resources from "../../resource.config";
import Cookies from "js-cookie";
export default class ConferenceEditorChanges extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            history:[], //complex object
            server_msg:null
        }
        this.fetchConferenceEditHistories=this.fetchConferenceEditHistories.bind(this);
        this.onClickApplyAction=this.onClickApplyAction.bind(this);
    }
    async componentDidMount() {
        await this.fetchConferenceEditHistories();
    }
    async fetchConferenceEditHistories(){
        let history = [];
        await fetch(resources.proxy("/editor/history/default"),{
            method:'get'
        }).then(r=>r.text()).then(d=>history=JSON.parse(d)).catch(e=>console.log(e));
        this.setState({history:history.reverse()});
    }
    async onClickApplyAction(edit_id,field,action,newValue,oldValue){
        console.log("EditId:"+edit_id + " field:"+field+" Action:"+action);
        let result;
        await fetch(resources.proxy("/editor/apply-edit/"+edit_id),{
            method:'put',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({"field":field,"action":action,"new":newValue,"old":oldValue})
        }).then(r=>r.text()).then(d=>result=d).catch(e=>console.log(e));
        if(result==="success"){
            await this.fetchConferenceEditHistories();
        }
    }
    render() {
        const history = this.state.history;
        if(history.length===0){
            return <p>No edits to conference done yet!</p>
        }
        let records = [];
        //console.log(JSON.stringify(history[0]));
        for(let i=0;i<history.length;i++){
            let changes = history[i].changes;
            records.push(<tr><td rowSpan={changes.length} style={{verticalAlign:"middle"}}>{history[i]._id}</td>
                <td>{changes[0].field}</td>
                <td>{JSON.stringify(changes[0].old)}</td>
                <td>{JSON.stringify(changes[0].new)}</td>
                <td>{changes[0].approval}</td>
            <td><button className={"btn btn-success"} onClick={this.onClickApplyAction.bind(this, history[i]._id,changes[0].field,'approve',changes[0].new,changes[0].old)}>Approve</button>
                <button className={"btn btn-danger mx-1"} onClick={this.onClickApplyAction.bind(this, history[i]._id,changes[0].field,'reject',changes[0].new,changes[0].old)}>Reject</button></td></tr>);
            for(let j=1;j<changes.length;j++){
                records.push(<tr> <td>{changes[j].field}</td>
                    <td>{JSON.stringify(changes[j].old)}</td>
                    <td>{JSON.stringify(changes[j].new)}</td>
                    <td>{changes[j].approval}</td>
                <td><button className={"btn btn-success"} onClick={this.onClickApplyAction.bind(this, history[i]._id,changes[j].field,'approve',changes[j].new,changes[j].old)}>Approve</button>
                    <button className={"btn btn-danger mx-1"} onClick={this.onClickApplyAction.bind(this, history[i]._id,changes[j].field,'reject',changes[j].new,changes[j].old)}>Reject</button></td></tr>);
            }
        }
        return <React.Fragment>
            <h5>Conference Edit History</h5>
            <table className={"table"}>
                <thead><tr><th>username</th><th>Changed Field</th><th>Previous Value</th><th>New Value</th><th>Status</th><th>Operations</th></tr></thead>
                <tbody>
                {records}
                </tbody>
            </table>
        </React.Fragment>;
    }
}