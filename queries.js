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
};
