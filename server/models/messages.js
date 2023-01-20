var db = require('../db');

module.exports = {
  getAll: function () {
    var allMessage = db.query('SELECT * FROM messages;');
    // console.log(allMessage);
    // return allMessage;
  }, // a function which produces all the messages
  create: function (username, text, roomname) {

    // const username = 'Valjean';
    // const message = 'In mercy\'s name, three days is all I need.';
    // const roomname = 'Hello';
    var name_id;
    var roomName_id;
    db.query('SELECT user_id from users WHERE username = ' + username + ');', (err, results) => {
      if (err) {
        console.log(err);
      } else {
        name_id = results;
        //db.query(INSERT statement)
      }
    })
    //INSERT INTO table_name VALUES (id, message_text, user_id, room_id);
    db.query('INSERT INTO messages VALUES (' + id ', ' + name_id + ', ' + text +  ', ' + roomName_id + ');', (err, results) => {
      if (er)
    });

    //get name_id, then get room id, then create message
    //add user name to users table or reference already existing user
    //add roomname to rooms table or reference already existing room
    //add text to messages table with user referring to users table and room referring to rooms table
  } // a function which can be used to insert a message into the database
};
