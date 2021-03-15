const mysql = require('mysql');

const config = {
    host:       process.env.DB_HOST, 
    user:       process.env.DB_USER,
    password:   process.env.DB_PASS, 
    port:       process.env.DB_PORT,    
    database:   process.env.DB_NAME,
    multipleStatements: true
};

const pool  = mysql.createPool(config);

module.exports = pool;