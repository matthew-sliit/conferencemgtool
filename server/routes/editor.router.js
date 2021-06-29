const Router = require('@koa/router');
//mongo
const mongo = require('mongodb');
const {updateDocument} = require("../api/db/mongodb.api");
const saveDocument = require('../api/db/mongodb.api').saveDocument;
const saveDocumentGetId = require('../api/db/mongodb.api').saveDocumentGetId;
const readDocument = require('../api/db/mongodb.api').readDocument;
const readAllDocuments = require('../api/db/mongodb.api').readAllDocuments;
//model classes
const Conference = require('../api/conference.api').Conference;
const ConferenceEditHistory = require("../api/conferenceEdits.api").ConferenceEdits;
//prefix
const router = new Router({
    prefix:'/editor'
});

//for editors and admins to view conference details
router.get("/conference", async ctx=>{
    ctx.response.set('content-type','application/json');
    //console.log("fetch conference");
    let conferenceInitialModel = new Conference();
    await readAllDocuments(Conference.COLLECTION).then(
        function (res){
            //no conference record when deploying to a new database
            if(res.length===0){
                conferenceInitialModel = Conference.getInitialFormat();
                saveDocument(Conference.COLLECTION,[conferenceInitialModel.getSaveToDb()]);
                ctx.body = conferenceInitialModel;
            }else{
                ctx.body = res[0];//fixed
            }
            //console.log(JSON.stringify(res[0]));
        }
    )
})
//for admin to view editor suggestions
router.get("/history/:id", async ctx=>{
    const userid = ctx.request.params.id;
    ctx.response.set('content-type','application/json');
    if(userid==="default"){
        await readAllDocuments(ConferenceEditHistory.COLLECTION).then(
            function (res){
                ctx.body = res;
            }
        )
    }else{
        await readDocument(ConferenceEditHistory.COLLECTION,"userid",userid).then(
            function (res){
                ctx.body = res;
            }
        )
    }
})
//add conference edit suggestions and wait for admin approval
router.put("/suggest/:id", async ctx=>{
    const userid = ctx.request.params.id;
    //console.log("userid:"+userid+JSON.stringify(ctx.request.body));
    let conferenceSavedAsRef = new Conference();
    await readAllDocuments(Conference.COLLECTION).then(
        function (res){
            conferenceSavedAsRef.change(res[0]);
        }
    )
    let conferenceEdit = new Conference();
    conferenceEdit.change(ctx.request.body);
    //console.log(typeof conferenceSavedAsRef.getDifference(conferenceEdit));
    let changes = conferenceSavedAsRef.getDifference(conferenceEdit);
    let changedConference = new ConferenceEditHistory();
    changedConference.addChanges(userid,changes);
    if(changes.length>0){
        saveDocument(ConferenceEditHistory.COLLECTION,[changedConference.getSaveToDb()]);
        //console.log("changes"+JSON.stringify(changedConference.getSaveToDb()));
    }
    ctx.response.set('content-type','application/json');
    ctx.body = "success";
})
//admin direct edits
router.put("/apply/:id",async ctx=>{
    const conferenceId = ctx.request.params.id;
    let conferenceEdit = new Conference();
    conferenceEdit.change(ctx.request.body);
    let id = new mongo.ObjectId(conferenceId);
    await updateDocument(Conference.COLLECTION,"_id",id,conferenceEdit.getSaveToDb());
    //console.log("force-update:"+JSON.stringify(conferenceEdit.getSaveToDb()));
    ctx.response.set('content-type','application/json');
    ctx.body = "success";
});
//approvals of editor edits
router.put("/apply-edit/:id", async ctx=>{
    const conferenceHistoryEditId = ctx.request.params.id;
    const field = ctx.request.body.field;
    const action = ctx.request.body.action;
    const newValue = ctx.request.body.new;
    const oldValue = ctx.request.body.old;
    let id = new mongo.ObjectId(conferenceHistoryEditId);
    let savedEdit = new ConferenceEditHistory();
    await readDocument(ConferenceEditHistory.COLLECTION,"_id",id).then(
        function (res){
            savedEdit.assign(res[0]);
        }
    )
    let previous_state;
    for(let i=0;i<savedEdit.changes.length;i++){
        if(savedEdit.changes[i].field === field){
            previous_state = savedEdit.changes[i].approval;
            savedEdit.changes[i].approval = savedEdit.getActionBasedDecision(action);
        }
    }
    await updateDocument(ConferenceEditHistory.COLLECTION,"_id",id,savedEdit.getSaveToDb());
    //console.log("edit: "+JSON.stringify(savedEdit.getSaveToDb()));
    let conference = new Conference();
    await readAllDocuments(Conference.COLLECTION).then(
        function (res){
            conference.change(res[0]);
        }
    )
    if(action==="approve"){
        //change conference details accordingly
        conference.change({[field]:newValue});
    }else if(action==="reject"){
        conference.change({[field]:oldValue});
    }
    //console.log(JSON.stringify(conference));
    let conferenceId = new mongo.ObjectId(conference._id);
    await updateDocument(Conference.COLLECTION,"_id",conferenceId,conference.getSaveToDb());
    ctx.response.set('content-type','application/json');
    ctx.body = "success";
})
exports.EditorRouter = router;