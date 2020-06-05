const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jon',
  host: 'localhost',
  database: 'code_bros',
  password: 'password',
  port: 5432,
});
//http://knexjs.org/
//knex.select('title', 'author', 'year').from('books')
/**
 * books
 * id, name, author_id
 * 1, a, 1
 * 2, b, 2
 * 3, c, 2
 * 4, d, null
 * 
 * SELECT (column) from (table) JOIN (second_table) ON table.second_table_id = second_table.id WHERE table.id = ${some author id};
 * 
 * SELECT authors.id, authors.name, books.id, books.name 
 *     FROM authors JOIN books 
 *         ON books.author_id = authors.id 
 *     WHERE authors.id = ${some author id};
 * 
 * authors 
 * id, name, genre
 * 1, homer, classics
 * 2, Italo Calvino, experimental
 * 
 * 
 * 
 * Intersection
 * id(book), name(book), author_id, id(author), name(author), genre
 * 1, a, 1, 1, homer, classics
 * 2, b, 2, 2, IC, experimental
 * 3, c, 2, 2, IC, experimental
 *
 *
 * Union
 * id(book), name(book), author_id, id(author), name(author), genre
 * 1, a, 1, 1, homer, classics
 * 1, a, 1, 2, IC, experimental
 * 8 total rows
 * 
 */
//ROUTE FUNCTIONS for CHARACTERS
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

  pool.query('SELECT * FROM characters WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createCharacter = (req, res) => {
  console.log(req.body);  //last create got msg "...has been added with ID undefined"
  const { name, actor, job, imgpath } = req.body;

  pool.query('INSERT INTO  characters (name, actor, job, imgpath) VALUES ($1, $2, $3, $4)',
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

  pool.query('DELETE FROM characters WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Character with ID: ${id} has been DELETED`);
  });
};


//ROUTE FUNCTIONS for EPISODES
const getEpisodes = (req, res) => {
  pool.query('SELECT * FROM episodes ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getEpisodesById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM episodes WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
/*
* SELECT authors.id, authors.name, books.id, books.name 
*     FROM authors JOIN books 
*         ON books.author_id = authors.id 
*     WHERE authors.id = ${some author id};
*/
const getQuotesByEpisode = (req, res) => {
  const episodeId = parseInt(req.params.id);

  pool.query('SELECT episodes.synopsis, episodes.episodeName, quotes.id AS quotesId, quotes.text FROM episodes JOIN quotes ON episodes.id = quotes.episode_id WHERE episodes.id = $1',
    [episodeId],
    (error, results) => {
      if(error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
};

const createEpisode = (req, res) => {
  console.log(req.body);  //last create got msg "...has been added with ID undefined"
  const { episodename, synopsis, airdate, season } = req.body;

  pool.query('INSERT INTO episodes (episodename, synopsis, airdate, season) VALUES ($1, $2, $3, $4)',
    [episodename, synopsis, airdate, season], (error, result) => {
      if(error) {
        throw error;
      }
      res.status(201).send(
        `Episode ${episodename} has been added (POSTED) to the database with Episode ID: ${res.insertId}`
      );
    });
};

const updateEpisode = (req, res) => {
  const id = parseInt(req.params.id);
  const { episodename, synopsis, airdate, season } = req.body;

  pool.query(
    'UPDATE episodes SET episodename = $2, synopsis = $3, airdate = $4, season = $5, WHERE id = $1',
    [episodename, synopsis, airdate, season],
    (error, result) => {
      if(error) {
        throw error;
      }
      res.status(200).send(`Episode - ${episodename} with ID - ${id} has been updated.`);
    }
  );
};

const deleteEpisode = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM episodes WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Episode with ID: ${id} has been DELETED`);
  });
};

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

  pool.query('INSERT INTO  quotes (text, episode_id) VALUES ($1, $2)',
    [text, episode_id], (error, result) => {
      if(error) {
        throw error;
      }
      res.status(201).send(
        `Quote has been added (POSTED) to the database`
      );
    });
};

const updateQuote = (req, res) => {
  const id = parseInt(req.params.id);
  const { text, episode_id } = req.body;

  pool.query(
    'UPDATE text SET text = $2, episode_id = $3, WHERE id = $1',
    [id, text, episode_id],
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

  pool.query('DELETE FROM quotes WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Quote with ID: ${id} has been DELETED`);
  });
};


module.exports = {
  getCharacters,
  getCharactersById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getEpisodes,
  getEpisodesById,
  createEpisode,
  updateEpisode,
  deleteEpisode,
  getQuotesByEpisode,
  getQuotes,
  getQuotesById,
  createQuote,
  updateQuote,
  deleteQuote,
};
