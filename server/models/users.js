var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var query = 'SELECT * FROM users';
    db.dbConnection.query(query, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    });
  },
  create: function (username, callback) {
    var query = 'INSERT INTO users (user_name) VALUES (?)';
    db.dbConnection.query(query, username, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    });
  }
};
