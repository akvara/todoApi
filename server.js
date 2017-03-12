'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  server = process.env.MONGODB_URI || 'mongodb://localhost/akvaratododb',
  mongoose = require('mongoose'),
  routes = require('./api/routes/todoListRoutes'),
  TaskList = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
console.log('===DELAYED VERSION!!=== v170210:')
console.log('Connecting to server:', server)
mongoose.connect(server, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

app
  .use(bodyParser.json()) // support json encoded bodies
  .use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
  .use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // 404 response
    // res.status(404).send({url: req.originalUrl + ' not found'})

    next();
});

routes(app);


var myErrorHandler = function(err, req, res, next){
   console.log(err, req, res, next);
};

app.use(myErrorHandler);

app.listen(port)

console.log('todo list RESTful API server started on: ' + port);
