import React from "react";
import Cookies from "js-cookie";

export default class ModifyConferenceDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null),
            userid:Cookies.get('userid',null),
            conference:null
        }
    }
    async getConferenceDetailsFromServer(){
        await fetch("",{

        })
    }
    async suggestUpdateToConferenceDetails(){
        await fetch("",{

        })
    }
    render() {

    }
}