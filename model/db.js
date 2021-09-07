

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'MyNewPass',
    database : 'CRUD'
});

connection.connect(function(err) {
    if (err) throw err;
  console.log("Database Connected!");
});

module.exports = connection;
