const Users = require('../models/user.model');
exports.create = function (req, res) {
    
    try {
        console.log("=============>",req.body.hasOwnProperty('f_name'),req.body.f_name);
        if (req.body.hasOwnProperty('f_name')==false|| req.body.f_name == "") {
            res.send({ "message": "f_name is missing" });
        } else if (req.body.hasOwnProperty('l_name')==false|| (req.body.l_name == "")) {
            res.send({ "message": "l_name is missing" });
        } else if (req.body.hasOwnProperty('email')==false|| (req.body.email == "")) {
            res.send({ "message": "email is missing" });
        }
        else if (req.body.hasOwnProperty('password')==false|| (req.body.password == "")) {
            res.send({ "message": "password is missing" });
        }
        else if (req.body.hasOwnProperty('ph_no')==false|| (req.body.ph_no == "")) {
            res.send({ "message": "phone no is missing" });
        }
        else if (req.body.hasOwnProperty('address1')==false|| (req.body.address1 == "")) {
            res.send({ "message": "address is missing" });
        }
        
        else {
            Users.createModel(req.body, function (err, employee) {
                console.log('controller')
                if (err)
                    res.send(err);
                console.log('res', employee);
                res.send(employee);
            });
        }
    } catch (err) {
        res.send(err);
    }
};

exports.update=function(req,res){
    console.log("=========controller=========");
    Users.updateModel(req.params.id,req.body,function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
});
};
exports.findAll = function (req, res) {
    Users.findAllQM(function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};