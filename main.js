const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const dbquote = require('./quotesQueries');
const dbchars = require('./charsQueries');
const dbepis = require('./episodeQueries');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/json', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

//Characters Routes
app.get('/characters', dbchars.getCharacters);
app.get('/characters/:id', dbchars.getCharactersById);
app.post('/characters', dbchars.createCharacter);
app.put('/characters/:id', dbchars.updateCharacter);
app.delete('/characters/:id', dbchars.deleteCharacter);

// app.get('/characters/:id/quotes', db.getCharacterWithQuotes);

// Episodes Routes
app.get('/episodes', dbepis.getEpisodes);
app.get('/episodes/:id', dbepis.getEpisodesById);
app.post('/episodes', dbepis.createEpisode);
app.put('/episodes/:id', dbepis.updateEpisode);
app.delete('/episodes/:id', dbepis.deleteEpisode);

app.get('/episodes/:id/quotes', dbepis.getEpisodeWithQuotes);

//Quotes Routes
// app.get('/quotes', db.getQuotes);
// app.get('/quotes/:id', db.getQuotesById);
// app.post('/quotes', db.createQuote);
// app.put('/quotes/:id', db.updateQuote);
// app.delete('/quotes/:id', db.deleteQuote);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });



// app.get('/godzilla.jpg', (req, res) => {
//   res.sendFile(path.join(__dirname + '/godsilla.jpg'));
// });


app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running on port ${port}. Welcome to SkyNet.`);
});
