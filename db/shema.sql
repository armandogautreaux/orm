CREATE DATABASE products_db;
USE prducts_db;

CREATE TABLE products
(
  id int NOT NULL
  AUTO_INCREMENT,
	name varchar
  (255) NOT NULL,
	isNew BOOLEAN DEFAULT true,
	PRIMARY KEY
  (id)
);
