var db = require('../db');
// var Sequelize = require('sequelize');
// var db = new Sequelize('chat', 'root', 'students');
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
    // db.messages.sync()
    //   .then(() => {
    //     return db.messages.findAll();
    //   })
    //   .then((results) => callback(null, results))
    //   .catch((err) => callback(err));
  },

  create: function (userName, messageText, roomName, callback) {
    //User.create({username: 'Jean Valjean'}
    // db.users.find({ where: {username: username}})
    //   .then(() => {
    //     return username.id;
    //   });
    // db.messages.create();
    console.log('USERNAME', userName);
    // creating
    // const records = await sequelize.query('select 1 as `foo.bar.baz`', {
    //   nest: true,
    //   type: QueryTypes.SELECT
    // });
    db.users.findOrCreate({where: {'userName': userName}, attributes: ['id']})
      // create does not return anything, we have to get userName's id
      //.then(db.users.findByPk(userName))
      .then((user) => {
        //console.log('THIS IS ERROR: ', err);
        console.log('THIS IS USER: ', user); // <= was an object, But i'm getting Alvin
        console.log('THIS IS USER ID: ', user[0].dataValues.id);
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
