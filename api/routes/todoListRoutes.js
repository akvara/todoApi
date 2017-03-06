'use strict';

var routes = function(app) {
  var todoLists = require('../controllers/todoListController');

  app.route('/lists')
    .get(todoLists.list_all_tasklists)
    .post(todoLists.create_a_tasklist);


  app.route('/lists/:taskListId')
    .get(todoLists.read_a_tasklist)
    .put(todoLists.update_a_tasklist)
    .delete(todoLists.delete_a_tasklist);
};

module.exports = routes;