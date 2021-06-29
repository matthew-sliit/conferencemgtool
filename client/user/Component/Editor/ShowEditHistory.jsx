import React from "react";
import Cookies from "js-cookie";
import resources from "../../resource.config";

export default class ShowEditHistory extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            history:[]
        }
        this.fetchHistoriesFromServer=this.fetchHistoriesFromServer.bind(this);
    }
    async componentDidMount() {
        await this.fetchHistoriesFromServer();
    }
    async fetchHistoriesFromServer(){
        const userid = this.state.userid;
        await fetch(resources.proxy("/editor/history/"+userid),{
            method: 'get'
        }).then(r=>r.text()).then(d=>this.setState({history:JSON.parse(d)})).catch(e=>console.log(e));
    }
    render() {
        const history = this.state.history;
        let records = [];
        for(let i=0;i<history.length;i++){
            let changes = history[i].changes;
            records.push(<tr><td rowSpan={changes.length} style={{verticalAlign:"middle"}}>{history[i]._id}</td>
                <td>{changes[0].field}</td>
                <td>{JSON.stringify(changes[0].old)}</td>
                <td>{JSON.stringify(changes[0].new)}</td>
                <td>{changes[0].approval}</td></tr>);
            for(let j=1;j<changes.length;j++){
                records.push(<tr> <td>{changes[j].field}</td>
                    <td>{JSON.stringify(changes[j].old)}</td>
                    <td>{JSON.stringify(changes[j].new)}</td>
                    <td>{changes[j].approval}</td></tr>);
            }
        }
        return <React.Fragment>
            <h5>Conference Edit History</h5>
            <table className={"table"}>
                <thead><tr><th>Change ID</th><th>Changed Field</th><th>Previous Value</th><th>New Value</th><th>Status</th></tr></thead>
                <tbody>
                {records}
                </tbody>
            </table>
        </React.Fragment>
    }
}