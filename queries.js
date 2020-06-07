const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'jon',
  host: 'localhost',
  database: 'code_bros',
  password: 'password',
  port: 5432,
});

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

/*
* SELECT authors.id, authors.name, books.id, books.name 
*     FROM authors JOIN books 
*         ON books.author_id = authors.id 
*     WHERE authors.id = ${some author id};
*/

const getCharacterWithQuotes = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT characters.name, character.id AS characterID, quotes.id AS quoteId FROM quotes_to_characters JOIN characters ON quotes_to_characters.character_id = characters.id  WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
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

const createEpisode = (req, res) => {
  console.log(req.body);  //last create got msg "...has been added with ID undefined"
  const { episodename, synopsis, airdate, season } = req.body;
  
  pool.query('INSERT INTO episodes (episodename, synopsis, airdate, season) VALUES ($1, $2, $3, $4)',
    /* eslint-disable-next-line no-unused-vars */
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
    /* eslint-disable-next-line no-unused-vars */
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
  
  /* eslint-disable-next-line no-unused-vars */
  pool.query('DELETE FROM episodes WHERE id = $1', [id], (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).send(`Episode with ID: ${id} has been DELETED`);
  });
};

const getEpisodeWithQuotes = (req, res) => {
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
  getCharacters,
  getCharactersById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterWithQuotes,
  getEpisodes,
  getEpisodesById,
  createEpisode,
  updateEpisode,
  deleteEpisode,
  getEpisodeWithQuotes,
  getQuotes,
  getQuotesById,
  createQuote,
  updateQuote,
  deleteQuote,
};
