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
const parties = {};

io.on('connection', socket => {
  console.log('a user connected');
  players[socket.id] = socket;
  players[socket.id].test = Math.floor((Math.random() * 1000));
  socket.emit('my-id', socket.id);
  io.emit('player-joined-or-left', getPlayers(players));

  socket.on('disconnect', () => {
    // If disconnecting player was the party leader then disband the party
    if (players[socket.id].isPartyLeader) {
      const partyLeaderID = socket.id;
      const party = parties[partyLeaderID];
      delete parties[partyLeaderID];
      Object.keys(party).forEach(playerID => {
        players[playerID].emit('disband-party-from-leader');
      });
    }
    delete players[socket.id];
    io.emit('player-joined-or-left', getPlayers(players));
  });

  socket.on('invite', data => {
    players[data.playerToInvite].emit('receiveInvite', data.sender);
  });

  socket.on('accept', data => {
    players[data.senderID].emit('accept', data.playerWhoAccepted);
    const partyLeaderID = data.senderID;
    const acceptedPlayerID = data.playerWhoAccepted;

    if (players[partyLeaderID].isPartyLeader) {
      if (Object.keys(parties[partyLeaderID]).length >= 4) return console.log('Party size too big');
      parties[partyLeaderID][acceptedPlayerID] = players[acceptedPlayerID];
    } else {
      parties[partyLeaderID] = {
        [partyLeaderID]: players[partyLeaderID],
        [acceptedPlayerID]: players[acceptedPlayerID],
      };
      players[partyLeaderID].isPartyLeader = true;
    }

    const party = parties[partyLeaderID];
    Object.keys(party).forEach(playerID => {
      players[playerID].emit('party-update', { party: getPlayers(party), status: data.statusBroadcast });
    });
  });

  socket.on('reject', data => {
    players[data.senderID].emit('reject', data.playerWhoRejected);
  });

  socket.on('leave-party', data => {
    const partyLeaderID = data.partyLeader;
    const party = parties[partyLeaderID];
    delete parties[partyLeaderID][data.playerWhoWantsToLeave];
    Object.keys(party).forEach(playerID => {
      players[playerID].emit('party-update', { party: getPlayers(party), status: data.statusBroadcast });
    });
    players[data.playerWhoWantsToLeave].emit('left-party', data.statusTarget);
  });

});



function getPlayers(players) {
  return formattedPlayersArray = Object.keys(players).map(player => {
    return { 
      playerName: player, 
      testValue: players[player].test,
      isPartyLeader: players[player].isPartyLeader ? true : false,
    };
  });
}
