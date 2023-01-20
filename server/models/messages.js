var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var query = 'SELECT * FROM messages;'; // {username, message_text, roomname}
    db.dbConnection.query(query, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        callback(err, results);
      }
    });
  }, // a function which produces all the messages
  // req.body
  create: function (username, text, roomname, callback) {
    // var query = 'INSERT INTO users (user_name) VALUES (?)';
    // db.dbConnection.query(query, username, (err, results) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     callback(err, results);
    //   }
    // });
    console.log('TEXT: ', text);
    //console.log('username', username);
    var userId = [username];

    // var query = 'INSERT INTO users (user_name) VALUES (?)';
    var query1 = 'SELECT user_id from users WHERE user_name = (?)';
    var query2 = 'INSERT INTO messages (message_text, user_id, room_name) VALUES (?, ?, ?)';
    db.dbConnection.query(query1, userId, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        var params = [text, results[0].user_id, roomname];
        db.dbConnection.query(query2, params, (err, results) => {
          if (err) {
            console.log(err);
          } else {
            callback(null, results);
          }
        });
      }
    });
    //INSERT INTO table_name VALUES (id, message_text, user_id, room_id);

    //get name_id, then get room id, then create message
    //add user name to users table or reference already existing user
    //add roomname to rooms table or reference already existing room
    //add text to messages table with user referring to users table and room referring to rooms table
  } // a function which can be used to insert a message into the database
};
