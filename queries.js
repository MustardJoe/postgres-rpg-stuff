const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jon',
  host: 'localhost',
  database: 'code_bros',
  password: 'password',
  port: 5432,
});

const getCharacters = (req, res) => {
  pool.query('SELECT * FROM characters ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getCharactersById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createCharacter = (req, res) => {
  const { name, actor, job, imgpath } = req.body;

  pool.query('INSERT INTO  characters (name, actor, job, imgpath) VALUES ($1, $2, $3, $4)',
    [name, actor, job, imgpath], (error, result) => {
      if(error) {
        throw error;
      }
      res.status(201).send(
        `Character ${req.name} has been added (POSTED) to the database with Character ID: ${res.insertId}`
      );
    });
};

const deleteCharacter = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM characters WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Character with ID: ${id} has been DELETED`);
  });
};

module.exports = {
  getCharacters,
  getCharactersById,
  createCharacter,
  deleteCharacter,
};
