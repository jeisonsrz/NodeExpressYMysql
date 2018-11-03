const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'prueba1',
    insercureAuth: true
});

connection.connect();

module.exports = connection;

