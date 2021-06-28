import React from "react";
import resources from "../../resource.config";
export default async function getConferenceValues(){
    let server_response;
    await fetch(resources.proxy("/editor/conference"),{
        method: 'get',
        headers: {'Accept': 'application/json'}
    }).then(response => response.text())
        .then(data => (server_response = JSON.parse(data)))
        .catch(error => console.log(error));
    return server_response.papersExpected;
}