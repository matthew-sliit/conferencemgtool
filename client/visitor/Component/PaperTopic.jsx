import React from "react";
import resources from "../resource.config";
export default class PaperTopic extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            topics:[]
        }
    }
    async componentDidMount() {
        let conference = null;
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>conference = JSON.parse(d)).catch(e=>console.log(e));
        if(conference!==null){
            this.setState({topics:conference.topics});
        }
    }
    render() {
        const topics = this.state.topics;
        let records = [];
        if(topics.length<0){
            records.push(<tr><td colSpan={2}>To be informed</td></tr>);
        }else {
            for (let i = 0; i < topics.length; i++) {
                records.push(<tr key={i}>
                    <td><label>{"Topic " + (i+1)}</label></td>
                    <td>{topics[i]}</td>
                </tr>);
            }
        }
        return <React.Fragment>
            <h5>Call for Papers</h5>
            <span>Given below are the topics covered within this conference</span>
            <table className={"table"}>
                <thead><tr><th></th><th></th></tr></thead>
                <tbody>
                {records}
                </tbody>
            </table>
        </React.Fragment>
    }
}