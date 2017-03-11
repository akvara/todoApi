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
  immutable: {
    type: Boolean,
    default: false
  },
  usageCount: {
    type: Number,
    default: 0
  },
},
{
  timestamps: true
});

module.exports = mongoose.model('TaskList', TaskListSchema);