exports.proxy = function proxy(sub_directory){
    let local_server = require('package.json').config.localhost;
    let http_server = require('package.json').config["server-http"];
    let https_server = require('package.json').config["server-https"];
    return local_server+sub_directory;
}