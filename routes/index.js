var express = require('express');
var router = express.Router();
var test = require('../models/test.server.model.js');
var passport = require('passport');
/* GET home page. */
router.get('*', function(req, res) {
    res.render('index', {
        title: 'welcome'
    });

  });

router.post('/login',function(req, res, next){
    var auth = passport.Authenticator('local', function(err, user){
        if(err){return next(err);}
        if(!user){res.send({success:false})}
        req.logIn(user, function(err){
            if(err){return next(err); }
            res.send({success: true, user:user});
        })
    });
    auth(req, res, next);
});


router.get('/partials/*', function(req, res){
    res.render('partials/' + req.params[0])
});

router.post('/admin', function(req, res){
    res.render('admin')
});


/* GET Project page. */
router.get('/projects', function(req, res) {
  test.find(function(err, data){
    res.json(data);
  })

});


/* POST new Project page.*/

router.post('/project', function(req, res){
  var entry = new test({
    memberName:req.body.memberName,
    projectName:req.body.projectName

  });
  entry.save();

  // redirect

  res.redirect(301, "/");
});

module.exports = router;

