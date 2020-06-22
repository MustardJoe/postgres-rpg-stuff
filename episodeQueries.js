const pool = require('./pool');

//ROUTE FUNCTIONS for EPISODES
const getEpisodes = (req, res) => {
  pool.select().table('episodes').then(episodes => {
    res.send(episodes);
  }).catch(error => {
    return res.error(error);
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

module.exports = {
  getEpisodes,
  getEpisodesById,
  createEpisode,
  updateEpisode,
  deleteEpisode,
  getEpisodeWithQuotes,
};
