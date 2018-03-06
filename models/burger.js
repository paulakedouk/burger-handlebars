// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      // send result to callback
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    // console.log(cols, vals);
    orm.insertOne('burgers', cols, vals, function(res) {
      // send result to callback
      cb(res);
    });
  },
  updateOne: function(obj, condition, cb) {
    // call orm to update burger
    orm.updateOne('burgers', obj, condition, function(res) {
      // send result to callback
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
