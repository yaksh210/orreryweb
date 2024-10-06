import React from 'react';

const CometDetails = ({ name, orbitalPeriod }) => {
  return (
    <div className="comet-details">
      <h3>Name: {name}</h3>
      <p>Orbital Period: {orbitalPeriod} days</p>
    </div>
  );
}

export default CometDetails;
