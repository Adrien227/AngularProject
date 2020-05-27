const mysql = require('mysql');

let connection = mysql.createConnection
(
    {
        host     : 'localhost',
        user     : 'root',
        password : 'efrei2020',
        database : 'angular'
    }
);

connection.connect(error => {
    if (error) 
    {
        throw error;
    }
    else
    {
      console.log('Successfully connected to the MYSQL database')
    }
  });
  
  module.exports = connection;