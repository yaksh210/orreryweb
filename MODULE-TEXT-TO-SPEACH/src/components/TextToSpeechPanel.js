import React from 'react';
import '../styles/TextToSpeechPanel.css';

const TextToSpeechPanel = () => {
  return (
    <div className="text-to-speech-panel">
      <h2>Text-to-Speech Controls</h2>
      <div>
        <label>Speed: </label>
        <input type="range" min="0.5" max="2" step="0.1" />
      </div>
      <div>
        <label>Pitch: </label>
        <input type="range" min="0" max="2" step="0.1" />
      </div>
    </div>
  );
}

export default TextToSpeechPanel;
