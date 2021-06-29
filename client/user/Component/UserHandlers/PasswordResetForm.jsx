import React from "react";
import resources from "../../resource.config";
export default class PasswordResetForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            server_msg:null
        }
        this.resetPasswordInServer=this.resetPasswordInServer.bind(this);
    }
    async resetPasswordInServer(){
        const username = this.username.value;
        const email = this.email.value;
        await fetch(resources.proxy("/login/reset"),{
            method:'put', headers:{'Content-Type':'application/json'},body:JSON.stringify({"username":username,"email":email})
        }).then(r=>r.text()).then(d=>this.setState({server_msg:d})).catch(e=>console.log(e));
    }
    render() {
        const server_msg = this.state.server_msg;
        return <React.Fragment>
            <h5>Password Reset Request</h5>
            {server_msg!==null?server_msg:""}
            <p/>
            <table>
                <thead><tr><th></th><th></th></tr></thead>
                <tbody>
                <tr>
                    <td><label>Enter Username</label></td><td><input type={"text"} placeholder={"Enter username"} ref={(ref) => {this.username = ref}}/></td>
                </tr>
                <tr>
                    <td><label>Enter Email</label></td><td><input type={"text"} placeholder={"Enter password"} ref={(ref) => {this.email = ref}}/></td>
                </tr>
                </tbody>
            </table>
            <br/>
            <button onClick={this.resetPasswordInServer}>Request Reset</button> &nbsp;
            <button onClick={()=>{window.location.href="/"}}>Login</button>
        </React.Fragment>
    }
}