const Router = require('@koa/router');
const {readAllDocuments} = require("../api/db/mongodb.api");
const router = new Router({
    prefix:'/visitor'
});

const Conference = require('../api/conference.api').Conference;
const ConferenceEditHistory = require('../api/conferenceEdits.api').ConferenceEdits;

router.get("/news", async ctx=>{
    ctx.response.set('content-type','application/json');
    console.log("Finding news!");
    let allEdits = [];
    await readAllDocuments(ConferenceEditHistory.COLLECTION).then(
        function (results){
            allEdits = results;
        }
    )
    allEdits = allEdits.reverse();
    let newsList = [], fieldsAdded = [], fieldAlreadyAdded = false;
    allEdits.map(edit =>{
        fieldAlreadyAdded = false;
        edit.changes.map(change =>{
            if(change.approval==="APPROVED"||change.approval==="SERVICED"){
                fieldsAdded.map(fields=>{
                    if(change.field===fields){
                        fieldAlreadyAdded=true;
                    }else{
                        fieldsAdded.push(change.field);
                    }
                })
                if(fieldsAdded.length<1){
                    fieldsAdded.push(change.field);
                }
                if(!fieldAlreadyAdded){
                    //new field
                    change["timeStamp"] = edit.timeStamp;
                    newsList.push(change);
                }
            }
        })
    });
    //ctx.body = "success";
    //console.log(JSON.stringify(newsList));
    ctx.body = newsList;
});

router.get("/conference", async ctx=>{
    ctx.response.set('content-type','application/json');
    await readAllDocuments(Conference.COLLECTION).then(
        function (res){
            ctx.body = res;
        }
    )

});
exports.VisitorServices = router;