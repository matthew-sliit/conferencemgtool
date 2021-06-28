exports.Payment = class Payment{
    static COLLECTION = "payments";
    constructor() {
        this.userid = "";
        this.amount = "";
    }
    getSaveToDb(){
        return {"userid":this.userid,"amount":this.amount};
    }
}