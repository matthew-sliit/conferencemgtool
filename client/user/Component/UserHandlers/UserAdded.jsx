import React from "react";
export default function UserAdded(props){
    if(props.obj!=="new" && props.obj!==null){
        const parentGivenValues = props.obj;
        this.email.value = parentGivenValues.email;
        //this.password.value = parentGivenValues.password;
        this.phone1.value = parentGivenValues.phone1;
        this.phone2.value = parentGivenValues.phone2;
        this.address.value = parentGivenValues.address;
    }
    return <React.Fragment>
        <tr>
            <td><label>Email Address&nbsp;</label></td>
            <td>
                <input type={"text"} ref={(ref) => {this.email = ref}} name={"email"} placeholder={"Enter Email"}/>
            </td>
        </tr>
        <tr>
            <td><label>Password</label></td>
            <td>
                <input type={"password"} ref={(ref) => {this.password = ref}} name={"password"} placeholder={"Enter Password"}/>
            </td>
        </tr>
        <tr>
            <td><label>Contact no 1&nbsp;</label></td>
            <td>
                <input type={"text"} ref={(ref) => {this.phone1 = ref}} name={"phone1"} placeholder={"Enter Contact number"}/>
            </td>
        </tr>
        <tr>
            <td><label>Contact no 2</label></td>
            <td>
                <input type={"text"} ref={(ref) => {this.phone2 = ref}} name={"phone2"} placeholder={"Enter Additional contact number"}/>
            </td>
        </tr>
        <tr>
            <td><label>Address</label></td>
            <td>
                <input type={"text"} ref={(ref) => {this.address = ref}} name={"address"} placeholder={"Enter Address"}/>
            </td>
        </tr>
    </React.Fragment>;
}