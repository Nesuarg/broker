/**
 * Created by jann551c on 01/11/15.
 */

var test = require('../models/test.server.model.js');


exports.create = function(req, res){
    var entry = new test({
        memberName:req.body.memberName,
        projectName:req.body.projectName

    });
    entry.save();

    // redirect

    res.redirect(301, "/");
};

exports.getNote = function(req, res){
    res.render('project',{title:'test - new Note'});
};



