'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskListSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  tasks: {
    type: String,
    Required: 'Task list name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('TaskList', TaskListSchema);