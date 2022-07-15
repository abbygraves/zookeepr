const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));  // ⬅︎ parse incoming string or array data
app.use(express.json());  // ⬅︎ parse incoming JSON data
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
const { animals } = require('./data/animals');

// —————————————————————————————————————————————————————————————————————————————————————————————

app.listen(PORT, () => {
  console.log('API server now on port ${PORT}!');
});

