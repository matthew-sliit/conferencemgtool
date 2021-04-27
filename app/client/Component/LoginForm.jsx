import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import '../assets/scss/index-home-design.scss'

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            data:null,
            msg:null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.getFromRouter = this.getFromRouter.bind(this);
    }
    componentDidMount() {
        this.getFromRouter();
    }
    //method get
    getFromRouter(){
        //works
        fetch('http://localhost:3000/login')
            .then(response => response.text())
            .then(data => this.setState({data:data}))
            .catch(err => console.log(err));
    }
    //method post
    async handleSubmit(event){
        event.preventDefault();
        await fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"username": this.username.value, "password": this.password.value}),
        }).then(response => response.text())
            .then(data => this.setState({data:data}))
            .catch(err => console.log(err));
        console.log("Server:"+JSON.stringify(this.state.data));
    }
    //method post
    async handleSignUp(event){
        event.preventDefault();
        await fetch('http://localhost:3000/login/sign-up',{
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({"username":this.username.value,"password":this.password.value})
        }).then(response => response.text())
            .then(data => this.setState({data:data}))
            .catch(err => console.log(err));
    }
    //method delete
    async handleRemove(event){
        event.preventDefault();
        await fetch('http://localhost:3000/login/remove',{
            method:'delete',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({"username":this.username.value,"password":this.password.value})
        }).then(response => response.text())
            .then(data => this.setState({data:data}))
            .catch(err => console.log(err));
    }
    render() {
        //this.getFromRouter();
        const data = this.state.data;
        return <form onSubmit={this.handleSubmit} id="form">
            {(this.state.data?<p>{data}</p>:'')}
            <input type="text" ref={(ref)=>{this.username=ref}} name="username" placeholder="Enter Username"/>
            <input type="text" ref={(ref)=>{this.password=ref}} name="password" placeholder="Enter Password"/>
            <pre>                <input type="submit" value="Login"/> <input className={"signup-btn"} type="button" value="sign Up" onClick={this.handleSignUp}/> <input className={"delete-btn"} type="button" value="delete" onClick={this.handleRemove}/>
            </pre>
        </form>;
    }
}