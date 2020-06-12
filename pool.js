// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'jon',
//   host: 'localhost',
//   database: 'code_bros',
//   password: 'password',
//   port: 5432,
// });
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexConfig.js')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;

var pool = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'jon',
    password : 'password',
    database : 'code_bros',
    port: 5432
  }
});

module.exports = pool;

/* //eslint-disable-next-line new-cap
const router = express.Router();

router.get('/books', (_req, res, next) => {
  knex('books')
    .orderBy('title')
    .then((rows) => {
      const books = camelizeKeys(rows);

      res.send(books);
    })
    .catch((err) => {
      next(err);
    });
});
*/
