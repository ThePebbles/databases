var models = require('../models');

module.exports = {
  get: function (req, res) {
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
    var userName = req.body.username;
    console.log('REQ BODY USERNAME', req.body);
    models.users.create(userName, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};