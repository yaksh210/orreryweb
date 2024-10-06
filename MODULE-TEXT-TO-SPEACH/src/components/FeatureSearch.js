import React from 'react';

const FeatureSearch = () => {
  return (
    <div className="feature-search">
      <input type="text" placeholder="Search for Asteroids, Comets..." />
      <select>
        <option>All Asteroids</option>
        <option>All Comets</option>
        <option>Near-Earth Objects</option>
      </select>
      <input type="date" />
      <button>Search</button>
    </div>
  );
}

export default FeatureSearch;
