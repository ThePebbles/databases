
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var mysql = require('mysql2');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'students', {
  host: 'localhost',
  dialect: 'mysql',
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

users.hasMany(messages);
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



