var models = require('../models');

module.exports = {
  get: function (req, res) {
    // users.findAll()
    //   .complete(function(err, results) {
    //     res.json(results);
    //   });
    models.users.getAll((err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(results);
        // res.send(results);
      }
    });
  },
  post: function (req, res) { // create username
    // users.create({userName: req.body[userName]})
    //   .complete((err, user) => {
    //     res.sendStatus(201);
    //   });
    var userName = req.body.username;
    console.log('REQ BODY USERNAME', req.body);
    models.users.create(userName, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
    //res.sendStatus
  }
};