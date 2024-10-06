import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import DetailedCard from '../components/DetailedCard'; // Using DetailedCard component for each result
import RealTimeDataTable from '../components/RealTimeDataTable';
import VisualizationPanel from '../components/VisualizationPanel';
import TextToSpeechPanel from '../components/TextToSpeechPanel';
import '../styles/ExplorePage.css';

const ExplorePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Sample data for testing (you can replace with actual search results)
  const sampleData = [
    {
      id: 1,
      name: 'Asteroid 2021 QM1',
      speed: '23,000',
      size: '120',
      description: 'A near-Earth asteroid with potential risk to Earth.',
      distance: '3,000,000',
      date: '2021-04-18',
    },
    {
      id: 2,
      name: 'Comet NEOWISE',
      speed: '40,000',
      size: '5,000',
      description: 'A bright comet visible in 2020.',
      distance: '103,500,000',
      date: '2020-07-23',
    },
    // Add more sample data as needed
  ];

  return (
    <div className="explore-page">
      <Header />
      <SearchBar setSearchResults={setSearchResults} />
      <div className="content-section">
        <VisualizationPanel />
        <div className="card-list">
          {/* Display DetailedCards instead of basic cards */}
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <DetailedCard
                key={result.id}
                name={result.name}
                speed={result.speed}
                size={result.size}
                description={result.description}
                distance={result.distance}
                date={result.date}
              />
            ))
          ) : (
            // Display sample data if no search results
            sampleData.map((data) => (
              <DetailedCard
                key={data.id}
                name={data.name}
                speed={data.speed}
                size={data.size}
                description={data.description}
                distance={data.distance}
                date={data.date}
              />
            ))
          )}
        </div>
      </div>
      <RealTimeDataTable data={searchResults.length > 0 ? searchResults : sampleData} />
      <TextToSpeechPanel />
    </div>
  );
};

export default ExplorePage;
