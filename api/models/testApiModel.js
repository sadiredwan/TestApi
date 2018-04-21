'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DepartmentSchema = new Schema({
  name: {
    type: String,
    required: 'Enter the name of the department'
  },
  Created_date: {
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

module.exports = mongoose.model('Departments', DepartmentSchema);