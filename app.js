var express = require("express");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'supernova', saveUninitialized: true, resave: true}));
/* app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next){
    var err = req.session.error,
        msg = req.session.notice,
        success = req.session.success;

    delete req.session.error;
    delete req.session.success;
    delete req.session.notice;

    if (err) res.locals.error = err;
    if (msg) res.locals.notice = msg;
    if (success) res.locals.success = success;

    next();
}); */


//mongoose.connect('mongodb://localhost:27017/broker');
mongoose.connect('mongodb://Nesuarg:open123@ds043714.mongolab.com/43714/mediaviewdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error..'));
db.once('open', function callback() {
console.log('broker db opened');
});

var user = mongoose.model('user');
passport.use(new LocalStrategy(
    function(username, password, done){
        user.findOne({username:username}).exec(function(err, user){
            if(!user){
                return done(null, user, { message: 'Incorrect username or password.' })
            } else {
                return done(null, false)
            }
        })
    }
));

/* passport.serializerUser(function(user, done){
    if(user){
        done(null, user._id);
    }
});

passport.deserializerUser(function(id, user){
    user.findOne({_id:id}).exec(function(err, user){
        if(user) {
            return done(null, user);
        } else {
            return done(null, false)
        }

    })
}); */

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log("Listening on port " + port);
});

module.exports = app;
