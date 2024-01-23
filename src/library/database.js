const mysql = require('mysql2');

let connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'shortlink',
});

connection.connect((error) => {
    console.log(error ?? "Connection established!");
})

module.exports = connection;