import React from 'react';
import '../styles/Card.css'; // Import the CSS for the card component

const Card = ({ title, description, details }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="card-details">
        <button onClick={() => alert(`Details: ${details}`)}>View Details</button>
      </div>
    </div>
  );
};

export default Card;
