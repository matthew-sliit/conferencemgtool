exports.ConferenceEdits = class ConferenceEdits{
    static COLLECTION = "conferencehistories";
    //approval
    static UNAPPROVED = "UNAPPROVED"; //not yet
    static SERVICED = "SERVICED";
    static REJECTED = "REJECTED"; //reject
    static APPROVED = "APPROVED";
    constructor() {
        this.userid = "";
        this.timeStamp = "";
        this.changes = [];
    }
    assign(obj){
        Object.assign(this,obj);
    }
    addChanges(userid, changes){
        this.userid = userid;
        this.changes = changes;
        let datetime = new Date();
        this.timeStamp = datetime.toISOString();
    }
    getSaveToDb(){
        return {"userid":this.userid,"timeStamp":this.timeStamp,"changes":this.changes};
    }
    getActionBasedDecision(action){
        if(action==="approve"){
            return ConferenceEdits.APPROVED;
        }else if(action==="reject"){
            return ConferenceEdits.REJECTED;
        }else{
            return ConferenceEdits.UNAPPROVED;
        }
    }
}