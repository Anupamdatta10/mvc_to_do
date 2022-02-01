var dbConn = require('./../../config/db.config');

exports.createModel=function(newUser, result){
    dbConn.query("INSERT INTO users set ?",newUser, function (err, res) {
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
    dbConn.query("UPDATE users SET ? WHERE user_id =?",[ body,id], function (err, res) {
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


exports.findAllQM=function(result){
    dbConn.query("select * from users", function (err, res) {
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

exports.deleteModel = function(id, result){
    dbConn.query("delete from users WHERE user_id =?",id, function (err, res) {
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

exports.findById=function(id,result){
    dbConn.query("Select * from users where user_id =?",id, function (err, res) {
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