import React from "react";
export default function Footer(){
    return <div style={{position:"relative",bottom:"0px",backgroundColor: "rgba(0, 0, 0, 0.05)", borderRadius:"10px"}}>
        <div className="text-center p-3 mb-1">
            <button onClick={()=>window.location.href="#"} style={{position:"relative",top:"0px", left:"-10px"}} className={"btn btn-outline-success"}>UP</button>© 2021 Sri Lanka Institute of Information Technology, developed by <b>EagleEyes</b> on behalf of AF project, All Rights Reserved
        </div>
    </div>;
}