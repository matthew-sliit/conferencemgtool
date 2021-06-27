import React from "react";

export default class UserAccountControl extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <h6>Search Criteria</h6>
            <div className="p-2" style={{border: "1px solid green", width: "700px"}}>
                <div style={{display: "table-cell"}}>
                    <label>Username</label>
                    <input type="text" placeholder="Username"/>
                </div>
                <div className="mx-1" style={{display: "table-cell", marginLeft: "3px"}}>
                    <label>Email</label>
                    <input type="text" placeholder="User Email"/>
                    <select className="mx-1">
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
                </tbody>
            </table>
        </React.Fragment>;
    }
}