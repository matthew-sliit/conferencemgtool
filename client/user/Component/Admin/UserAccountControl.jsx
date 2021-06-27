import React from "react";
import resources from "../../resource.config";
export default class UserAccountControl extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            usersFromDb:[],
            showUsers:[],
            server_msg:null
        }
        this.fetchAllUsers=this.fetchAllUsers.bind(this);
        this.filterUsers=this.filterUsers.bind(this);
    }
    componentDidMount() {
        this.fetchAllUsers();
    }
    async fetchAllUsers(){
        await fetch(resources.proxy("/admin"),{
            method:'get',
        }).then(r=>r.text()).then(d=>this.setState({usersFromDb:JSON.parse(d)})).catch(e=>console.log(e));
        const usersFromDb = this.state.usersFromDb;
        console.log(JSON.stringify(usersFromDb));
        this.setState({showUsers:[...usersFromDb]});
    }
    filterUsers(){
        const byUsername = this.search_username.value;
        const byEmail = this.search_email.value;
        const byRole = this.search_role.value;
        let showUsers = this.state.showUsers;
        const usersFromDb = this.state.usersFromDb;
        let u = false, e = false, r = false, pushed = false;
        if(byUsername.length>0){
            u = true;
        }
        if(byEmail.length>0){
            e = true;
        }
        if(byRole.length>0){
            r = true;
        }
        usersFromDb.map(user =>{
            pushed = false;
            if(u && user.username===byUsername){
                showUsers.push(user);
                pushed = true;
            }
            if(e && user.email===byEmail && !pushed){
                showUsers.push(user);
                pushed = true;
            }
            if(r && user.role===byRole && !pushed){
                showUsers.push(user);
                pushed = true;
            }
        })
        this.setState({showUsers:showUsers});
    }
    render() {
        const showUsers = this.state.showUsers;
        let records = [];
        if(showUsers.length>0){
            showUsers.map(user =>{
              records.push(<tr>
                  <td><b>{user.username}</b></td>
                  <td>{user.email}</td>
                  <td style={{width: "200px"}}>{user.address}</td>
                  <td>{user.mobile1}<p/>{user.mobile2}</td>
                  <td>{user.role}</td>
                  <td>
                      <button className="btn btn-danger m-lg-1">Ban</button>
                      <button className="btn btn-danger m-lg-1">Remove User</button>
                      <button className="btn btn-warning">Password Reset</button>
                  </td>
              </tr>);
            })
        }
        return <React.Fragment>
            <h6>Search Criteria</h6>
            <div className="p-2" style={{border: "1px solid green", width: "700px"}}>
                <div style={{display: "table-cell"}}>
                    <label>Username</label>
                    <input type="text" placeholder="Username" ref={(ref) => {this.search_username = ref}}/>
                </div>
                <div className="mx-1" style={{display: "table-cell", marginLeft: "3px"}}>
                    <label>Email</label>
                    <input type="text" placeholder="User Email" ref={(ref) => {this.search_email = ref}}/>
                    <select className="mx-1" ref={(ref) => {this.search_role = ref}}>
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>Reviewer</option>
                        <option>Presenter</option>
                        <option>Author</option>
                        <option>Attendee</option>
                    </select>
                </div>
                <div style={{display: "table-cell"}}>
                    <button className="btn btn-success">Search</button>
                </div>
            </div>
            <p/>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th className="text-center" scope="col">Address</th>
                    <th>Contacts</th>
                    <th scope="col">Role</th>
                    <th className="text-center" scope="col">Operations</th>
                </tr>
                </thead>
                <tbody>
                {records}
                </tbody>
            </table>
        </React.Fragment>;
    }
}
{/*
//sample
<tr>
    <td><b>SAD101231231</b></td>
    <td>b.c@cmail.com</td>
    <td style={{width: "200px"}}>no 7/5, Jackson Anthony James mawatha, Katuwala, Boralesgamuwa</td>
    <td>+947298566739<p/>0119085678-3</td>
    <td>Admin</td>
    <td>
        <button className="btn btn-danger m-lg-1">Ban</button>
        <button className="btn btn-danger m-lg-1">Remove User</button>
        <button className="btn btn-warning">Password Reset</button>
    </td>
</tr>
*/}