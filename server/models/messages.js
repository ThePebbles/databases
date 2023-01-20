var db = require('../db');

var counter = 0;

module.exports = {
  getAll: function (callback) {
    // var query = 'SELECT * FROM messages;'; // {username, message_text, roomname}
    // db.dbConnection.query(query, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     callback(err, results);
    //   }
    // });
    db.messages.findAll()
      .then((results) => callback(null, JSON.stringify(results)))
      .catch((err) => callback(err));
  },

  create: function (userName, messageText, roomName, callback) {

    db.users.findOrCreate({where: {'userName': userName}, attributes: ['id']})

      .then((user) => {

        var params = {
          userId: user[0].dataValues.id,
          messageText: messageText,
          roomName: roomName
        };
        db.messages.create(params)
          .then((results) => callback(null, JSON.stringify(results)))
          .catch((err) => callback(err));
      });
    // var userId = [username];
    // var query1 = 'SELECT userId from users WHERE userName = (?)';
    // var query2 = 'INSERT INTO messages (messageText, userId, roomName) VALUES (?, ?, ?)';
    // db.dbConnection.query(query1, userId, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     var params = [text, results[0].userId, roomname];
    //     db.dbConnection.query(query2, params, (err, results) => {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         callback(null, results);
    //       }
    //     });
    //   }
    // });
  }
};
