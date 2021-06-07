const Koa = require('koa');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const formidable = require('koa2-formidable');
require('dotenv').config();
//routers
const HomeRoutes = require('./routes/home.router.js').DefaultRouter;
const LoginRoutes = require('./routes/login.router.js').LoginRouter;
//setup server
const server = new Koa();
//attach to server
server.use(cors('Access-Control-Allow-Origin'));
server.use(formidable({uploadDir:'./server/files/temp', keepExtensions:true}));
server.use(bodyparser())
    .use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods())
    .use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods())
    .use(context=>{
        //where the request is to an invalid endpoint
        context.body="Access Denied!";
        //context.redirect('http://localhost:1234/backendbrowser/index.html');
    });
server.listen(process.env.SERVER_LOCAL_PORT);
console.log("Application is running on port "+process.env.SERVER_LOCAL_PORT);