const express = require('express');
const app = express();
const cloudinary = require('cloudinary');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Cloudinary config
const cloudinarySecret = process.env.PORT ? process.env.CLOUDINARY_SECRET : fs.readFileSync('./private/cloudinary_secret.txt').toString();
cloudinary.config({ 
  cloud_name: 'dormh2fvt', 
  api_key: '778489856867779', 
  api_secret: cloudinarySecret
});
const cloudinaryOptions = { gravity: 'center', height: 100, width: 100 };

// Express config
app.use(express.static(`${__dirname}/dist`));

// Home page
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// Game page
app.get('/game', (req, res) => {
  console.log('/game');
  res.sendFile(`${__dirname}/dist/game.html`);
});

// Register profile
app.post('/register-profile', upload.single('profile-image'), (req, res) => {
  console.log('FILE URL', req.file.path);
  cloudinary.uploader.upload(req.file.path,
    function(result) {
      console.log('result', result);
      fs.unlink(req.file.path, err => {});
    },
  cloudinaryOptions);

  res.sendStatus(200);
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000!');
});
