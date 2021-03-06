var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/**
 Theme: Test Node.js
 IDE: None
 Language: Node.js
 Date: 105/07/08
 Author: HappyMan
 Blog: https://cg2010studio.wordpress.com/
 */

http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Happy World!\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var team = [
    { name: "Shrek", commits: 258 },
    { name: "Jeff", commits: 122 },
    { name: "Mick", commits: 102 }
];
var over120Commits = function (x) { return x.commits > 120; };
var memberName = function (x) { return x.name; };
var toUpperCase = function (x) { return x.toUpperCase(); };
var log = function (x) { return console.log(x); };
team
    .filter(over120Commits)
    .map(memberName)
    .map(toUpperCase)
    .forEach(log);


module.exports = app;
