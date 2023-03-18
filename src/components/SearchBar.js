import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    onSubmit(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search For Images</label>
        <input
          placeholder="Search for imgs"
          value={term}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
