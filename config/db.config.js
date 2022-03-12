'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'sql6.freemysqlhosting.net',
  user     : 'sql6477712',
  password : 'dubCfvK2J2',
  database : 'sql6477712',
  port     : '3306'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;