'use strict';
module.exports = function(app) {
  var testApi = require('../controllers/testApiController');

  app.route('/departments')
    .get(testApi.list_all_departments)
    .post(testApi.create_a_department);


  app.route('/departments/:departmentId')
    .get(testApi.read_a_department)
    .put(testApi.update_a_department)
    .delete(testApi.delete_a_department);
};