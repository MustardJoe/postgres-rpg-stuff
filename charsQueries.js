const pool = require('./pool');

//ROUTE FUNCTIONS for CHARACTERS
const getCharacters = (req, res) => {
  pool.select().table('characters').then(characters => {
    res.send(characters);
  }).catch(error => {
    return res.error(error);
  });
  // pool.query('SELECT * FROM characters ORDER BY id ASC', (error, results) => {
  // });
};

const getCharactersById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM characters WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createCharacter = (req, res) => {
  /* eslint-disable-next-line no-console */
  console.log(req.body);  //last create got msg "...has been added with ID undefined"
  const { name, actor, job, imgpath } = req.body;

  pool.query('INSERT INTO  characters (name, actor, job, imgpath) VALUES ($1, $2, $3, $4)',
  /* eslint-disable-next-line no-unused-vars */
    [name, actor, job, imgpath], (error, result) => {
      if(error) {
        throw error;
      }
      res.status(201).send(
        `Character ${name} has been added (POSTED) to the database with Character ID: ${res.insertId}`
      );
    });
};

const updateCharacter = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, actor, job, imgpath } = req.body;

  pool.query(
    'UPDATE users SET name = $2, actor = $3, job = $4, imgpath = $5, WHERE id = $1',
    [id, name, actor, job, imgpath],
    /* eslint-disable-next-line no-unused-vars */
    (error, result) => {
      if(error) {
        throw error;
      }
      res.status(200).send(`Character - ${name} with ID - ${id} has been updated.`);
    }
  );
};

const deleteCharacter = (req, res) => {
  const id = parseInt(req.params.id);

  /* eslint-disable-next-line no-unused-vars */
  pool.query('DELETE FROM characters WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Character with ID: ${id} has been DELETED`);
  });
};

const getCharacterWithQuotes = (req, res) => { 
  const id = parseInt(req.params.id);

  pool.query(`SELECT characters.id AS character_id, characters.name, quotes.id AS quote_id, quotes.text
  FROM characters JOIN quotes_to_characters ON characters.id = quotes_to_characters.character_id JOIN quotes on quotes_to_characters.quote_id = quotes.id  WHERE characters.id = $1`, [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getCharacters,
  getCharactersById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterWithQuotes
};
