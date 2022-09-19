//get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ansekgns421!',
  database: 'calendev',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

let sql = 'SELECT * FROM user';

pool.execute(sql, function (err, res) {
  if (err) throw err;
  console.log(res);
});

//다른 파일에서도 접근가능하게 모듈화.
module.exports = pool.promise();
