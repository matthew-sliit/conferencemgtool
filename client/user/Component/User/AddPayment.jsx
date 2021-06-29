import React from "react";
import paymentHtml from "./layouts/paymentHtml";
import resources from "../../resource.config";
export default class AddPayment extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            paper_id:null,
            type:null
        }
        let path = window.location.pathname.split("/");
        if(path.length>3){
            let paperAndRole = path[3].substring(0,path[3].length).split('.');
            //console.log(paperAndRole);
            //console.log(paper_id);
            this.state.paper_id = paperAndRole[0];
            if(paperAndRole[1]==="RESEARCHER"){
                this.state.type = "author";
                console.log("author");
            }else{
                this.state.type = "attendee";
                console.log("attendee");
            }//attendee or author
        }else{
            window.location.href = "/user/dashboard";
        }
        this.onClickPay=this.onClickPay.bind(this);
    }
    async onClickPay(paymentData){
        let result;
        const type = this.state.type;
        const paper_id = this.state.paper_id;
        await fetch(resources.proxy("/user/payment/"+type+"/"+paper_id),{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(paymentData)
        }).then(r=>r.text()).then(d=>result=d).catch(e=>console.log(e));
        if(result==="success"){
            window.location.href = "/user/dashboard";
        }
    }
    render() {
        const paper_id = this.state.paper_id;
        if(paper_id===null){
            return <p>Todo</p>;


        }
        return paymentHtml(paper_id,this.onClickPay);
    }
}