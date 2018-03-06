var connection = require('../config/connection.js');

var orm = {
  selectAll: function(table, cb) {
    var query = 'SELECT * FROM ?? WHERE ?? = ?';
    connection.query(query, [table, cb], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(table, burger, cb) {
    var query = 'INSERT INTO ' + table + '?? VALUES (?);';
    connection.query(query, ['burger_name', burger], function(err, res) {
      if (err) throw err;

      cb(res);
    });
  },
  updateOne: function(table, obj, condition, cb) {
    var query = 'UPDATE ' + table + ' SET ' + obj + ' WHERE ' + condition + ';';

    connection.query(query, function(err, res) {
      if (err) throw err;
      // if no error, return the result to the callback function
      cb(res);
    });
  }
};

module.exports = orm;
