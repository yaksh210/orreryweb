import React from 'react';
import '../styles/RealTimeDataTable.css';

const RealTimeDataTable = () => {
  const data = [
    { name: '2024 AE1', approachTime: '2024-10-05 12:00 UTC', velocity: '25 km/s', distance: '5,000,000 km' },
    { name: '2024 BT2', approachTime: '2024-10-06 08:00 UTC', velocity: '30 km/s', distance: '10,000,000 km' },
  ];

  return (
    <div className="real-time-data">
      <h2>Near-Earth Objects of the Day</h2>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.approachTime}</td>
              <td>{item.velocity}</td>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RealTimeDataTable;
