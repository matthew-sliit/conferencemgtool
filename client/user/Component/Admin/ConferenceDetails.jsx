import React from "react";
import Cookies from 'js-cookie';
import resources from "../../resource.config";
import showConferenceDetailsHtml from "../Editor/htmltemplates/ShowConferenceDetailsHtml";
export default class ConferenceDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            conference:null, //complex object
            server_msg:null
        }
        this.getConferenceDetailsFromServer=this.getConferenceDetailsFromServer.bind(this);
        this.applyConferenceDetailEdit=this.applyConferenceDetailEdit.bind(this);
    }
    async componentDidMount() {
        await this.getConferenceDetailsFromServer();
    }
    async getConferenceDetailsFromServer(){
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>this.setState({conference:JSON.parse(d)})).catch(e=>console.log(e));
    }
    async applyConferenceDetailEdit(bodyData){
        const conferenceId = this.state.conference._id;
        await fetch(resources.proxy("/editor/apply/"+conferenceId),{
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(bodyData)
        }).then(r=>r.text()).then(d=>this.setState({server_msg:JSON.parse(d)})).catch(e=>console.log(e));
    }
    render() {
        const conference = this.state.conference;
        if(conference===null){
            return <p>No conference details saved in database</p>;
        }
        return showConferenceDetailsHtml(conference,this.applyConferenceDetailEdit);
    }
}