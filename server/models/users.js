var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.users.sync().then(db.users.findAll())
      .then((results) => callback(null, JSON.stringify(results)))
      .catch((err) => callback(err));

    // var query = 'SELECT * FROM users';
    // db.dbConnection.query(query, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     callback(err, results);
    //   }
    // });
  },
  create: function (username, callback) {
    console.log('logging username:', username);
    db.users.sync().then(db.users.create({userName: username}))
      .then((user) => callback(null, JSON.stringify(user)))
      .catch((err) => callback(err));
    // var query = 'INSERT INTO users (userName) VALUES (?)';
    // db.dbConnection.query(query, username, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     callback(err, results);
    //   }
    // });
  }
};
