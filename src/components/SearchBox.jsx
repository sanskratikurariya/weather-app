import React from "react";
import "../styles/SearchBox.css";

const SearchBox = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
