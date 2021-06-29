import React from "react";
import resources from "../../resource.config";
export default async function getAllUserCount(){
    let server_response;
    await fetch(resources.proxy("/count/user/all"),{
        method: 'get',
        headers: {'Accept': 'application/json'}
    }).then(response => response.text())
        .then(data => (server_response = data))
        .catch(error => console.log(error));
    return server_response;
}