import React, { useState, useEffect } from 'react';
import '../styles/DetailedCard.css';

const DetailedCard = ({ name, speed, size, description, distance, date }) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [isClicked, setIsClicked] = useState(false); // Track click state
  const [isSpeaking, setIsSpeaking] = useState(false); // Track speaking status
  const [speech, setSpeech] = useState(null);

  // Function to handle Text-to-Speech
  const handleTextToSpeech = () => {
    if (!isSpeaking) {
      const newSpeech = new SpeechSynthesisUtterance();
      newSpeech.text = `Comet Name: ${name}. Speed: ${speed} km/h. Size: ${size} meters. Distance from Earth: ${distance} km. Date of closest approach: ${date}. Description: ${description}.`;
      window.speechSynthesis.speak(newSpeech);
      setSpeech(newSpeech);
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  // Function to stop Text-to-Speech
  const stopTextToSpeech = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Cleanup speech when component is unmounted or card is closed
  useEffect(() => {
    return () => {
      if (speech) {
        window.speechSynthesis.cancel();
        setSpeech(null);
      }
    };
  }, [speech]);

  return (
    <div
      className={`detailed-card ${isClicked ? 'zoomed' : ''}`}
      onMouseEnter={() => setIsHovered(true)} // Show hover effects
      onMouseLeave={() => {
        setIsHovered(false);
        if (!isClicked) setIsHovered(false); // Remove hover effects only if not clicked
      }}
      onClick={() => setIsClicked(true)} // Show detailed view on click
    >
      {/* Card Front View */}
      {!isClicked ? (
        <div className="card-content">
          <div className={`card-front ${isHovered ? 'hovered' : ''}`}>
            <img
              src={`https://via.placeholder.com/300x200?text=${name}`} // Replace with actual image if available
              alt={name}
              className="card-image"
            />
            <h3>{name}</h3>
            <p>Speed: {speed} km/h</p>
            <p>Size: {size} meters</p>
          </div>
          <div className="card-hover">
            {/* Hovered Content */}
            <h3>Details</h3>
            <p>{description}</p>
            <p>Distance: {distance} km</p>
            <p>Close Approach Date: {date}</p>
          </div>
        </div>
      ) : (
        /* Zoomed-in Detailed View */
        <div className="detailed-view">
          <h3>{name} - Detailed Information</h3>
          <p>Speed: {speed} km/h</p>
          <p>Size: {size} meters</p>
          <p>Description: {description}</p>
          <p>Distance from Earth: {distance} km</p>
          <p>Date of closest approach: {date}</p>

          <button
            className={`text-to-speech-button ${isSpeaking ? 'speaking' : ''}`}
            onClick={handleTextToSpeech}
          >
            {isSpeaking ? 'Stop Speaking' : 'Speak Details'}
          </button>
          <button
            className="close-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              setIsClicked(false);
              stopTextToSpeech();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
