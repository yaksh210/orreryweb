import React from 'react';
import '../styles/AsteroidDetails.css';

const AsteroidDetails = () => {
  return (
    <div className="asteroid-details">
      <h2>Asteroid Details</h2>
      <div className="detail-card">
        <h3>Name: Placeholder</h3>
        <p>Type: Asteroid</p>
        <p>Distance: 10,000 km</p>
        <p>Orbital Period: 365 days</p>
        <button>Read Aloud</button>
      </div>
    </div>
  );
}

export default AsteroidDetails;
