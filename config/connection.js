// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.NODE_ENV){
  connection = mysql.createConnection(process.env.JAWSDB_URL, {dialect: "mysql"});
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgers_db', // Add your database
    port: 3306
  });
}

// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});


// Export the Connection
module.exports = connection;