const Router = require('@koa/router');
//mongo
const saveDocument = require('../api/db/mongodb.api').saveDocument;
const saveDocumentGetId = require('../api/db/mongodb.api').saveDocumentGetId;
const readDocument = require('../api/db/mongodb.api').readDocument;
const readAllDocuments = require('../api/db/mongodb.api').readAllDocuments;
const router = new Router({
    prefix:'/user'
});
router.get("/author/:id",async ctx=>{

});
router.put("/author/:id", async ctx=>{
   const authorId = ctx.request.params.id;
   const files = ctx.request.body.files;

});