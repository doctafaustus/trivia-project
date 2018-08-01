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
  socket.emit('my-id', socket.id);
  io.emit('player-joined-or-left', getPlayers(players));

  socket.on('disconnect', () => {
    delete players[socket.id];
    io.emit('player-joined-or-left', getPlayers(players));
  });

  socket.on('invite', data => {
    players[data.playerToInvite].emit('receiveInvite', data.sender);
  });


});





function getPlayers(players) {
  return formattedPlayersArray = Object.keys(players).map(player => {
    return { playerName: player, testValue: players[player].test }
  });
}
