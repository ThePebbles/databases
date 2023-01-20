DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  user_id INT(0) AUTO_INCREMENT PRIMARY KEY,
  user_name TEXT
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(0) AUTO_INCREMENT PRIMARY KEY,
  message_text TEXT,
  user_id INT,
  room_name TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
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

