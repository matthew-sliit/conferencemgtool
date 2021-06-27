import React from "react";
export default class ConferenceResources extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <h6>Workshops</h6>
            <button className={"btn btn-outline-success"}>Download</button>
            <div>
                <a href={"#"} download>Workshop 1 - Node JavaScript and it's multi-threaded workers</a><br/>
                <a href={"#"} download>Workshop 2 - Node JavaScript Quality Assurance calculation</a><br/>
                <a href={"#"} download>Workshop 3 - Node Package Manager concurrency methods</a><br/>
                <a href={"#"} download>Workshop 3 - ReactJS Multithreading methods</a><br/>
            </div>
            <p/>
            <h6>Papers</h6>
            <button className={"btn btn-outline-success"}>Download</button>
            <div>
                <a href={"#"} download>A New JavaScript Library For Hyperthread Based Multithreading</a>
            </div>
        </React.Fragment>;
    }
}