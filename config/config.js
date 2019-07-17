require('dotenv').config();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.username,
  password: process.env.password,
  database: 'products_db'
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
