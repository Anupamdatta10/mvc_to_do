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

exports.updateModel = function(id,body, result){
    try{
    dbConn.query("UPDATE to_do SET ? WHERE T_id =?",[ body,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
      }); 
    }catch(err)
    {
        result(null, err);
    }
};

exports.deleteModel = function(id, result){
    dbConn.query("delete from to_do WHERE T_id =?",id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
      }); 
};

exports.findByUserId=function(id,result){
    dbConn.query("Select * from to_do ,contact where to_do.user_id=contact.user_id and to_do.user_id =?",id, function (err, res) {
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