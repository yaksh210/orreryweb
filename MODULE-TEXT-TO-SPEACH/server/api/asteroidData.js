// server/api/asteroidData.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

const NASA_API_KEY = "er8xAUZpbCBTyoWgqfDbB2VfBY4DP1L5l6rxwnJo"; // Replace with your actual NASA API Key
const BASE_URL = "https://api.nasa.gov/neo/rest/v1";

// Route to get Near-Earth Objects of a given date
router.get('/neo/:date', async (req, res) => {
  const date = req.params.date;
  try {
    const response = await axios.get(`${BASE_URL}/feed?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Near-Earth Objects data" });
  }
});

// Route to get detailed information about a specific asteroid by its ID
router.get('/asteroid/:id', async (req, res) => {
  const asteroidId = req.params.id;
  try {
    const response = await axios.get(`${BASE_URL}/neo/${asteroidId}?api_key=${NASA_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asteroid details" });
  }
});

// Route to get a list of all asteroids (example - replace with appropriate endpoint)
router.get('/all-asteroids', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/neo/browse?api_key=${NASA_API_KEY}`);
    res.json(response.data.near_earth_objects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch asteroid list" });
  }
});

// Route to get comet data (use a real comet data endpoint if available)
router.get('/all-comets', async (req, res) => {
  try {
    const response = await axios.get(`https://api.somecometdata.com/comets?api_key=${NASA_API_KEY}`); // Placeholder URL
    res.json(response.data.comets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comet list" });
  }
});

module.exports = router;
