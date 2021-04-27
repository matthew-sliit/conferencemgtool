const mongodbClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const database = "Sliit";

//check if connection is successful
exports.connectDB = function connectDB(){
    mongodbClient.connect(url,function (err,db){
        if(err) throw err;
        console.log("Database connected!");
        const dbo = db.db(database);
        db.close();
    });
}
//save single-any document
exports.saveDocument = function saveDocument(id, obj){
    mongodbClient.connect(url, function (err, db) {
        if (err) throw err;
        const dbo = db.db(database);
        console.log("saving new document{"+id+"} with ["+JSON.stringify(obj)+"]");
        dbo.collection(id).insertMany(obj, function (err, res) {
            if (err) throw err;
            console.log("No. of documents inserted: "+res.insertedCount);
            //db.close();//not recommended
        });
    });

}
//read multiple-any document
exports.readDocument = async function readDocument(id, filterFor, filter){
    return new Promise((resolve)=>{
        mongodbClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db(database);
            //computed property
            var query = {[filterFor]: filter};
            console.log("reading from document{" + id + "} with filters: [" + filterFor + ":" + filter + "]");
            dbo.collection(id).find(query).toArray(function (err, res) {
                if (err) throw err;
                console.log("mongodb read result:" + JSON.stringify(res));
                resolve(res);
                //console.log("closing db");
                //db.close();//not recommended
            });
        });
    });
}
//delete single-any document
exports.deleteDocument = async function deleteDocument(id, filterFor, filter){
    return new Promise((resolve)=>{
        mongodbClient.connect(url, function (err, db) {
            if (err) throw err;
            const dbo = db.db(database);
            //computed property
            var query = {[filterFor]: filter};
            dbo.collection(id).deleteOne(query, function (err, res){
                if (err) throw err;
                console.log("mongodb delete result:" + JSON.stringify(res));
                resolve(res);
            });
        });
    });
}