const Router = require('@koa/router');
const router = new Router({
    prefix:'/editor'
});
//for editors and admins to view conference details
router.get("/conference", async ctx=>{

})
//for admin to view editor suggestions
router.get("/history/:id", async ctx=>{

})
//add conference edit suggestions and wait for admin approval
router.put("/suggest/:id", async ctx=>{

})
exports.EditorRouter = router;