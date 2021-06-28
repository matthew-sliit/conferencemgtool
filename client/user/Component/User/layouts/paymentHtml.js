import React from "react";
import Cookies from "js-cookie";
export default function paymentHtml(paper_id,onClickPay){
    function bundleData(){
        const card_type = document.getElementById("card_type").value;
        return{"card":card_type};
    }
    let username = Cookies.get('username',null);
    let paper_id_fieldname;
    if(username.charAt(0)==="A"){
        paper_id_fieldname = "Reference ID";
    }else{
        paper_id_fieldname = " Paper ID";
    }
    return <React.Fragment>
        <h5>Payment Portal XYZ</h5>
        <table className="table">
            <thead>
            <tr>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Username</td><td>{username}</td>
            </tr>
            <tr>
                <td>{paper_id_fieldname}</td>
                <td>{paper_id}</td>
            </tr>
            <tr>
                <td>Amount/Rs</td><td>3500.00</td>
            </tr>
            <tr>
                <td><label>Card Type</label></td>
                <td><select id={"card_type"}>
                    <option>Visa</option>
                    <option>MasterCard</option>
                    <option>AmericanExpress</option>
                </select></td>
            </tr>
            <tr>
                <td><label>Enter Card Name</label></td>
                <td><input type="text" placeholder="Enter Card Name"/></td>
            </tr>
            <tr>
                <td><label>Card number</label></td>
                <td><input type="number" placeholder="Card Number"/></td>
            </tr>
            <tr>
                <td><label>CVV</label></td>
                <td><input type="text" placeholder="Card CVV"/></td>
            </tr>
            <tr>
                <td><label>Card Expiry</label></td>
                <td><input type="text" placeholder="MM" className="w-25"/><input className="w-25" type="text"
                                                                                 placeholder="YY"/></td>
            </tr>
            <tr>
                <td colSpan="2">
                    <button className="btn btn-outline-success" onClick={()=>onClickPay(bundleData())}>Pay</button>
                </td>
            </tr>
            </tbody>
        </table>
    </React.Fragment>;
}