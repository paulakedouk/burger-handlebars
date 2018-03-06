// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      // send result to callback
      cb(res);
    });
  },

  add: function(burger, cb) {
    orm.insertOne('burger', burger, function(res) {
      // send result to callback
      cb(res);
    });
  },
  update: function(obj, condition, cb) {
    // call orm to update burger
    orm.updateOne('burgers', obj, condition, function(res) {
      // send result to callback
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;
