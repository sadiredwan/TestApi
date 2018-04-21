'use strict';


var mongoose = require('mongoose'),
  Department = mongoose.model('Departments');

exports.list_all_departments = function(req, res) {
  Department.find({}, function(err, department) {
    if (err)
      res.send(err);
    res.json(department);
  });
};




exports.create_a_department = function(req, res) {
  var new_department = new Department(req.body);
  new_department.save(function(err, department) {
    if (err)
      res.send(err);
    res.json(department);
  });
};


exports.read_a_department = function(req, res) {
  Department.findById(req.params.departmentId, function(err, department) {
    if (err)
      res.send(err);
    res.json(department);
  });
};


exports.update_a_department = function(req, res) {
  Department.findOneAndUpdate({_id: req.params.departmentId}, req.body, {new: true}, function(err, department) {
    if (err)
      res.send(err);
    res.json(department);
  });
};


exports.delete_a_department = function(req, res) {
  Department.remove({
    _id: req.params.departmentId
  }, function(err, department) {
    if (err)
      res.send(err);
    res.json({ message: 'Department successfully deleted' });
  });
};

