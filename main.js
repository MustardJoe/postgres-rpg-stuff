const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3000;
const path = require('path');

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Server running on port ${port}. Welcome to SkyNet.`);
});
