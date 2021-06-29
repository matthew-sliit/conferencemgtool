exports.Conference = class Conference{
    static COLLECTION = "conference";
    constructor() {
        this.name = "";
        this.tag = "";
        this.topics = [];
        this.keynotes = [];
        this.submissionDeadline = "";
        this.reviewDeadline = "";
        this.papersExpected = 0;
        this.startDate = "";
        this.endDate = "";
        this.venue = "";
    }
    getSaveToDb(){
        return {"name":this.name,"topics":this.topics,"keynotes":this.keynotes,"submissionDeadline":this.submissionDeadline,"reviewDeadline":this.reviewDeadline,"papersExpected":this.papersExpected,"startDate":this.startDate,
        "endDate":this.endDate,"venue":this.venue};
    }
    change(obj){
        Object.assign(this,obj);
    }
    getDifference(obj) {
        let difference = [];
        if (this.name !== obj.name) {
            difference.push({"field": "name", "old": this.name, "new": obj.name,"approval":"UNAPPROVED"});
        }
        if (this.tag !== obj.tag) {
            difference.push({"field": "tag", "old": this.tag, "new": this.tag,"approval":"UNAPPROVED"});
        }
        if (this.submissionDeadline !== obj.submissionDeadline) {
            difference.push({
                "field": "submissionDeadline",
                "old": this.submissionDeadline,
                "new": obj.submissionDeadline,
                "approval":"UNAPPROVED"});
        }
        if (this.reviewDeadline !== obj.reviewDeadline) {
            difference.push({"field": "reviewDeadline", "old": this.reviewDeadline, "new": obj.reviewDeadline,"approval":"UNAPPROVED"});
        }
        let papersExpected = 0;
        try {
            papersExpected = parseInt(obj.papersExpected);
        }catch (exception){}
        if(this.papersExpected!==papersExpected){
            difference.push({"field":"papersExpected","old":this.papersExpected,"new":obj.papersExpected,"approval":"UNAPPROVED"});
        }
        if(this.startDate!==obj.startDate){
            difference.push({"field":"startDate","old":this.startDate,"new":obj.startDate,"approval":"UNAPPROVED"});
        }
        if(this.endDate!==obj.endDate){
            difference.push({"field":"endDate","old":this.endDate,"new":obj.endDate,"approval":"UNAPPROVED"});
        }
        if(this.venue!==obj.venue){
            difference.push({"field":"venue","old":this.venue,"new":obj.venue,"approval":"UNAPPROVED"});
        }
        let pushTopics = false,pushKeynotes=false;
        if(this.topics.length!==obj.topics.length){
            pushTopics = true;
        }else {
            for (let i; i < this.topics.length; i++) {
                if (this.topics[i] !== obj.topics[i]) {
                    pushTopics = true;
                    break;
                }
            }
        }
        if(pushTopics){
            difference.push({"field":"topics","old":this.topics,"new":obj.topics,"approval":"UNAPPROVED"});
        }
        if(this.keynotes.length!==obj.keynotes.length){
            pushTopics = true;
        }else {
            console.log(JSON.stringify(this.keynotes));
            console.log(JSON.stringify(obj.keynotes));
            for (let i; i < this.keynotes.length; i++) {
                if (this.keynotes[i].name !== obj.keynotes[i].name || this.keynotes[i].link !== obj.keynotes[i].link) {
                    pushKeynotes = true;
                    break;
                }
            }
        }
        if(pushKeynotes){
            difference.push({"field":"keynotes","old":this.keynotes,"new":obj.keynotes,"approval":"UNAPPROVED"});
        }
        return difference;
    }
    static getInitialFormat(){
        let conference = new Conference();
        conference.name = "International Conference on Application Frameworks";
        conference.keynotes = [{
            "name": "Dr.Lei",
            "link": "www.google.lk"
        }, {
            "name": "Dr.Kei",
            "link": "www.google.lk"
        }, {
            "name": "Dr.Jei",
            "link": "www.google.lk"
        }];
        conference.submissionDeadline = "";
        conference.reviewDeadline = "";
        conference.papersExpected = 0;
        conference.startDate = "";
        conference.endDate = "";
        conference.topics = [""];
        conference.tag = "ICAF";
        conference.venue = "SLIIT Malabe Campus, New Kandy Rd, Malabe 10115";
        return conference;
    }
}