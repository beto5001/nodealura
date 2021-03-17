const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'betin',
    password: '123456',
    database: 'agenda-petshop'
});

module.exports = connection;
