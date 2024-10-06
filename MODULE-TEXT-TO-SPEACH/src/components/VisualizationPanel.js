import React from 'react';
import '../styles/VisualizationPanel.css';

const VisualizationPanel = () => {
  return (
    <div className="visualization-panel">
      <h2>3D Visualization</h2>
      <div className="visualization-box">
        {/* Placeholder for 3D model viewer (e.g., Three.js or external API) */}
        <p>3D Model of Asteroid or Comet goes here...</p>
      </div>
    </div>
  );
}

export default VisualizationPanel;
