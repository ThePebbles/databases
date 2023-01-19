var db = require('../db');

module.exports = {
  getAll: function () {
    var allMessage = db.query('SELECT * FROM messages;');
  }, // a function which produces all the messages
  create: function (name, text, roomName) {

  } // a function which can be used to insert a message into the database
};
