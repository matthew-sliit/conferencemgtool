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
                case 'R': window.location.href="/user"; break;
                case 'W': window.location.href="/user"; break;
                case 'A': window.location.href="/user"; break;
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

            <div  style={{backgroundColor: "lightblue"}}>
<center>


            <h3>Login</h3>
            <p>{error_msg}</p>

                <div className="form-group w-25">
            <input type={"text"} class="form-control" placeholder={"Enter username"} ref={(ref) => {this.username = ref}}/>
            <p/>
            <input type={"password"}  class="form-control"  placeholder={"Enter password"} ref={(ref) => {this.password = ref}}/>
            <p/>
</div>

            <button class="btn btn-success" onClick={this.handleLogin}>&nbsp;&nbsp;Login &nbsp;&nbsp;</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="btn btn-primary" onClick={this.redirectToSignUp}>&nbsp;&nbsp;Register &nbsp;&nbsp;</button> <br></br>
            <br/>
            <a href={"/forgot-password"}>Forgot Password</a>
</center>
            </div>
        </React.Fragment>
    }
}