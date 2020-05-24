let mysql      = require('mysql');

let connection = mysql.createPool
(
    {
        host     : 'localhost',
        user     : 'root',
        password : 'efrei2020',
        database : 'efrei'
    }
);

module.exports=connection;