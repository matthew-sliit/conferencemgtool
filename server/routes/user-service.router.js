const Router = require('@koa/router');
//mongo
const mongo = require('mongodb');
const saveDocument = require('../api/db/mongodb.api').saveDocument;
const saveDocumentGetId = require('../api/db/mongodb.api').saveDocumentGetId;
const readDocument = require('../api/db/mongodb.api').readDocument;
const readAllDocuments = require('../api/db/mongodb.api').readAllDocuments;
const router = new Router({
    prefix:'/user'
});
const Paper = require("../api/paper.api").Paper;
router.get("/author/:id",async ctx=>{
    const userid = ctx.request.params.id;
    ctx.response.set('content-type','application/json');
    if(userid==="default"){
        await readAllDocuments(Paper.AUTHORCOLLECTION).then(
            function (res){
                ctx.body = res;
            }
        )
    }else {
        //const id = new mongo.ObjectId(userid);
        await readDocument(Paper.AUTHORCOLLECTION, "userid", userid).then(
            function (res) {
                //returns all assoc with userid
                ctx.body = res;
            }
        );
    }
});
router.get("/workshop/:id", async ctx=>{
    const userid = ctx.request.params.id;
    ctx.response.set('content-type','application/json');
    if(userid==="default"){
        await readAllDocuments(Paper.WORKSHOPCOLLECTION).then(
            function (res){
                ctx.body = res;
            }
        );
    }else {
        //const id = new mongo.ObjectId(userid);
        await readDocument(Paper.WORKSHOPCOLLECTION, "userid", userid).then(
            function (res) {
                //returns all assoc with userid
                ctx.body = res;
            }
        );
    }
});
router.put("/author/:id",async ctx=>{
    /*
    const userid = ctx.request.params.userid;
    const paper_topic = ctx.request.body.paper_authors;
    const paper_authors = ctx.request.body.paper_authors;
    const file_base64 = ctx.request.body.file_base64;
     */
    //console.log(JSON.stringify(ctx.request.body));
    //console.log("id:"+userid+" topic:"+paper_topic+" authors:"+paper_authors+ " file:"+file_base64);
    let paper = new Paper();
    paper.change(ctx.request.body.bodyData);
    saveDocument(Paper.AUTHORCOLLECTION,[paper.getSaveToDb()]);
    ctx.response.set('content-type','application/json');
    ctx.body = "success";
});
router.put("/workshop/:id",async ctx=>{
    /*
    const userid = ctx.request.params.userid;
    const paper_topic = ctx.request.body.paper_authors;
    const paper_authors = ctx.request.body.paper_authors;
    const file_base64 = ctx.request.body.file_base64;
     */
    //console.log(JSON.stringify(ctx.request.body));
    //console.log("id:"+userid+" topic:"+paper_topic+" authors:"+paper_authors+ " file:"+file_base64);
    let paper = new Paper();
    paper.change(ctx.request.body.bodyData);
    saveDocument(Paper.WORKSHOPCOLLECTION,[paper.getSaveToDb()]);
    ctx.response.set('content-type','application/json');
    ctx.body = "success";
});
exports.UserServices=router;