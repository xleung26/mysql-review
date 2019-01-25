const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  database: "todoList",
  user: "root"
});

connection.connect();

module.exports = connection;
