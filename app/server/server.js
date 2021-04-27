const Koa = require('koa');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
const a = require('dotenv');
//routers
const HomeRoutes = require('./controllers/home.router.js').DefaultRouter;
const LoginRoutes = require('./controllers/login.router.js').LoginRouter;
//setup server
const server = new Koa();
//attach to server
server.use(cors('Access-Control-Allow-Origin'));
server.use(bodyparser())
    .use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods())
    .use(LoginRoutes.routes()).use(LoginRoutes.allowedMethods())
    .use(context=>{
        //context.body="Hello from server";
        context.redirect('http://localhost:1234/backendbrowser/index.html');
    });
server.listen(3000);
console.log("Application is running on port "+3000);