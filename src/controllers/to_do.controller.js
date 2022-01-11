
const To_do = require('../models/to_do.model');

exports.findAll = function (req, res) {
    To_do.findAll(function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.findById = function (req, res) {
    To_do.findById(req.params.id,function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);
    });
};

exports.create = function (req, res) {
    try {
        if (!req.body.hasOwnProperty('T_Name')) {
            res.send({ "message": "t_name property is missing" });
        } else if (req.body.Status == "") {
            res.send({ "message": "status is missing" });
        } else if (req.body.T_Name == "") {
            res.send({ "message": "t_name is missing" });
        }
        else {
            To_do.createModel(req.body, function (err, employee) {
                console.log('controller')
                if (err)
                    res.send(err);
                console.log('res', employee);
                res.send(employee);
            });
        }
    } catch (err) {
        res.send(err);
    }};


exports.update=function(req,res){
    To_do.update(req.params.id,function (err, employee) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', employee);
        res.send(employee);


})
};