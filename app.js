const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/', (req, res) => {
  console.log('/ requestioned');
  console.log(`${__dirname}/dist/index.html`);
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000!');
});