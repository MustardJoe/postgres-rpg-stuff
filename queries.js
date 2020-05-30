const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jon',
  host: 'localhost',
  database: 'code-bros',
  password: 'password',
  port: 5432,
});
