var connection = require('../config/connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function(table, cb) {
    var query = 'SELECT * FROM ' + table + ';';
    connection.query(query, [table], function(err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(res);
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var query = 'INSERT INTO ' + table;
    query += ' (';
    query += cols.toString();
    query += ') ';
    query += 'VALUES (';
    query += printQuestionMarks(vals.length);
    query += ') ';

    connection.query(query, vals, function(err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      cb(res);
    });
  },
  updateOne: function(table, obj, condition, cb) {
    var query = 'UPDATE ' + table;
    query += ' SET ';
    query += objToSql(obj);
    query += ' WHERE ';
    query += condition;

    // console.log(query);

    connection.query(query, function(err, res) {
      if (err) {
        console.log(err);
        throw err;
      }
      // if no error, return the result to the callback function
      cb(res);
    });
  }
};

module.exports = orm;
