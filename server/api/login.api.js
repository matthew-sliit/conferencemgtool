const crypto_hash = require('crypto');
const {UserRoles} = require("./common/roles");
exports.Login = class Login{
    static COLLECTION = "logins";
    static USERNAME = "username";
    #password;
    constructor() {
        //id is auto-generated by mongodb, which is referenced here as login_id
        this.login_id ='';
        this.username = '';
        this.#password='';
        this.role=UserRoles.ATTENDEE;
    }
    #getSHA256Hex(password){
        return crypto_hash.createHash('sha256').update(password).digest('hex');
    }
    getSaveToDB(){
        if(typeof this.status !== "undefined"){
            return {"username":this.username,"password":this.#password,"role":this.role,"ban":this.status};
        }
        return {"username":this.username,"password":this.#password,"role":this.role};
    }
    loadFromDB(obj){
        this.login_id=obj._id.toString();
        this.username=obj.username;
        this.role=obj.role;
        this.#password=obj.password;
        if(typeof obj.ban !== "undefined"){
            this.ban = obj.ban;
        }
    }
    setPassword(password){
        this.#password =this.#getSHA256Hex(password);
    }
    setRole(role){
        if(role!==UserRoles.ADMIN){
            this.role = role;
        }
    }
    setUsername(username){
        this.username = username;
    }
    passwordIsValid(password){
        //console.log("#password => "+this.#password);
        //console.log("#password hashed => "+this.#getSHA256Hex(password));
        return this.#password === this.#getSHA256Hex(password);
    }
}