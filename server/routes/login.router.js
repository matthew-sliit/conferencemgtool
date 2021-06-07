const Router = require('@koa/router');
//from mongo
const checkDB = require('../api/db/mongodb.api').connectDB;
const saveDocument = require('../api/db/mongodb.api').saveDocument;
const readDocument = require('../api/db/mongodb.api').readDocument;
const Login = require('../api/login.api').Login;
//database collection
const collection = "LoginData";

//router prefix
const router = new Router({prefix:'/login'});
/**
 * router.verb(url,...)
 * url should not contain ?!.
 */
//get method in login
router.get('/', context=>{
    console.log("LoginRouter{get} <- " + JSON.stringify(context.headers.referer));
    //context.body="Hello from Login Router";
    context.response.body ="Login GET";
});

//post method in login
router.post('/',async (context)=>{
    //context.body="Login data Posted to Login Router";
    console.log("LoginRouter{post} login/ <- username:"+context.request.body.username+" password:"+context.request.body.password);
    //console.log(JSON.stringify(context.request.body));
    const username = context.request.body.username;
    const password = context.request.body.password;
    let userFromDB;
    try{
        await readDocument(collection,"username",username).then(
            function(resolved){
                userFromDB = resolved;
            }
        );
        //console.log(userFromDB);
        //console.log("router post -> " + JSON.stringify(userFromDB));
        //response.setHeader('Content-Type','text');
        context.response.set('Content-Type','application/json');//same as context.response.set
        if (userFromDB.length<1){
            console.log("No users found!");
            context.response.body ="Invalid Account!";

            //response.set("msg","wrong-account");
            //await context.render('index',{msg:"Invalid Account"});
        }else{
            //if has value
            let login = new Login();
            login.loadFromDB(userFromDB[0]);
            console.log("loaded: "+JSON.stringify(login.getSaveToDB()));
            if (login.passwordIsValid(password)) {
                console.log("Successful login");
                context.response.body = "Successful Login!";
            } else {
                console.log("Incorrect Password!");
                context.response.body = "Wrong Password!";
            }
        }
    }catch (e){
        console.log(e);
    }
    //console.log("LoginRouter sends -> "+JSON.stringify(context.response.body));
});
//handles http://localhost:3000/login/sign-up
router.post('/sign-up',async context=>{
    //context.body="Sign Up data Posted to Login Router";
    const username = context.request.body.username;
    const password = context.request.body.password;
    console.log("LoginRouter{post} login/sign-up <- username:"+context.request.body.username+" password:"+context.request.body.password);
    var obj = [{username:username,password:password}];
    context.response.set('Content-Type','application/json');
    let userFromDB;
    try{
        await readDocument(collection,"username",username).then(
            function(resolved){
                userFromDB = resolved;
            }
        );
        if(userFromDB.length>0){
            //context.set("msg","account-exists");
            context.response.body ="Account with same username exists!";
            //await context.render('index',{msg:"Account with same username exists!"});
        }else{
            saveDocument(collection,obj);
            //context.set("msg","success");
            context.response.body = "Successfully Signed Up!";
            //await context.render('index',{msg:"Successfully Signed Up!"});
        }
    }catch (e){
        //context.set("msg","error");
        context.response.body = "Sorry we had an error during sign up. =(";
        console.log(e);
    }
});
router.delete('/remove',async context=>{
    context.body="Delete method";
    //read from request
    const username = context.request.body.username;
    const password = context.request.body.password;
    //log to terminal
    console.log("LoginRouter{delete} login/remove <- username:"+username+" password:"+password);
    //send back to frontend
    context.response.set('Content-Type','application/json');
    context.response.body ="Have to handle remove!";
});
exports.LoginRouter=router;