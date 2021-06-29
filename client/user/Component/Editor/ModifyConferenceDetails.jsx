import React from "react";
import Cookies from 'js-cookie';
import resources from "../../resource.config";
import ShowConferenceDetailsHtml from "./htmltemplates/ShowConferenceDetailsHtml";
import {getRole} from "../../api/roles";
export default class ModifyConferenceDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            conference:null, //complex object
            server_msg:null
        }
        this.getConferenceDetailsFromServer=this.getConferenceDetailsFromServer.bind(this);
        this.suggestUpdateToConferenceDetails=this.suggestUpdateToConferenceDetails.bind(this);
        //functions
        this.onClickSaveConferenceDetails=this.onClickSaveConferenceDetails.bind(this);
    }
    async componentDidMount() {
        await this.getConferenceDetailsFromServer();
    }

    async getConferenceDetailsFromServer(){
        await fetch(resources.proxy("/editor/conference"),{
            method:'get'
        }).then(r=>r.text()).then(d=>this.setState({conference:JSON.parse(d)})).catch(e=>console.log(e));
    }
    async suggestUpdateToConferenceDetails(bodyData){
        const userid = this.state.userid;
        let server_msg = null;
        await fetch(resources.proxy("/editor/suggest/"+userid),{
            method:'put',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify(bodyData)
        }).then(r=>r.text()).then(d=>server_msg=d).catch(e=>console.log(e));
        //success message?
    }
    async onClickSaveConferenceDetails(data){
        console.log("Save it!" + JSON.stringify(data));
        await this.suggestUpdateToConferenceDetails(data);
        window.location.href="/editor/contents";
    }
    render() {
        const conference = this.state.conference;
        if(conference===null){
            return <p>No conference details saved in database</p>;
        }
        return ShowConferenceDetailsHtml(conference, this.onClickSaveConferenceDetails);
    }
}