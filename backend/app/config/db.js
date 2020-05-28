const mysql = require('mysql');

let connection = mysql.createConnection
(
    {
        host     : 'dwarves.iut-fbleau.fr',
        user     : 'paraiso',
        password : 'paraiso',
        database : 'paraiso'
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