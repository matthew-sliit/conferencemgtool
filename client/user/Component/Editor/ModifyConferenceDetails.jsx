import React from "react";
import Cookies from 'js-cookie';
import resources from "../../resource.config";
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
    }
    async getConferenceDetailsFromServer(){
        await fetch(resources.proxy("/editor"),{
            method:'get'
        }).then(r=>r.text()).then(d=>this.setState({server_msg:d})).catch(e=>console.log(e));
    }
    async suggestUpdateToConferenceDetails(){
        const userid = this.state.userid;
        await fetch("/editor/"+userid,{
            method:'put'
        }).then(r=>r.text()).then(d=>this.setState({server_msg:d})).catch(e=>console.log(e));
    }
    render() {
        return <p>Modifiers</p>;
    }
}