var models = require('../models');

module.exports = {
  get: function (req, res) {

    // messages.findAll({ inlude: [users] })
    //   .complete(function(err, results) {
    //     res.json(results);
    //   });
    models.messages.getAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
    // models.messages.getAll((err, results) => {
    //   if (err) {
    //     res.sendStatus(500);
    //   } else {
    //     res.send(results);
    //   }
    // });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // users.findOrCreate({userName: req.body[userName]})
    //   .complete((err, user) => {
    //     var params = {
    //       userName: user.id,
    //       messageText: req.body[messageText],
    //       roomName: req.body[roomName]
    //     };
    //     messages.create(params)
    //       .complete(function(err, results) {
    //         res.sendStatus(201);
    //       });
    //   });
    // console.log(req.body);
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
