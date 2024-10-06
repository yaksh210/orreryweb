// server/index.js
const express = require('express');
const cors = require('cors');
const asteroidData = require('./api/asteroidData');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Use the asteroid data routes
app.use('/api', asteroidData);

app.get('/', (req, res) => res.send('Asteroid Explore API is running!'));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
