import React from "react";
import NewsListItem from "./NewsListItem";
import resources from "../resource.config";
export default class NewsList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            newsList:[]
        }
    }
    async componentDidMount() {
        await fetch(resources.proxy("/visitor/news"),{
            method: 'get', headers: {'Accept': 'application/json'}
        }).then(r=>r.text()).then(d=>this.setState({newsList:JSON.parse(d)})).catch(e=>console.log(e));
    }
    render() {
        const newsList = this.state.newsList;
        //console.log(JSON.stringify(newsList));
        newsList.sort(function (x,y){
            return x.timeStamp  - y.timeStamp;
        })
        if(newsList.length<1){
            return <p>Stay tuned!</p>;
        }
        return <div style={{overflowY:"scroll",height:"500px"}}>
            {newsList.map(news => {
                return <NewsListItem newsObj={news}/>
            })}
        </div>
    }

}