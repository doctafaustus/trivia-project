const express = require('express');

const server = express();
const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});