// NEXT: Save user avatar and playerName to DB
// TODO: Clean up auth0.js file

// Core modules
const express = require('express');
const app = express();
const cloudinary = require('cloudinary');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const bodyParser = require('body-parser');

// Database config
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const dbOptions = { useNewUrlParser: true, server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }};
mongoose.Promise = global.Promise; // Removes deprecation warning

// Connect to DB
if (process.env.PORT) {
  const mongodbUri = process.env.MONGODB_URI;
  const mongooseUri = uriUtil.formatMongoose(mongodbUri);
  mongoose.connect(mongooseUri, dbOptions);
} else {
  mongoose.connect('mongodb://localhost/trivia', { useNewUrlParser: true });
}

// Schema
const playerSchema = new mongoose.Schema({
  _id: String,
  playerName: String,
  created: {type: Date, default: Date.now},
});
const Player = mongoose.model('Player', playerSchema);

// Configure MongoStore options
// This enables users to stay logged in even if the server goes down
const mongoStoreOptions = {
  url: process.env.PORT ? process.env.MONGODB_URI : 'mongodb://localhost/trivia',
  ttl: 365 * 24 * 60 * 60,
};

// Express config
app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 31556952000, secure: false },
  resave: true,
  saveUninitialized: true,
  store: new MongoStore(mongoStoreOptions),
}));

// Cloudinary config
const cloudinarySecret = process.env.PORT ? process.env.CLOUDINARY_SECRET : fs.readFileSync('./private/cloudinary_secret.txt').toString();
cloudinary.config({ 
  cloud_name: 'dormh2fvt', 
  api_key: '778489856867779', 
  api_secret: cloudinarySecret
});
const cloudinaryOptions = { gravity: 'center', height: 100, width: 100 };


// Home page
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Game page
app.get('/game', (req, res) => {
  console.log('/game');
  res.sendFile(`${__dirname}/dist/game.html`);
});

// Add / find player
app.post('/auth0-user', (req, res) => {
  console.log('/auth0-user');

  Player.findOne({ '_id': req.body.idToken }, (err, player) => {
    if (player) res.json(player);
    else {
      const newPlayer = new Player({
        _id: req.body.idToken,
        playerName: null,
      });
      newPlayer.save((err, player) => {
        console.log('New player added', player._id);
        res.json(player);
      });
    }
  });
});


// Register profile
app.post('/register-profile', upload.single('profile-image'), (req, res) => {

  cloudinary.uploader.upload(req.file.path,
    function(result) {
      console.log('result', result);
      fs.unlink(req.file.path, err => {});

      res.sendStatus(200);
    },
  cloudinaryOptions);

});

// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000!');
});
