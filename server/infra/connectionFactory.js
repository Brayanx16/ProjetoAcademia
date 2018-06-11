let mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'academia_database'
    });
}

module.exports = () => {
    return createDBConnection;
}
