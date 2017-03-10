'use strict';

var mongoose = require('mongoose'),
    TaskList = mongoose.model('TaskList');

var delay = 1000;    

exports.list_all_tasklists = function(req, res) {
  TaskList.find({}, function(err, task) {
    if (err)
      res.send(err);
    setTimeout(function(){ return res.json(task) }, delay);
    // res.json(task);
  });
};

exports.create_a_tasklist = function(req, res) {
  var new_tasklist = new TaskList(req.body);

  new_tasklist.save(function(err, task) {
    if (err)
      res.send(err);
    setTimeout(function(){ res.json(task) }, delay);
    // res.json(task);  
  });
};

exports.read_a_tasklist = function(req, res) {
  TaskList.findById(req.params.taskListId, function(err, task) {
    if (err)
      res.send(err);
    setTimeout(function(){ res.json(task) }, delay);
    // res.json(task); 
  });
};

exports.update_a_tasklist = function(req, res) {
  TaskList.findOneAndUpdate({'_id': req.params.taskListId }, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    setTimeout(function(){ res.json(task) }, delay);
    // res.json(task);
  });
};

exports.delete_a_tasklist = function(req, res) {
  TaskList.remove({
    _id: req.params.taskListId
  }, function(err, task) {
    if (err)
      res.send(err);

    setTimeout(function(){ res.json({ message: 'TaskList ' + req.params.taskListId + ' successfully deleted' }) }, delay);
    // res.json({ message: 'TaskList ' + req.params.taskListId + ' successfully deleted' });
  });
};

exports.ok = function(req, res) {
  res.json({msg: 'OK: 170307' });
};
