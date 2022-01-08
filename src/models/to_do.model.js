var dbConn = require('./../../config/db.config');

exports.findAll=function(result){
    dbConn.query("Select * from to_do", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });  
}
exports.findById=function(id,result){
    dbConn.query("Select * from to_do where T_id =?",id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });  
}
exports.createModel=function(newToDo, result){
    dbConn.query("INSERT INTO to_do set ?",newToDo, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });  
}