import React from "react";
import "url:https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css";
import NavigateItemHolder from "./NavigateItemHolder";
import NavProfileButtons from "./NavProfileButtons";
import Cookies from 'js-cookie';
import {getUsernameType} from "../api/get-username-type";
import {UserRoles} from "../../../server/api/common/roles";
export default class NavigationBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:Cookies.get('username',null)
        }
        this.getAdminNavigations=this.getAdminNavigations.bind(this);
        this.getReviewerNavigations=this.getReviewerNavigations.bind(this);
        this.getEditorNavigations=this.getEditorNavigations.bind(this);
        this.getUserNavigations=this.getUserNavigations.bind(this);
    }
    //Navigation buttons for each user type
    getAdminNavigations(){
        return <React.Fragment>
            <NavigateItemHolder path={"/admin/dashboard"} name={"Dashboard"}/>
            <NavigateItemHolder path={"/admin/conference"} name={"Conference Details"}/>
            <NavigateItemHolder path={"/admin/conference-history"} name={"Conference Edit History"}/>
            <NavigateItemHolder path={"/admin/res"} name={"Conference Resources"}/>
            <NavigateItemHolder path={"/admin/uam"} name={"Add Users"}/>
            <NavigateItemHolder path={"/admin/uac"} name={"UAC"}/>
        </React.Fragment>;
    }
    getEditorNavigations(){
        return <React.Fragment>
            <NavigateItemHolder path={"/editor/dashboard"} name={"Dashboard"}/>
            <NavigateItemHolder path={"/editor/contents"} name={"Content Edits"}/>
            <NavigateItemHolder path={"/editor/showedits"} name={"Show Edits"}/>
        </React.Fragment>;
    }
    getReviewerNavigations(){
        return <React.Fragment>
            <NavigateItemHolder path={"/rev/dashboard"} name={"Dashboard"}/>
            <NavigateItemHolder path={"/rev/papers"} name={"Conference papers"}/>
            <NavigateItemHolder path={"/rev/proposals"} name={"Workshop papers"}/>
        </React.Fragment>;
    }
    getUserNavigations(){
        return <React.Fragment>
            <NavigateItemHolder path={"/user/dashboard"} name={"Dashboard"}/>


        </React.Fragment>;
    }
    render() {
        const username = this.state.username;
        const usertype = getUsernameType(username);
        let navContent = [];
        if(usertype===UserRoles.ADMIN){
            navContent.push(this.getAdminNavigations());
        }else if(usertype===UserRoles.EDITOR){
            navContent.push(this.getEditorNavigations());
        }else if(usertype===UserRoles.REVIEWER){
            navContent.push(this.getReviewerNavigations());
        }else if(usertype===UserRoles.ATTENDEE || usertype===UserRoles.RESEARCHER || usertype===UserRoles.WORKSHOP_PRESENTER){
            navContent.push(this.getUserNavigations());
        }else{
            navContent.push(<NavigateItemHolder path={"#"} name={"Internation Conference of Application Frameworks 2021 - User Portal"}/>);
        }
        return <React.Fragment>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navContent}
            </ul>
            <NavProfileButtons/>
        </React.Fragment>
    }
}