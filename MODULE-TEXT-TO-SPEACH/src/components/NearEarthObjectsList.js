import React from 'react';

const NearEarthObjectsList = ({ neoData }) => {
  return (
    <div className="neo-list">
      <h2>Near-Earth Objects List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Approach Time</th>
            <th>Velocity</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {neoData && neoData.length > 0 ? (
            neoData.map((neo, index) => (
              <tr key={index}>
                <td>{neo.name}</td>
                <td>{neo.close_approach_data[0].close_approach_date}</td>
                <td>{neo.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</td>
                <td>{neo.close_approach_data[0].miss_distance.kilometers} km</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Near-Earth Objects Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default NearEarthObjectsList;
