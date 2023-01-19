DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT PRIMARY KEY,
  username TEXT
);

CREATE TABLE rooms (
  room_id INT PRIMARY KEY,
  roomname TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT PRIMARY KEY,
  message_text TEXT,
  user_id INT,
  room_id INT,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
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

