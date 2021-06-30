import React from "react";
export default function DocumentsHtml(type,role,documents,onClickUpload, error){
    let records = []
    documents.map(doc=>{
        let base64 = doc.file_base64.substring(doc.file_base64.indexOf(",")+1,doc.file_base64.length);
        let base64bin = atob(base64.replace(/\s/g,''));
        let base64binLength = base64bin.length;
        let buffer = new ArrayBuffer(base64binLength);
        let view = new Uint8Array(buffer);
        for (let i = 0; i < base64binLength; i++) {
            view[i] = base64bin.charCodeAt(i);
        }
        let docLinkBlob =  new Blob([view], {type: "application/pdf"});
        let link = window.URL.createObjectURL(docLinkBlob);

        let buttonPayment = <button className={"btn btn-success"} onClick={()=>{window.location.href="/user/payment/"+doc._id+"."+role}}>Add Payment</button>;
        let paymentOption = "";
        if(role!=="WORKSHOP-PRESENTER"){
            paymentOption = <td>{doc.payment==="pending"&&doc.status==="accept"?buttonPayment:doc.payment}</td>;;
        }
        records.push(<tr><td>{doc._id}</td><td><a href={link}>{doc.paper_topic}</a></td><td>{doc.paper_authors}</td><td>{doc.status}</td>{paymentOption}</tr>);
        //<tr><td>1</td><td><a href="#">Paper</a></td><td>On-Review</td></tr>
    });
    return <React.Fragment>
        <h3><u>Please Follow the Rules Given Below Before Submitting Your Paper!</u></h3>
        <h5> *All accepted and presented full papers to be submitted for publication to the IEEE Xplore*</h5>

        <ul>
            <li>All papers should be written in English.</li>
            <li>Maximum length of a paper is limited to 6 printed A4 pages in given format.</li>
            <li>Use the IEEE template while preparing full research papers.</li>

            <li>Review process is Double-blind. Follow the following instructions in your first submission.</li>
            <ul>
                <li>AVOID including any authors’ information such as name, phone number, e-mail, etc.</li>
                <li>AVOID including any grant information or personal acknowledgements in the initial manuscript (This is a must).</li>
            </ul>

        </ul>
        <h5> *Use the following guidelines when submitting full papers*</h5>
        <ul>
            <li>All papers should be written according to the given template.</li>

            <li>Remember to login to the system by selecting the correct check box.</li>

        </ul>
        <h6>{type} Submit</h6>
        <div style={{display: "table-cell", width: "590px", border: "1px solid green", padding: "12px"}}>
            {error!==null?error:''}
            <p/>
            <label>Paper Topic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input className={"w-75"} type="text" placeholder="Enter paper topic" id={"paper_topic"}/>
            <p/>
            <label>Paper Authors&nbsp;</label>
            <input className={"w-75"} type="text" placeholder="Enter paper authors" id={"paper_authors"}/>
            <p/>
            <input type="file" id={"paper_file"}/>
            <p/>
            <button className="btn btn-success" onClick={()=>onClickUpload(role)}>Upload</button>
        </div>
        <p/>
        <h6>Past Submissions</h6>
        <table className={"table"}>
            <thead><tr><th>Paper ID</th><th>Paper</th><th>Authors</th><th>Status</th>{role!=="WORKSHOP-PRESENTER"?<th>Payments</th>:""}</tr></thead>
            <tbody>
            {records}
            </tbody>
        </table>
    </React.Fragment>
}