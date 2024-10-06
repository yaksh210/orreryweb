import React, { useEffect, useState } from 'react';
import NearEarthObjectsList from '../components/NearEarthObjectsList';
import { getNearEarthObjects } from '../services/apiService';

const NearEarthObjectsPage = () => {
  const [neoData, setNeoData] = useState([]);

  useEffect(() => {
    // Fetch near-Earth objects data
    const fetchNEOs = async () => {
      const data = await getNearEarthObjects('2024-10-05');
      setNeoData(data.near_earth_objects);
    };
    fetchNEOs();
  }, []);

  return (
    <div className="neo-page">
      <h1>Near-Earth Objects</h1>
      <NearEarthObjectsList neoData={neoData} />
    </div>
  );
}

export default NearEarthObjectsPage;
