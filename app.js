const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.get('/game', (req, res) => {
  console.log('/game');
  res.sendFile(`${__dirname}/dist/game.html`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000!');
});