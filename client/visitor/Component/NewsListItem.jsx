import React from "react";

export default function NewsListItem(props){
    //<p><h6>June 4 -Lorey ipsum</h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>;
    const {newsObj} = props;
    let last = "";
    //console.log(newsObj.timeStamp);
    console.log(newsObj.old);
    if(newsObj.old!==""){
        last = " from " + newsObj.old;
    }
    return  <React.Fragment>
        <b>{new Date(newsObj.timeStamp).toString()}</b>
        <p style={{fontsize:"9px"}}>{newsObj.field + " updated to " + newsObj.new}</p>;
        <br/>
    </React.Fragment>

}