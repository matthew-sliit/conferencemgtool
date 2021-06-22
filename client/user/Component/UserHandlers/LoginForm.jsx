import React from "react";
import {UserRoles} from "../../api/roles";
import resources from "../../resource.config";
import Cookies from 'js-cookie';
export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            server_msg:null
        }
        this.redirectToSignUp=this.redirectToSignUp.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }
    redirectToSignUp(){
        window.location.href = "/sign-up";
    }
    //TODO: get userid from server
    async handleLogin(){
        const username = this.username.value;
        let loginData = {"username":username,"password":this.password.value};
        await fetch(resources.proxy("/login"),{
            method:'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(loginData)
        }).then(r=>r.text()).then(d=>this.setState({server_msg:d})).catch(e=>console.log(e));
        const server_msg = this.state.server_msg;
        if(server_msg.substring(0,7)==="success"){
            const id = server_msg.substring(8,server_msg.length);
            let prefix = username.charAt(0);
            Cookies.set('username',username);
            Cookies.set('userid',id);
            switch (prefix){
                case 'S': window.location.href="/admin"; break;
                case 'E': window.location.href="/editor"; break;
                case 'C': window.location.href="/reviewer"; break;
                case 'R': window.location.href="/researcher"; break;
                case 'W': window.location.href="/workshop"; break;
                case 'A': window.location.href="/attendee"; break;
                default: this.setState({server_msg:"Unknown user!"});
            }
        }
    }
    render() {
        const server_msg = this.state.server_msg;
        let error_msg;
        if(server_msg!==null)
            if(server_msg.length>8)
                if(server_msg.substring(0,7)!=="success")
                    error_msg = server_msg;
        return <React.Fragment>
            <h5>Login</h5>
            <p>{error_msg}</p>
            <input type={"text"} placeholder={"Enter username"} ref={(ref) => {this.username = ref}}/>
            <p/>
            <input type={"password"} placeholder={"Enter password"} ref={(ref) => {this.password = ref}}/>
            <p/>
            <button onClick={this.handleLogin}>Login</button> &nbsp;
            <button onClick={this.redirectToSignUp}>Register</button>
        </React.Fragment>
    }
}