'use strict';


var mongoose = require('mongoose'),
    TaskList = mongoose.model('TaskList');

exports.list_all_tasklists = function(req, res) {
  TaskList.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_tasklist = function(req, res) {
  var new_tasklist = new TaskList(req.body);
  console.log(req.body);
  console.log(new_tasklist);
  new_tasklist.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_tasklist = function(req, res) {
  TaskList.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_tasklist = function(req, res) {
  TaskList.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.delete_a_tasklist = function(req, res) {
  TaskList.remove({
    _id: req.params.taskListId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'TaskList ' + req.params.taskListId + ' successfully deleted' });
  });
};
