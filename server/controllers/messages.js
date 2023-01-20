var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
        // res.send(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var username = req.body.username;
    var message = req.body.message;
    var roomname = req.body.roomname;
    models.messages.create(username, message, roomname, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });


  }
};
