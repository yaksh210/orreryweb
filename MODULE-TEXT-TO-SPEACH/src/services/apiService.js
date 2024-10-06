import axios from 'axios';

const BASE_URL = "https://api.nasa.gov/neo/rest/v1";
const API_KEY = "er8xAUZpbCBTyoWgqfDbB2VfBY4DP1L5l6rxwnJo";

// Fetch all asteroids
export const getAllAsteroids = async () => {
  const response = await axios.get(`${BASE_URL}/neo/browse?api_key=${API_KEY}`);
  return response.data.near_earth_objects;
};

// Fetch all comets (dummy endpoint, replace with actual)
export const getAllComets = async () => {
  const response = await axios.get(`${BASE_URL}/comets?api_key=${API_KEY}`);
  return response.data.comets;
};

// Fetch near-Earth objects of a given day
export const getNearEarthObjects = async (date) => {
  const response = await axios.get(`${BASE_URL}/feed?start_date=${date}&end_date=${date}&api_key=${API_KEY}`);
  return response.data;
};
