

var mysql = require('mysql2');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'students', {
  host: 'localhost',
  dialect: 'mysql',
  define: {timestamps: false}
});
db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */
/* first define the data structure by giving property names and datatypes
* See http://sequelizejs.com for other datatypes you can use besides STRING. */
var users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userName: Sequelize.STRING
});

var messages = db.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    defaultValue: 0
  },
  messageText: Sequelize.STRING,
  roomName: Sequelize.STRING
});

users.hasMany(messages, {
  foreignKey: 'userId'
});
messages.belongsTo(users);

users.sync();
messages.sync();

// module.exports = {
//   users: users,
//   messages: messages
// };

exports.users = users;
exports.messages = messages;

// module.exports = {
//   dbConnection: mysql.createConnection({
//     user: 'root',
//     password: 'students', //insert my password here
//     database: 'chat',
//   })
// };



