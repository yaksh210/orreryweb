import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SearchBar.css';

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("All Asteroids");
  const [searchDate, setSearchDate] = useState("");

  const handleSearch = async () => {
    let apiUrl = "";
    if (searchType === "All Asteroids") {
      apiUrl = `/api/all-asteroids`;
    } else if (searchType === "All Comets") {
      apiUrl = `/api/all-comets`;
    } else if (searchType === "Near-Earth Objects") {
      apiUrl = `/api/neo/${searchDate}`;
    }

    try {
      const response = await axios.get(apiUrl);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for Asteroids, Comets..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
        <option>All Asteroids</option>
        <option>All Comets</option>
        <option>Near-Earth Objects</option>
      </select>
      {searchType === "Near-Earth Objects" && (
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
      )}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
