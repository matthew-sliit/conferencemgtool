import React from "react";
import Footer from "../../Footer";
export default function showConferenceDetailsHtml(conferenceObj, savefunction){
    var topicCount_XYZ021 = 2;
    function addNewTopic(){
        let label = document.createElement("label");
        label.innerHTML = (++topicCount_XYZ021)+". ";
        let inputTopic = document.createElement("input");
        inputTopic.style.width = "590px";
        inputTopic.setAttribute("id","ABCDEXX");
        inputTopic.setAttribute("id","t_"+(topicCount_XYZ021));
        inputTopic.placeholder = "Enter topic";
        label.appendChild(inputTopic);
        document.getElementById("additional_topics").appendChild(label);
    }
    function getDetailsAsBundle(){
        let keynotes = [];
        for(let i=1;i<=3;i++){
            keynotes.push({"name":document.getElementById("keyname"+i).value,"link":document.getElementById("keylink"+i).value});
        }
        let topics = [];
        for(let i=0;i<topicCount_XYZ021;i++){
            let value = (i+1);
            topics.push(document.getElementById("t_"+value).value);
        }
        return {"name":document.getElementById("c_name").value,
            "topics":topics,
            "keynotes":keynotes,
            "submissionDeadline":document.getElementById("c_submissionDeadline").value,
            "reviewDeadline":document.getElementById("c_reviewDeadline").value,
            "papersExpected":document.getElementById("c_papersExpected").value,
            "startDate":document.getElementById("c_startDate").value,
            "endDate":document.getElementById("c_endDate").value,
            "venue":document.getElementById("c_venue").value,
            "tag":document.getElementById("c_tag").value};
    }
    let topics = [];
    for(let i=0;i<conferenceObj.topics.length;i++){
        let value = (i+1);
        topics.push(<React.Fragment>
            <label>{value+"."}&nbsp;</label>
            <input type="text" placeholder="Enter Topic" style={{width: "590px" ,marginBottom: "3px"}} id={"t_"+value} defaultValue={conferenceObj.topics[i]}/>
        </React.Fragment>);
    }
    topicCount_XYZ021 = conferenceObj.topics.length;
    return <React.Fragment>
        <h3 style={{color:"purple"}}>Conference Details</h3>
        <div className={"card w-75 bg-light"}>
            <div className={"card-body"}>
        <table>
            <thead>
            <tr>
                <td></td>
                <td></td>
            </tr>
            </thead>
            <tbody>
            <tr className={"mb-3"}>
                <td>Conference Name</td>
                <td><input type="text" className="form-control mb-3" value={conferenceObj.name} style={{width: "590px"}} id={"c_name"} disabled/></td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2"><b style={{color:"purple"}}>Topics</b></td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2">
                    {topics}
                    <br/>
                    <div id="additional_topics"></div>
                    x. <button className="btn btn-primary mt-3" style={{fontSize: "14px"}} onClick={()=>addNewTopic()}>Add New Topic</button>
                </td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2"><b style={{color:"purple"}} className={"mt-3"}>Keynotes</b></td>
            </tr>
            <tr className={"mb-2"}>
                <td>First Keynote Speaker</td>
                <td><input type="text"  placeholder="Enter 1st Speaker name" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[0].name}  id={"keyname1"}/>&nbsp;<input
                    type="text"  placeholder="Enter 1st Speaker link bio" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[0].link}  id={"keylink1"}/></td>
            </tr>
            <tr className={"mb-2"}>
                <td>Second Keynote Speaker</td>
                <td><input type="text"   placeholder="Enter 2nd Speaker name" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[1].name} id={"keyname2"}/>&nbsp;<input
                    type="text"  placeholder="Enter 2nd Speaker link bio" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[1].link}  id={"keylink2"}/></td>
            </tr>
            <tr className={"mb-2"}>
                <td>Third Keynote Speaker</td>
                <td><input type="text"  placeholder="Enter 3rd Speaker name" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[2].name}  id={"keyname3"}/>&nbsp;<input
                    type="text"  placeholder="Enter 3rd Speaker link bio" style={{width: "300px"}} defaultValue={conferenceObj.keynotes[2].link}  id={"keylink3"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2"><b style={{color:"purple"}} className={"mt-3"}>Deadlines</b></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Paper Submission Deadline</td>
                <td><input type="datetime-local" className="form-control mb-3" style={{width: "45%"}} defaultValue={conferenceObj.submissionDeadline} placeholder="Enter Submission Deadline" id={"c_submissionDeadline"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2"><b style={{color:"purple"}}>Options</b></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Paper Review Deadline</td>
                <td><input type="datetime-local" className="form-control mb-3" style={{width: "45%"}} defaultValue={conferenceObj.reviewDeadline} placeholder="Enter Review Deadline" id={"c_reviewDeadline"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td colSpan="2"></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Expected number of Papers</td>
                <td><input type="number" min="0" step="1" className="form-control mb-3" placeholder="Expected no. conference papers" style={{width: "45%"}}  defaultValue={conferenceObj.papersExpected} id={"c_papersExpected"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Conference Start Date</td>
                <td><input type="datetime-local" placeholder="Start date" className="form-control mb-3" style={{width: "45%"}} defaultValue={conferenceObj.startDate} id={"c_startDate"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Conference Venue</td>
                <td><input type="text" placeholder="Venue" className="form-control mb-3" style={{width: "606px"}} defaultValue={conferenceObj.venue} id={"c_venue"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Conference End Date</td>
                <td><input type="datetime-local" placeholder="End date" className="form-control mb-3" style={{width: "45%"}} defaultValue={conferenceObj.endDate} id={"c_endDate"}/></td>
            </tr>
            <tr className={"mb-3"}>
                <td>Conference Tag</td>
                <td><input type="text" placeholder="Tag" className="form-control mb-3" value={conferenceObj.tag}  disabled style={{width: "45%"}} id={"c_tag"}/></td>
            </tr>
            <tr>
                <div>
                    <button className="btn btn-success col-md-10" onClick={()=>savefunction(getDetailsAsBundle())}>Save</button>
                </div>
            </tr>
            </tbody>
        </table>
        </div>

        </div>
        <div>
            <Footer/>
        </div>
    </React.Fragment>;
}
