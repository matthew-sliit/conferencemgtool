import React from "react";
import resources from "../resource.config";
export default function WorkshopListItem(props){
    const {workshop} = props;
    return <div className="row">
        <div className="col-lg-12">
            <div className="workshop-02" id="accordion">
                <p><b>{workshop.paper_topic}</b></p>
                <p><a style={{color:"blue"}} href={workshop.file_base64} target="_blank">Download the Workshop Flyer</a></p>
            </div>
        </div>
    </div>
}