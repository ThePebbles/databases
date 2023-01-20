DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userId INT(0) AUTO_INCREMENT PRIMARY KEY,
  userName TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(0) AUTO_INCREMENT PRIMARY KEY,
  messageText TEXT,
  userId INT,
  roomName TEXT,
  FOREIGN KEY (userId) REFERENCES users(userId)
);

-- CREATE TABLE Orders (
--     OrderID int NOT NULL,
--     OrderNumber int NOT NULL,
--     PersonID int,
--     PRIMARY KEY (OrderID),
--     FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
-- );


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

