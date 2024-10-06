import React, { useEffect, useState } from 'react';
import AsteroidDetails from '../components/AsteroidDetails';
import { getAllAsteroids } from '../services/apiService';

const AsteroidsPage = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    // Fetch asteroid data on component mount
    const fetchAsteroids = async () => {
      const data = await getAllAsteroids();
      setAsteroids(data);
    };
    fetchAsteroids();
  }, []);

  return (
    <div className="asteroids-page">
      <h1>All Asteroids</h1>
      <div className="asteroid-list">
        {asteroids.map((asteroid, index) => (
          <AsteroidDetails key={index} name={asteroid.name} type={asteroid.type} distance={asteroid.distance} />
        ))}
      </div>
    </div>
  );
}

export default AsteroidsPage;
