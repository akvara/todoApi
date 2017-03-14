'use strict';

var mongoose = require('mongoose'),
    UserSettings = mongoose.model('UserSettings'),
    config = require('../../config/main');

exports.read_user_settings = function(req, res) {
  UserSettings.find({ userId: req.params.userId }, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.save_user_settings = function(req, res) {
  UserSettings.findOneAndUpdate({'_id': req.params.userId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
