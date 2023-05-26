import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchBar;
