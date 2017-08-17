   -- * Create the `burgers_db`.
   -- * Switch to or use the `burgers_db`.
   -- * Create a `burgers` table with these fields:
   --   * **id**: an auto incrementing int that serves as the primary key.
   --   * **burger_name**: a string.
   --   * **devoured**: a boolean.
   --   * **date**: a TIMESTAMP. put in 

CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
`time` TIMESTAMP,
PRIMARY KEY (id)
);


