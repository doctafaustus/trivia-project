const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/lobby.html`);
});

http.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000');
});

const players = {};

io.on('connection', socket => {
  console.log('a user connected');
  players[socket.id] = socket;
  players[socket.id].test = Math.floor((Math.random() * 1000));
  getPlayers(players);
  //io.emit('player-joined', players);

  socket.on('disconnect', () => {
    console.log('user disconnected');
    delete players[socket.id];
  });


});





function getPlayers(players) {
  const playersArray = Object.keys(players);
  console.log(playersArray);
  playersArray.forEach((player) => {
    console.log('Player Name', player);
    console.log('Test Value', players[player].test);
  });
}
