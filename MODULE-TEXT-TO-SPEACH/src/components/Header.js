import React from 'react';
import '../styles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <h1>Asteroid Explorer</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Asteroids</li>
          <li>Comets</li>
          <li>Near-Earth Objects</li>
          <li>Resources</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
