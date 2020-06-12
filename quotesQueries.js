// const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'jon',
//   host: 'localhost',
//   database: 'code_bros',
//   password: 'password',
//   port: 5432,
// });

const pool = require('./pool');

console.log(pool.pool);

//ROUTE FUNCTIONS for QUOTES
const getQuotes = (req, res) => {
  pool.query('SELECT * FROM quotes ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getQuotesById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM quotes WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createQuote = (req, res) => {
  console.log(req.body);  //last create got msg "...has been added with ID undefined"
  const { text, episode_id } = req.body;

  pool.query('INSERT INTO quotes (text, episode_id) VALUES ($1, $2)',
    /* eslint-disable-next-line no-unused-vars */
    [text, episode_id], (error, result) => {
      if(error) {
        throw error;
      }
      res.status(201).send(
        'Your Quote has been added (POSTED) to the database.'
      );
    });
};

const updateQuote = (req, res) => {
  const id = parseInt(req.params.id);
  const { text, episode_id } = req.body;

  pool.query(
    'UPDATE text SET text = $2, episode_id = $3, WHERE id = $1',
    [id, text, episode_id],
    /* eslint-disable-next-line no-unused-vars */
    (error, result) => {
      if(error) {
        throw error;
      }
      res.status(200).send(`The Quote with ID ${id} has been updated`);
    }
  );
};

const deleteQuote = (req, res) => {
  const id = parseInt(req.params.id);

  /* eslint-disable-next-line no-unused-vars */
  pool.query('DELETE FROM quotes WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Quote with ID: ${id} has been DELETED`);
  });
};

module.exports = {
  getQuotes,
  getQuotesById,
  createQuote,
  updateQuote,
  deleteQuote,
};
