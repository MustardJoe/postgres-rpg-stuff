const pool = require('./pool');

//ROUTE FUNCTIONS for CHARACTERS
const getCharacters = (req, res) => {
  pool.select().table('characters').then(characters => {
    res.send(characters);
  }).catch(error => {
    return res.error(error);
  });
  // old sql lang query
  // pool.query('SELECT * FROM characters ORDER BY id ASC', (error, results) => {
  // });
};

const getCharactersById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.select().table('characters').where('id', id)
    .then(characters => {
      res.send(characters);
    }).catch(error => {
      return res.error(error);
    });
  //old sql query
  // pool.query('SELECT * FROM characters WHERE id = $1', [id], (error, results) => {
  //   if(error) {
  //     throw error;
  //   }
  //   res.status(200).json(results.rows);
  // });
};

/* eslint-disable-next-line no-unused-vars */
// const createCharacter = (req, res) => {
//   //this route needs work - character posts to db, but browser/postman hang, waiting for
//   //'end or response' or whatever

//   /* eslint-disable-next-line no-console */
//   console.log(req.body);  //last create got msg "...has been added with ID undefined"
//   const { name, actor, job, imgpath } = req.body;

//   pool('characters').insert({ name: name, actor: actor, job: job, imgpath: imgpath }).then(

//     character => {
//       console.log('create', character);
//       res.send(character
//         // `Character ${name} has been added (POSTED) to the database with Character ID: ${res.insertId}`
//       );
//     }).catch(error => {
//     return res.error(error);
//   })
//   ;
  
// };

const createCharacter = async(req, res) => {
  const { name, actor, job, imgpath } = req.body;
  try {
    const character = await pool('characters').insert({ name: name, actor: actor, job: job, imgpath: imgpath })
    res.send(character);
  } catch(error) {
    res.error(error);
  }
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

//this route also does the right thing in the database, but hangs in the browser
/* eslint-disable-next-line no-unused-vars */
const deleteCharacter = (req, res) => {
  const id = parseInt(req.params.id);

  pool('characters').where('id', id).del();
  res => {
    console.log('im here in character delete, i hope the response doesnt spin/hang forever');
    res.send(`Character id ID: ${id} has been deleted from table 'characters'`)
      .catch(error => {
        return res(error);
      });

  };

  // /* eslint-disable-next-line no-unused-vars */
  // pool.query('DELETE FROM characters WHERE id = $1', [id], (error, result) => {
  //   if(error) {
  //     throw error;
  //   }
  //   res.status(200).send(`Character with ID: ${id} has been DELETED`);
  // });
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
