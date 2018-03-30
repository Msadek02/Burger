var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgers_db' // Add your database
  });
}
connection.connect(function(err) {
  console.log(err.code); // 'ECONNREFUSED'
  console.log(err.fatal); // true
});

connection.query('SELECT 1', function (error, results, fields) {
  console.log(error.code); // 'ECONNREFUSED'
  console.log(error.fatal); // true
});

module.exports = connection;
