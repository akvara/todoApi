'use strict';

var routes = function(app) {
var controller = require('../controllers/todoListController');

  app.route('/')
    .get(controller.ok);

  app.route('/lists')
    .get(controller.list_all_tasklists)
    .post(controller.create_a_tasklist);

  app.route('/lists/:taskListId')
    .get(controller.read_a_tasklist)
    .put(controller.update_a_tasklist)
    .delete(controller.delete_a_tasklist);
    
};

module.exports = routes;
