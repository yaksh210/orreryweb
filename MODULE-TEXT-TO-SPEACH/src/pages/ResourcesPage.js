import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <h1>Educational Resources</h1>
      <ul>
        <li><a href="https://www.nasa.gov/asteroids">NASA's Asteroid Resources</a></li>
        <li><a href="https://www.esa.int/Safety_Security/NEO">European Space Agency - NEO Program</a></li>
        <li><a href="https://ssd.jpl.nasa.gov/tools/sbdb_query.html">JPL Small-Body Database Query</a></li>
      </ul>
    </div>
  );
}

export default ResourcesPage;
