const mysql = require('mysql2');

// Configuração da conexão
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'root', 
  password: '0000', 
  database: 'zoom4zen', 
});

module.exports = pool.promise();
