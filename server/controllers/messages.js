var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(results);
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(req.body);
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

    // res.write(JSON.stringify(models.messages.create(collection[0].username, collection[0].text, collection[0].roomname))); //may need to JSON.stringify

  } // a function which handles posting a message to the database
};
