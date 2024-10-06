import React, { useEffect, useState } from 'react';
import CometDetails from '../components/CometDetails';
import { getAllComets } from '../services/apiService';

const CometsPage = () => {
  const [comets, setComets] = useState([]);

  useEffect(() => {
    // Fetch comet data on component mount
    const fetchComets = async () => {
      const data = await getAllComets();
      setComets(data);
    };
    fetchComets();
  }, []);

  return (
    <div className="comets-page">
      <h1>All Comets</h1>
      <div className="comet-list">
        {comets.map((comet, index) => (
          <CometDetails key={index} name={comet.name} orbitalPeriod={comet.orbital_period} />
        ))}
      </div>
    </div>
  );
}

export default CometsPage;
