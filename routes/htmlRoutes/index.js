const path = require('path');
const router = require('express').Router();


//                    HTML GET ROUTES
// ————————————————————————————————————————————————————————
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});


// ⬇︎ http://localhost:3001/animals
router.get('/animals', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/animals.html'));
});


// ⬇︎ http://localhost:3001/zookeepers
router.get('/zookeepers', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});


// ⬇︎ wildcard route (* means any route entered un the url that's not found/this will bring u back to homepage)
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});



module.exports = router;