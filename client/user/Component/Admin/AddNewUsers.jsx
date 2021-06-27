import React from "react";
import AddNewUserCsvHtml from "./templates/AddNewUserCsvHtml"
import AddNewUserTypeHtml from "./templates/AddNewUserTypeHtml";
import {UserRoles} from "../../api/roles";
import * as A from "../../assets/css/btn-styles-admin.css";
export default class AddNewUsers extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            choice:null, choice_type:null
        }
        //functions
        this.onClickUserType=this.onClickUserType.bind(this);
        this.onClickCSVType=this.onClickCSVType.bind(this);
        //styling for buttons
        this.clickedBtnStyle = "btn-orange";
        this.neutralBtnStyle = "btn-blue";
        //user types
        this.types = ["Admin","Editor","Reviewer","Presenter","Author","Attendee"];
    }
    componentDidMount() {
        this.onClickUserType(this.types[0]);
    }
    onClickUserType(type){
        const previous_choice_type = this.state.choice_type;
        this.setState({choice:AddNewUserTypeHtml(type)});
        this.setState({choice_type:type});
        let clickedBtnId = "adadmin_"+type;
        document.getElementById(clickedBtnId).className = this.clickedBtnStyle;
        if(previous_choice_type!==null && previous_choice_type!==type){
            let prevBtnId = "adadmin_"+previous_choice_type;
            document.getElementById(prevBtnId).className = this.neutralBtnStyle;
        }
    }
    onClickCSVType(){
        const previous_choice_type = this.state.choice_type;
        this.setState({choice:AddNewUserCsvHtml()});
        this.setState({choice_type:"csv"});
        let clickedBtnId = "adadmin_csv";
        document.getElementById(clickedBtnId).className = this.clickedBtnStyle;
        if(previous_choice_type!==null && previous_choice_type!=="csv"){
            let prevBtnId = "adadmin_"+previous_choice_type;
            document.getElementById(prevBtnId).className = this.neutralBtnStyle;
        }
    }
    render() {
        const choice = this.state.choice;
        let buttons = [];
        this.types.map(type =>{
            buttons.push(<button className={this.neutralBtnStyle} onClick={this.onClickUserType.bind(this,type)} id={"adadmin_"+type}>{type}</button>);
        })
        return <React.Fragment>
            {buttons}
            <button className={this.neutralBtnStyle}  id={"adadmin_csv"} onClick={this.onClickCSVType}>Upload CSV</button>
            <p/>
            {choice!==null?choice:''}
        </React.Fragment>
    }
}