const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');
const db = require('./queries');

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
app.get('/characters', db.getCharacters);
app.get('/characters/:id', db.getCharactersById);
app.post('/characters', db.createCharacter);
app.put('/characters/:id', db.updateCharacter);
app.delete('/characters/:id', db.deleteCharacter);

//Episodes Routes
app.get('/episodes', db.getEpisodes);
app.get('/episodes/:id', db.getEpisodesById);
app.post('/episodes', db.createEpisode);
app.put('/episodes/:id', db.updateEpisode);
app.delete('/episodes/:id', db.deleteEpisode);

//Quotes Routes
app.get('/quotes', db.getQuotes);
app.get('/quotes/:id', db.getQuotesById);
app.post('/quotes', db.createQuote);
app.put('/quotes/:id', db.updateQuote);
app.delete('/quotes/:id', db.deleteQuote);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});



// app.get('/godzilla.jpg', (req, res) => {
//   res.sendFile(path.join(__dirname + '/godsilla.jpg'));
// });


app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running on port ${port}. Welcome to SkyNet.`);
});
