const {UserRoles} = require("./common/roles");
const login = require('./login.api').Login;
exports.AdminLogin = class AdminLogin extends login{
    setRole(role){
        this.role = role;
    }
}